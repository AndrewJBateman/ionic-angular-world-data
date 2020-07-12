/// <reference types="@types/googlemaps" />
import { Component, AfterViewInit, ViewChild, ElementRef, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
declare let google: any;

@Component({
	selector: 'app-map',
	templateUrl: './map.page.html',
	styleUrls: ['./map.page.scss'],
})

export class MapPage implements AfterViewInit {
	countryName: string;
	queryParams: Params;
	@ViewChild('mapContainer', { static: false }) gmap: ElementRef;
	map: google.maps.Map;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngAfterViewInit() {
		this.initMap();
	}

	initMap = () => {
		this.activatedRoute.queryParams.subscribe( params => {
			this.queryParams = params;
			this.countryName = this.queryParams.countryName;
			const coordinates = new google.maps.LatLng(
				this.queryParams.countryLat, this.queryParams.countryLng
			);
			const mapOptions: google.maps.MapOptions = {
				center: coordinates,
				zoom: 5
			};
			const marker = new google.maps.Marker({
				position: coordinates,
				map: this.map,
			});
			this.map = new google.maps.Map(this.gmap.nativeElement,	mapOptions);
			marker.setMap(this.map);
		});
	}

}
