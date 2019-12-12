import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'app-about',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: event
    });
    await popover.present();
  }
}
