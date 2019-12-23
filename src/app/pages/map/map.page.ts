/// <reference types="@types/googlemaps" />
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
declare let google: any;

@Component({
	selector: 'app-map',
	templateUrl: './map.page.html',
	styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit, AfterViewInit {
	public countryName: string;
	public countryLat: number;
	public countryLng: number;
	queryParams: Params;
	title = this.countryName;

	constructor(private activatedRoute: ActivatedRoute) {


	}

	@ViewChild('mapContainer', { static: false }) gmap: ElementRef;
	map: google.maps.Map;
	lat = 42.5;
	lng = 1.5;

	coordinates = new google.maps.LatLng(this.lat, this.lng);
	mapOptions: google.maps.MapOptions = {
		center: this.coordinates,
		zoom: 8
	};

	marker = new google.maps.Marker({
		position: this.coordinates,
		map: this.map,
	});

	// ngOnChanges() {
	// 	this.getRouteParams();
	// }

	getRouteParams() {
		return this.activatedRoute.queryParams.subscribe( params => {
			console.log('params: ', params);
			this.queryParams = params;
			this.countryName = this.queryParams.countryName;
			this.countryLat = parseInt(this.queryParams.countryLat, 10);
			this.countryLng = parseInt(this.queryParams.countryLng, 10);
		});
	}


	ngAfterViewInit() {
		this.mapInitializer();
		console.log('coords: ', this.countryLat, this.countryLng);
		console.log('title: ', this.countryName);
	}

		ngOnInit() {
		this.getRouteParams();
		}

		mapInitializer() {
			this.map = new google.maps.Map(this.gmap.nativeElement,	this.mapOptions);
			this.marker.setMap(this.map);
		}
}
