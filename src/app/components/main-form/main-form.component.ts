import { Component, Input } from '@angular/core';
import { FormInputComponent } from "../form-input/form-input.component";

@Component({
  selector: 'app-main-form',
  imports: [FormInputComponent],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.scss'
})
export class MainFormComponent {
  
}
