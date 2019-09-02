import { Injectable } from '@angular/core';
// RxJS 6
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
	redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?

	get isLoggedIn(): boolean {
		return localStorage.getItem('isLoggedIn') === 'true' ? true : false;
	}

	// Une méthode de connexion
	login(name: string, password: string): Observable<boolean> {
		// Faites votre appel à un service d'authentification...
		if (name === 'pikachu' && password === 'pikachu') {
			localStorage.setItem('isLoggedIn', JSON.stringify(true));
		}

		return of(true).pipe(
			delay(250)
		);
	}

	// Une méthode de déconnexion
	logout(): void {
		localStorage.removeItem('isLoggedIn');
	}
}