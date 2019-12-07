import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from '../../interfaces/interface';
import { RestApiService } from './../../services/rest-api.service';

@Component({
	selector: 'app-country-list',
	templateUrl: './country-list.page.html',
	styleUrls: ['./country-list.page.scss'],
	providers: [RestApiService]
})
export class CountryListPage implements OnInit {

	continents = ['all', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceana'];
	searchTerm: '';
	countries: Country[] = [];
	country: any;
	continent: string;

	constructor(private restApiService: RestApiService, private router: Router) { }

	ngOnInit() {
		this.getCountryList('all');
	}

	getCountryList(url: string) {
		return this.restApiService
			.getCountryData(url)
			.subscribe((data: Country[]) => {
				this.countries = data;
			});
	}

	changeContinent(event: any) {
/* 		this.continent = '';
		console.log('change continent to: ', event.detail.value);
		this.getCountryList(event.detail.value); */
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
