import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-box',
  imports: [],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss'
})
export class CheckBoxComponent {
  @Input() label_text:string = "";
}