import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DeveloperPage } from '../developer/developer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fname:string;
  lname:string;
  email:string;
  number:number;
  password:any;
  cpassword:any;

  basicInfo:{
     
  }

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }
  presentAlert(m) {
    const alert = this.alertCtrl.create({
      title: 'Input Error',
      subTitle: m,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  checkEmail(e){
    console.log(e)
  }
  saveG(){
    this.navCtrl.push(DeveloperPage);
  }
  save(){
    let fn = ""
    let ln = ""
    let em = ""
    let nm = ""
    let ps = ""
    let cps = ""
    let tnm = ""
    let tem = ""
    let safe = true
    let mes = ""
    if(!this.fname){
       fn = "Please enter <b>First Name</b>"
       safe = false
    } 

    if(!this.lname){
       ln = "<br>Please enter <b>Lasst Name</b>"
       safe = false
    }   

    if(!this.email){
      em = "<br>Please enter <b>Email</b>"
      safe = false
    }else{
      if(this.email.indexOf("@") < 1){
        tem = "<br>Must be a valid <b>Email Address</b>"
        safe = false
      }
    }  

    if(!this.number){
      nm = "<br>Please enter <b>Phone Number</b>"
      safe = false
    }

    if(!this.password){
       ps = "<br>Please enter <b>Password</b>"
       safe = false
    }

    if(!this.cpassword){
       cps = "<br>Please confirm <b>Email</b>"
       safe = false
    }

    if(this.cpassword != this.password){
       cps = "<br><b>Passwords</b> must match"
       safe = false
    }

    if(isNaN(this.number)){
       tnm = "<br><b>Phone Number</b> must be a number"
       safe = false
    }

    
    if(safe){
      this.basicInfo = {
          "firstName":this.fname,
          "lastName":this.lname,
          "email":this.email,
          "password":this.password,
          "number":this.number
      }
      this.navCtrl.push(DeveloperPage,this.basicInfo);
    }else{
      mes = fn+""+ln+""+em+""+nm+""+ps+""+cps+""+tnm+""+tem
      this.presentAlert(mes)
    }
    
  }

}
