import { Component, Input } from "@angular/core";
import { CountryList } from "src/app/interfaces/country";
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
  @Input() country: CountryList;
  @Input() isFavourite: Boolean;
}
