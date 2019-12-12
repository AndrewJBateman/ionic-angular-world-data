import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestApiService } from './../../services/rest-api.service';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../country-popover/country-popover';

import { CountryListInterface, CountryDetailInterface, Country } from '../../interfaces/interface';

@Component({
	selector: 'app-country-list',
	templateUrl: './country-list.page.html',
	styleUrls: ['./country-list.page.scss'],
	providers: [RestApiService]
})
export class CountryListPage implements OnInit {

	continents = ['all', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
	searchTerm: '';
	countries: any;
	country: any;
	continent: string;
	arrayLength: any;

	constructor(
		private restApiService:	RestApiService,
		private router: Router,
		public popoverCtrl: PopoverController
	) { }

	// get country info for category 'all' with just the 4 fields needed.
	ngOnInit() {
		this.getCountryList('all?fields=flag;name;capital;region');
	}

	// get list of countries with API response limited to 4 fields
	getCountryList(url: string) {
		this.restApiService
			.fetchCountryListData(url)
			.subscribe((data: CountryListInterface[]) => {
      	this.countries = data;
			})
	}

	// load country data for continent selected with API response limited to 4 fields
	// return the unchanged array if 'all' selected.
	getContinentData(event: any) {
		return event.detail.value === 'all'?
			this.countries : 
			this.getCountryList('region/' + event.detail.value)
	}

	getCountryDetail(country: any) {
		let countryName = country.name;
		console.log('here is the countryName: ', countryName);
		
		this.router.navigate(["/country-detail"], 
			{queryParams: {
				value: (countryName),
				fragment: 'loading'
			}
		});
	}	

	async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
			component: PopoverPage,
			componentProps: {
				country: this.country
			},
      event: event
    });
    await popover.present();
  }

	
}
