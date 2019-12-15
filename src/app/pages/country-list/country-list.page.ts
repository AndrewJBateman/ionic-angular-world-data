import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

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
	@ViewChild(IonContent) content: IonContent;
	countryChosen = false;
	searchActive = false;
	searchInput = '';
	countryName = '';
	continents = ['all', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
	fullList = [];
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
			},
			error => {
				console.log('error fetching country list info: ', error);
			});
	}

	// load country list data for continent selected with API response limited to 4 fields
	// return the unchanged array if 'all' selected.
	getContinentData(event: any) {

		// return event.detail.value === 'all' ?
		// 	this.countries :
		// 	this.getCountryList('region/' + event.detail.value)

		if (event.detail.value === 'all') {
			return this.getCountryList('all?fields=flag;name;capital;region');
		}
		return this.getCountryList('region/' + event.detail.value);
	}

	// load country detail data
	getCountryDetail(country: any) {
		this.countryChosen = true;
		const countryToSearch = country.name;
		this.restApiService
			.fetchCountryDetailData(countryToSearch)
			.subscribe((data: CountryDetailInterface[]) => {
				this.country = data[0];
				this.countryName = data[0].name;
			},
			error => {
				console.log('error fetching country detail info: ', error);
			});
		this.content.scrollToTop(0);
	}

	// If user click on header back button then show country list
	backToList(event: Event) {
		this.countryName = '';
		this.countryChosen = false;
	}

	onSearch(event: Event) {
		this.searchActive = true;
		// api-service to create array of country names (add to init of country-list)
		console.log('onSearch function: ', this.countries);
		// this.countrySearched = this.countries.filter(item => country.name.includes(this.searchQuery));
	}

	onInput(event: any) {
		// this.performSearch(this.searchInput);
	}

	onClear(event: any) {
		// this.results = null;
	}

	async presentPopover(event: Event) {
		const popover = await this.popoverCtrl.create({
			component: PopoverPage,
			componentProps: {
				country: this.country
			},
			event
		});
		await popover.present();
	}

	addToFavourites() {

	}
}
