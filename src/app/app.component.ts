import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-component',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout(): void {
    this.authService.logout();
		this.router.navigate(['/login']);
  }
}