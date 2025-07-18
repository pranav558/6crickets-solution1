import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DeadlineService } from './deadline-service';

@Component({
  selector: 'app-deadline',
  imports: [],
  templateUrl: './deadline.html',
  styleUrl: './deadline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Deadline {
  deadline = inject(DeadlineService).deadlineResource;
}
