import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Deadline } from './deadline/deadline';

@Component({
  selector: 'app-root',
  imports: [Deadline],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected title = '6crickets-solution1';
}
