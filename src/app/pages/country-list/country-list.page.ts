import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-country-list',
	templateUrl: './country-list.page.html',
	styleUrls: ['./country-list.page.scss'],
	providers: [RestApiService]
})
export class CountryListPage implements OnInit {
	selectedCountry: any;
	countries: any;

	constructor(private restApiService: RestApiService, private router: Router) { }

	ngOnInit() {
		this.restApiService.getCountries()
			.subscribe(data => {
				console.log(data);
				this.countries  = data;
			});
	}

}
