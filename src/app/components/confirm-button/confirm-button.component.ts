import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-confirm-button',
  imports: [],
  templateUrl: './confirm-button.component.html',
  styleUrl: './confirm-button.component.scss'
})
export class ConfirmButtonComponent {
  @Input() button_text:string = "";
}
