import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  authorizedUsers: Map<string, string> = new Map<string, string>();
  dni: string;
  password: string;

  constructor(public navCtrl: NavController) {
  }

  /**
   * Realiza el log in del usuario. Si es exitoso, lo redirige a la HomePage de la aplicación
   * 
   */
  logIn(event) : void {
    if (this.userIsAuthorized(this.dni, this.password)) {
      this.navCtrl.push(HomePage , {})
    } else {
      alert("Authentication error");
    }
  }

  /**
   * Mocking authentication
   */
  userIsAuthorized(dni, password) : boolean {
    this.authorizedUsers.set("angeloraso", "agiles");
    this.authorizedUsers.set("octavioperi", "agiles");
    this.authorizedUsers.set("navarromatias", "agiles");
    this.authorizedUsers.set("sanchezjulieta", "agiles");
    let passwordUser =  this.authorizedUsers.get(dni);
    console.log(passwordUser);
    return passwordUser === password;
  }
}
