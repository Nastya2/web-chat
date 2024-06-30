import { Component, DestroyRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  //destroyRef = inject(DestroyRef);

  constructor(private destroyRef: DestroyRef) {

  }
  ngOnInit() {
  }
}
