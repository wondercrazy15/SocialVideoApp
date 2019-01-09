import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public statusBar: StatusBar,
    public router: Router,
    public mediaCapture: MediaCapture,
    public camera: Camera,
    public actionSheetController: ActionSheetController,
    public loadingController: LoadingController) {
    //  this.statusBar.styleDefault();
  }
  ngOnInit() {
    this.loadingController.dismiss();

  }
  moveToprofile() {
    this.router.navigate(["/profile"]);
  }
  moveTofilter() {
    this.router.navigate(["/filter"]);

  }
  moveTOactivity(){
    this.router.navigate(["/activity"]);

  }

  videoRecord() {
    this.mediaCapture.captureVideo()
      .then(
        (data: MediaFile[]) => console.log(data),
        (err: CaptureError) => console.error(err)
      );

  }

  videoFromLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      //  encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.VIDEO
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log("base64:", base64Image)
    }, (err) => {
      // Handle error
    });
  }


  async videoOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose any one',
      buttons: [{
        text: 'Video record',
        // role: 'destructive',
        // icon: 'trash',
        handler: () => {
          this.videoRecord();
        }
      }, {
        text: 'Video from library',
        //   icon: 'share',
        handler: () => {
          this.videoFromLibrary();
        }
      }, {
        text: 'Cancel',
        //   icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }




}
