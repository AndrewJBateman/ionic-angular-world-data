import { Component, OnInit } from '@angular/core';
import { RestApiService } from './../../services/rest-api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-country-list',
	templateUrl: './country-list.page.html',
	styleUrls: ['./country-list.page.scss'],
	providers: [RestApiService]
})
export class CountryListPage implements OnInit {

	searchTerm: '';
	countries: any;
	country: any;

	constructor(private restApiService: RestApiService, private router: Router) { }

	ngOnInit() {
		this.restApiService
			.getCountryData('all')
			.subscribe(data => {
				this.countries = data;
			});
	}

	showCountryDetail(country: any) {
		this.restApiService
			.getCountryData('name/' + country)
			.subscribe(data => {
				this.country = data;
			});
		console.log('item clicked');
		this.router.navigate(['/country-detail']);
	}

}
