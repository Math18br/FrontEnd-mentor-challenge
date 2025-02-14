import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFormComponent } from "./components/main-form/main-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-forms';
}
