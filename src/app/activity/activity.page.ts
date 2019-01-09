import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  constructor(public platform: Platform,
    public router: Router,
    public navCtrl: NavController) {
    this.platform.backButton.subscribe(() => {
      this.router.navigate(['/home']);
      //this.navCtrl.navigateBack('/home');
    });
  }

  ngOnInit() {
  }

}
