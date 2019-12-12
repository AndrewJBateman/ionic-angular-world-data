import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Country, CountryDetailInterface } from '../../interfaces/interface';
import { RestApiService } from './../../services/rest-api.service';


@Component({
	selector: 'app-country-detail',
	templateUrl: './country-detail.page.html',
	styleUrls: ['./country-detail.page.scss'],
	providers: [RestApiService]
})
export class CountryDetailPage implements OnInit {
	country: CountryDetailInterface;
	countryChosen: string;
	countryData: any;
	countryName: string;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private restApiService: RestApiService
	) {	};

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((res)=>{
			console.log('the final country name', res.value);
			this.countryName = res.value;
			console.log('activated route input to API: ', this.countryName);
			return this.restApiService
				.fetchCountryDetailData(this.countryName)
				.subscribe(
					data => {
						this.countryData = data[0];
						console.log('this is data', data[0]);
					},
					error => {
						console.log(error);
					});


		});

	}

	

	goToGoogleMaps() {

	}

	goToWorldBankInfo() {

	}

	goToCountryNews() {

	}

	presentPopover($event) {

	}

	appendComa(content: any) {
    try {
      let result = content.concat(',');
      return result;
    } catch (err){
      console.log(err);
    }
  }
}
