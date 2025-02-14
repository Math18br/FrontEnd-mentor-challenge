import { Component, Input } from '@angular/core';
import { FormInputComponent } from "../form-input/form-input.component";
import { ConfirmButtonComponent } from "../confirm-button/confirm-button.component";

@Component({
  selector: 'app-main-form',
  imports: [FormInputComponent, ConfirmButtonComponent],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.scss'
})
export class MainFormComponent {

}
