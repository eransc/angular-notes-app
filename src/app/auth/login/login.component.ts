import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  form;

  constructor(
    private authService: AuthService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      username: ['eran', Validators.required],
      password: ['z1w2e3t5fr!', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      //this.submitEM.emit(this.form.value);
      this.authService.login();
      this.router.navigateByUrl('notes');
    }
  }

  isValid(control) {
    return (
      this.form.controls[control].invalid && this.form.controls[control].touched
    );
  }
}
