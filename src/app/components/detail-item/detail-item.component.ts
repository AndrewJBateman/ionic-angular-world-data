import { Component, Input } from "@angular/core";
import { CountryDetailInterface } from "src/app/interfaces/interface";
import { IonicModule } from "@ionic/angular";
import { NgIf, NgFor, KeyValuePipe } from "@angular/common";

@Component({
    selector: "app-detail-item",
    templateUrl: "./detail-item.component.html",
    styleUrls: ["./detail-item.component.scss"],
    standalone: true,
    imports: [
        NgIf,
        IonicModule,
        NgFor,
        KeyValuePipe,
    ],
})
export class DetailItemComponent {
  @Input() country: CountryDetailInterface;
}
