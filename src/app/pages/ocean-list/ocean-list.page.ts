/**
 * OceanListPage class represents a page component for displaying a list of oceans.
 * It is responsible for handling the presentation of the ocean list and showing a popover when an
 * event occurs.
 *
 * Properties:
 * - popoverCtrl: A private property that holds the PopoverController instance.
 * - oceans: An array of Ocean objects representing the list of oceans.
 *
 * Methods:
 * - presentPopover: An async method that presents a popover when an event occurs.
 *   - Parameters:
 *     - event: An event object representing the event that triggered the popover.
 *   - Returns: A Promise that resolves when the popover is presented.
 */
import { Component, inject } from "@angular/core";
import { PopoverController, IonicModule } from "@ionic/angular";
import { PopoverPage } from "../ocean-popover/ocean-popover";
import { OceanItemComponent } from "../../components/ocean-item/ocean-item.component";
import { Ocean } from "../../interfaces/ocean";
import oceanData from "./oceans.json";

@Component({
  selector: "app-ocean-list",
  templateUrl: "./ocean-list.page.html",
  styleUrls: ["./ocean-list.page.scss"],
  standalone: true,
  imports: [IonicModule, OceanItemComponent],
})
export class OceanListPage {
  private popoverCtrl = inject(PopoverController);
  oceans: Ocean[] = oceanData;

  async presentPopover(event: any): Promise<void> {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event,
    });
    await popover.present();
  }
}
