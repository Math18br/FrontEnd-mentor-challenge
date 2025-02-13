import { Component, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() nome_label:string = "";
  @Input() placeholder:string = "";
}
