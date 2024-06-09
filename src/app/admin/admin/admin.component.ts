import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/data/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(private auth: AuthService,
    private router: Router) { }
  logout() {
    this.auth.clear();
    this.router.navigateByUrl("/");
  }
}
