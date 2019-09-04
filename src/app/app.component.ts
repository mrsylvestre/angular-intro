import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-component',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private titleService: Title
  ) { }

  public updateTitle(title: string) {
    this.titleService.setTitle(title);
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}