import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  @ViewChild('fileInput') fileInput;
  @ViewChild('pfileInput') pfileInput;
  @ViewChild('pfileInput2') pfileInput2;
  @ViewChild('cfileInput') cfileInput; 
  @ViewChild('vfileInput') vfileInput; 
  @ViewChild('fmVariable') fmRef;    
  doc0:string;
  doc1:string;
  img:string;
  vid:string;
  image_count = 0;
  areas:any
  pname:any;
  role:any;
  describe:any;
  tools:any;
  photo:string;
  resume:string
  video:string
  certificate:string
  frameworks:string
  projectBtnObj = {
    btn:"Add Project",
    edit:false,
    editIndex:0,
    color:"secondary1"
  }
  

  //Developer expertise object used to dynamically create input fields
  devEx = [
    {
      "title":"iOS",
      "icon":"logo-apple",
      "experience":"7",
      "proficiency":"50",
      "checked":false
    },
    {
      "title":"Android",
      "icon":"logo-android",
      "experience":"7",
      "proficiency":"50",
      "checked":false
    },
    {
      "title":"Front End Web",
      "icon":"laptop",
      "experience":"7",
      "proficiency":"50",
      "checked":false
    },
    {
      "title":"Back Ed",
      "icon":"cube",
      "experience":"7",
      "proficiency":"50",
      "checked":false
    },
    {
      "title":"Management",
      "icon":"calendar",
      "experience":"7",
      "proficiency":"50",
      "checked":false
    },
    {
      "title":"Quality Assurance",
      "icon":"checkmark",
      "experience":"7",
      "proficiency":"50",
      "checked":false
    },
    {
      "title":"Business Analyst",
      "icon":"clipboard",
      "experience":"7",
      "proficiency":"50",
      "checked":false
    },
  ]
  Frameworks = []
  frameworkVariables = []
  //Project object used to show layout of projects saved
  Projects = [
    {
      title:"ZipDev Test Project",
      role:"Full Stack Developer",
      expertise:["Front end Develpmentment","Back end Development"],
      tools:["JavaScript","Ionic 3.0","Angular 4.0","Sass"],
      description:"This was a test project to assess my development skills. It' took me just under 30 hours spread across 3 days.",
      visible:true
    }
  ]
  screens = []
  fmVariable:string;

  devInfo:{

  }

  basicInfo:{

  }

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
      this.basicInfo = navParams.data
      console.log(this.basicInfo)
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad UploadPage');
  }

  presentAlert(m,t) {
    const alert = this.alertCtrl.create({
      title: t,
      subTitle: m,
      buttons: ['OK']
    });
    alert.present();
  }

  //Function to capture file uploads. 
  //Sending of the files can/will be done at a later date as a backend is needed to test that it works
  //** Note 20KB is too small for some file sizes and should be modified depending on the file type */
  upload(t){
    let fileBrowser;
    let types = {
      pdf:true,
      doc:true,
      docx:true,
      jpg:true,
      jpeg:true,
      png:true,
      mp4:true
    }
    if(t == 0)
       fileBrowser = this.fileInput.nativeElement;    
    
    if(t == 1)
       fileBrowser = this.pfileInput.nativeElement;    
    
    if(t == 2)
       fileBrowser = this.cfileInput.nativeElement;  

    if(t == 3)
       fileBrowser = this.vfileInput.nativeElement;  
    
    let name = fileBrowser.files[0].name;
    var spType = name.split(".")
    
    if(fileBrowser.files[0].size > 20000){
      alert("File size exceeded!")
    }else{
      if(types[spType[1]]){
        if(spType[1] == "pdf" || spType[1] == "doc"  || spType[1] == "docx"){
          if(t == 1){
            this.doc0 = name
            this.resume = name
          }else if(t == 2){
            this.doc1 = name
            this.certificate = name
          }else{
            alert("Incorrect File Type")
          }
        }
  
        if(spType[1] == "jpg" || spType[1] == "jpeg" || spType[1] == "png"){
          if(t == 0){
            this.img = name
          }else{
            alert("Incorrect File Type")
          }
        }
           
  
        if(spType[1] == "mp4"){
          if(t == 3){
            this.vid = name
          }else{
            alert("Incorrect File Type")
          }
        }
           
  
  
        this.video = this.vid
        this.photo = this.img
      }else{
        alert("Incorrect File Type")
      }
    }
    
  }

  screenshots(){
    let fileBrowser;
    let types = {
      jpg:true,
      png:true,
      jpeg:true
    }

    fileBrowser = this.pfileInput2.nativeElement;  
    let name = fileBrowser.files[0].name;
    var spType = name.split(".")

    if(types[spType[1]]){
      if(spType[1] == "jpg" || spType[1] == "jpeg" || spType[1] == "png")
         this.screens.push(name);
    }else{
      alert("Incorrect File Type")
    }
    this.image_count = this.screens.length;
  }
  
  check(){
    
  }
  showVal(v){
    //console.log(v)
  }

  removeFramework(f){
    console.log(f)
    this.Frameworks.splice(this.Frameworks.indexOf(f), 1);
  }

  addFramework(event:any){
    let e = {
        "experience":"7",
        "proficiency":"50",
        "checked":true
    }
    this.frameworks = ""
    this.frameworkVariables.push(e)
    this.Frameworks.push(event)
  }

  addProject(){
    let ar = ""
    let tl = ""
    let pn = ""
    let ds = ""
    let rl = ""
    
    let safe = true
    let mes = ""
    if(!this.pname){
       pn = "Please put <b>Project Name</b>"
       safe = false
    } 

    if(!this.role){
       rl = "<br>Please put you <b>Role</b>"
       safe = false
    }   

    if(!this.areas){
      ar = "<br>Please put areas of <b>Expertise</b>"
      safe = false
    }

    if(!this.tools){
      tl = "<br>Please put <b>Tools</b> used"
      safe = false
    }

    if(!this.describe){
      ds = "<br>Please put <b>Description</b>"
      safe = false
    }

    

    
    if(safe){
        let a = this.areas.split(",")
        let t = this.tools.split(",")
        let p = {
          title:this.pname,
          role:this.role,
          expertise:a,
          tools:t,
          description:this.describe,
          visible:true
        }
        if(this.projectBtnObj.edit){
          this.Projects[this.projectBtnObj.editIndex].title = this.pname,
          this.Projects[this.projectBtnObj.editIndex].role = this.role,
          this.Projects[this.projectBtnObj.editIndex].expertise = a,
          this.Projects[this.projectBtnObj.editIndex].tools = t,
          this.Projects[this.projectBtnObj.editIndex].description = this.describe,
          this.Projects[this.projectBtnObj.editIndex].visible = true
          this.projectBtnObj.edit = false
        }else{
          this.Projects.push(p);
        }
    }else{
      mes = pn+""+rl+""+ar+""+tl+""+ds
      this.presentAlert(mes,"Input Error")
    }
    
  }

  manipulateProject(pr:string,i:number){
    if(pr == "edit"){
      this.projectBtnObj.editIndex = i
      this.projectBtnObj.edit = true
      let pArray = this.Projects[i]
      console.log(pArray)
      this.pname = pArray.title
      this.role = pArray.role
      this.tools = pArray.tools.toString()
      this.areas = pArray.expertise.toString()
      this.describe = pArray.description
       
    }
    if(pr == "hide"){
      this.Projects[i].visible = false
    }
    if(pr == "delete"){
      this.Projects.splice(i, 1);
    }
  }

  save(){
    let pp = ""
    let cv = ""
    let ct = ""
    let vd = ""
    
    let safe = true
    let mes = ""
    if(!this.photo){
       pp = "Please upload <b>Photo</b>"
       safe = false
    } 

    if(!this.resume){
       cv = "<br>Please upload <b>C.V.</b>"
       safe = false
    }   

    if(!this.video){
      vd = "<br>Please upload <b>Video</b>"
      //safe = false
    }

    if(!this.certificate){
      ct = "<br>Please upload <b>Certificate</b>"
      //safe = false
    }

    

    
    if(!safe){
      this.devInfo = {
          "picture":this.photo,
          "certificate":this.certificate,
          "CV":this.resume,
          "video":this.video,
          "expertise":this.devEx,
          "projects":this.Projects,
          "screenshots":this.screens,
          "frameworks":this.Frameworks,
          "frameworkVariables":this.frameworkVariables
      }
      const newInfo = Object.assign({}, this.basicInfo, this.devInfo);
      console.log(newInfo)
      mes = "We have recieved your application. Check your email for instructions to schedule a call with our recuritors."
      this.presentAlert(mes,"Congratulations")
    }else{
      mes = pp+""+cv+""+ct+""+vd
      this.presentAlert(mes,"Input Error")
    }
    
  }
}
