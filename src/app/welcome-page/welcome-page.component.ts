import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [NgbModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  submitted = false;

  formText = 'Avi.Khush@2023';

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    console.log(this.loginForm);

    if (this.loginForm.invalid) {
      return;
    }
    if(this.controls['user'].value == this.formText && this.controls['password'].value == this.formText) {
      window.localStorage.setItem("isAuthenticated", "true");
      this.router.navigate(['/surprise']);
    } else{
      window.alert("Please enter correct details!");
    }
  }
}
