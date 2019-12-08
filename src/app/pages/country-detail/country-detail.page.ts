import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Country } from '../../interfaces/interface';
import { RestApiService } from './../../services/rest-api.service';


@Component({
	selector: 'app-country-detail',
	templateUrl: './country-detail.page.html',
	styleUrls: ['./country-detail.page.scss'],
})
export class CountryDetailPage implements OnInit {
	country: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private restApiService: RestApiService
	) {
		// this.country = this.activatedRoute.snapshot.params.country;
	}

	ngOnInit() {
			// this.country = this.restApiService.currentCountry;
	}

	goToGoogleMaps() {

	}

	goToWorldBankInfo() {

	}

	goToCountryNews() {

	}
}
