import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { usercreds } from '../../models/interfaces/usercreds';

import { AuthProvider } from '../../providers/auth/auth';

import { TabsPage } from '../../pages/tabs/tabs'

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials = {} as usercreds; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(){
    this.authService.login(this.credentials).then((res: any) =>{
      if(!res.code)
        this.navCtrl.setRoot(TabsPage);
    }).catch((err)=>{
      alert(err)
    })
  }

  signup(){
    this.navCtrl.push('SignupPage')
  }

  passwordreset(){
    this.navCtrl.push('PasswordresetPage');
  }

}