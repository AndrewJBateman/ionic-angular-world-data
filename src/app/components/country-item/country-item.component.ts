import { Component, Input } from "@angular/core";
import { CountryListInterface } from "src/app/interfaces/interface";

@Component({
	selector: "app-country-item",
	templateUrl: "./country-item.component.html",
	styleUrls: ["./country-item.component.scss"],
})
export class CountryItemComponent {
	@Input() country: CountryListInterface;
}
