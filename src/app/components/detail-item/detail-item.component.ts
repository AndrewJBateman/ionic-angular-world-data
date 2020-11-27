import { Component, Input } from "@angular/core";
import { CountryDetailInterface } from "src/app/interfaces/interface";

@Component({
	selector: "app-detail-item",
	templateUrl: "./detail-item.component.html",
	styleUrls: ["./detail-item.component.scss"],
})
export class DetailItemComponent {
	@Input() country: CountryDetailInterface;

	appendComa(content: any) {
		try {
			const result = content.concat(",");
			return result;
		} catch (err) {
			console.log(err);
		}
	}
}
