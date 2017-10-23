import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UploadPage } from '../upload/upload';

@IonicPage()
@Component({
  selector: 'page-developer',
  templateUrl: 'developer.html',
})
export class DeveloperPage {
  speaking = 50
  reading = 50
  writing = 50
  listening = 50
  country:string
  city:string
  employment:string
  salary:string;
  native:string;
  toefl:string
  github:string
  linkedin:string
  portfolio:string

  moreInfo:{

  }

  basicInfo:{

  }
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
      console.log(navParams);
      this.basicInfo = navParams.data
      console.log(this.basicInfo)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeveloperPage');
  }

  presentAlert(m) {
    const alert = this.alertCtrl.create({
      title: 'Input Error',
      subTitle: m,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  showVal(v){
    console.log(v)
  }

  saveg(){
    this.navCtrl.push(UploadPage);
  }
  save(){
    let cn = ""
    let ct = ""
    let et = ""
    let ms = ""
    let nv = ""
    let tf = ""
    let gh = ""
    let li = ""
    let pf = ""
    let safe = true
    let mes = ""
    if(!this.country){
       cn = "Please enter <b>Country</b>"
       safe = false
    } 

    if(!this.city){
       ct = "<br>Please enter <b>City</b>"
       safe = false
    }   

    if(!this.employment){
      et = "<br>Please enter <b>Employment Type</b>"
      safe = false
    }

    if(!this.salary){
      ms = "<br>Please enter <b>Monthly Salary</b>"
      safe = false
    }

    if(!this.native){
       nv = "<br>Please enter <b>Native Language</b>"
       safe = false
    }

    if(!this.toefl){
       tf = "<br>Please enter <b>TOEFL Score</b>"
       safe = false
    }

    
    if(safe){
      this.moreInfo = {
          "country":this.country,
          "city":this.city,
          "employment":this.employment,
          "salary":this.salary,
          "speaking":this.speaking,
          "listening":this.listening,
          "writing":this.writing,
          "reading":this.reading,
          "native":this.native,
          "toefl":this.toefl,
          "github":this.github,
          "linkedin":this.linkedin,
          "portfolio":this.portfolio,
          
      }
      const newInfo = Object.assign({}, this.basicInfo, this.moreInfo);
      console.log(newInfo)
      this.navCtrl.push(UploadPage,newInfo);
    }else{
      mes = cn+""+ct+""+et+""+ms+""+nv+""+tf
      this.presentAlert(mes)
    }
    
  }

}
