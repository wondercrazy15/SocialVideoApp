import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  constructor(public platform: Platform,
    public router: Router,
    public navCtrl: NavController) {
    this.platform.backButton.subscribe(() => {
      this.router.navigate(['/home']);
     // this.navCtrl.navigateBack('/home');
    });
  }

  ngOnInit() {
  }

}
