// we will see
import { CommonModule } from '@angular/common';
import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h6>Hello from Angular!!</h6>

    <p *ngIf="show">help</p>

    <button (click)="toggle()">Toggle</button>
  `,
})
export class HelloComponent {
  show = false;

  toggle() {
    console.log('devMode :',isDevMode())
    this.show = !this.show;
  }
}
