import { Component, Input } from "@angular/core";
import { CountryListInterface } from "src/app/interfaces/interface";
import { UpperCasePipe } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@Component({
    selector: "app-country-item",
    templateUrl: "./country-item.component.html",
    styleUrls: ["./country-item.component.scss"],
    standalone: true,
    imports: [IonicModule, UpperCasePipe],
})
export class CountryItemComponent {
  @Input() country: CountryListInterface;
  @Input() isFavourite: Boolean;

  onDeleteFavourite() {
    console.log("remove from favourites");
  }
}
