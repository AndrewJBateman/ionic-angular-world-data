import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestApiService } from './../../services/rest-api.service';

@Component({
	selector: 'app-country-detail',
	templateUrl: './country-detail.page.html',
	styleUrls: ['./country-detail.page.scss'],
})
export class CountryDetailPage implements OnInit {

	country = null;

	constructor(private activatedRoute: ActivatedRoute, private restApiService: RestApiService) { }

	ngOnInit() {
		// this.country = country;
	}

	goToGoogleMaps() {

	}

	goToWorldBankInfo() {

	}

	goToCountryNews() {

	}
}
