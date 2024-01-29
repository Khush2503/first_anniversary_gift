import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [NgbModule, ReactiveFormsModule, FormsModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  submitted = false;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() : void {
    this.loginForm = this.fb.group(
      {
        user: ['', Validators.required],
        password: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
    );
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.loginForm.value, null, 2));
  }

}
