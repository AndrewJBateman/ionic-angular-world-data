import { Component, Input } from "@angular/core";
import { CountryDetail } from "src/app/interfaces/country";
import { IonicModule } from "@ionic/angular";
import { KeyValuePipe } from "@angular/common";

@Component({
    selector: "app-detail-item",
    templateUrl: "./detail-item.component.html",
    styleUrls: ["./detail-item.component.scss"],
    standalone: true,
    imports: [
    IonicModule,
    KeyValuePipe
],
})
export class DetailItemComponent {
  @Input() country: CountryDetail;
}
