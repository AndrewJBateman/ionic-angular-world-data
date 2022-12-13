import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-progress-bar",
  template: ` <!--ion-card with indeterminate progress bar that displays while data loading-->
    <ion-card>
      <ion-card-header>
        <ion-card-title>Loading...</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-progress-bar
          type="indeterminate"
          color="secondary"
        ></ion-progress-bar>
      </ion-card-content>
    </ion-card>`,
  imports: [IonicModule],
  standalone: true,
})
export class ProgressBarComponent {}
