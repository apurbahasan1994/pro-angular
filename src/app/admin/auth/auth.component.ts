import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/data/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  userName?: string;
  password?: string;
  errorMessage?: string;
  constructor(private router: Router,
    private auth: AuthService
  ) { }
  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.userName ?? "", this.password ?? "")
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl("/admin/main");
          }
          else {
            this.errorMessage = "Authentication failed";
          }
        })
    }
    else {
      this.errorMessage = "Form data is not valid";
    }
  }
}
