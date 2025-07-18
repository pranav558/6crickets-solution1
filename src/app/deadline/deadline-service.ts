import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, distinctUntilChanged, endWith, interval, of, switchMap, takeWhile, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {
  private readonly http = inject(HttpClient);

  readonly deadlineResource = rxResource<number | null, void>({
    stream: () => {
      // change API call string for actual backend API -/api/deadline
      return this.http.get<{ secondsLeft: number }>('/data/deadline.json').pipe(
        switchMap(deadline => {
          const startTime = Date.now();
          const secondsLeft = deadline.secondsLeft;

          return interval(1000).pipe(
            switchMap(() => {
              const secondsGone = Math.floor((Date.now() - startTime) / 1000);
              const currentSeconds = Math.max(0, secondsLeft - secondsGone);
              return [currentSeconds];
            }),
            takeWhile(seconds => seconds > 0 ),
            endWith(null)
          );
        }),
        catchError(error => {
          return throwError(() => error);
        })
      );
    },
    defaultValue: null
  });
}
