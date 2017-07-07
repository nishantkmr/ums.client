import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var gapi: any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	auth2:any;
	constructor(private router: Router) { }

	ngOnInit() {
		gapi.load('auth2', () => {
			// Retrieve the singleton for the GoogleAuth library and set up the client.
			this.auth2 = gapi.auth2.init({
				client_id: '550219358157-1o596arlntjgo42ogv1l3rpjeu21dkdf.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin',
				// Request scopes in addition to 'profile' and 'email'
				//scope: 'additional_scope'
			});
			this.attachSignin(document.getElementById('signInGoogleBtn'));
		});
	}

	attachSignin(element) {
		this.auth2.attachClickHandler(element, {},
        (googleUser) => {
        	this.router.navigate(['dashboard']);
		// document.getElementById('name').innerText = "Signed in: " +
		//     googleUser.getBasicProfile().getName();
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
	}

}
