/**
 * Represents the MapPage component.
 * This component is responsible for displaying a map with a marker representing a specific location.
 * It uses the Leaflet library for map rendering and navigation.
 * The map is loaded based on the query parameters received from the ActivatedRoute.
 * The component also provides a method to navigate back to the country list page.
 * Implements the OnDestroy interface to handle component destruction.
 */
import { Component, OnDestroy, inject } from "@angular/core";
import * as Leaflet from "leaflet";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { UpperCasePipe } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { Map } from "../../interfaces/map";

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
  standalone: true,
  imports: [IonicModule, UpperCasePipe],
})
export class MapPage implements OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  subscription: Subscription;
  countryName: string;
  queryParams: Params;
  mapParams: Map;
  map: Leaflet.Map;

  mapIcon = Leaflet.icon({
    iconUrl: "assets/icon/marker-icon.png",
    shadowUrl: "assets/icon/marker-shadow.png",
  });

  loadMap() {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (mapParams: Map) => {
        this.countryName = mapParams.countryName;
        this.leafletMap(
          mapParams.capName,
          parseFloat(mapParams.lat),
          parseFloat(mapParams.lon),
          parseFloat(mapParams.capLat),
          parseFloat(mapParams.capLon)
        );
      }
    );
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  leafletMap(
    capName: string,
    lat: number,
    lng: number,
    capLat: number,
    capLon: number
  ) {
    this.map = Leaflet.map("map", {
      center: [Number(lat), Number(lng)],
      zoom: 5,
    });

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "OpenStreetMap.org",
    }).addTo(this.map);

    Leaflet.marker([capLat, capLon], {
      icon: this.mapIcon,
    })
      .bindTooltip(`Capital: ${capName}`, {
        permanent: true,
        direction: "top",
        offset: Leaflet.point(-14, -5),
      })
      .addTo(this.map);
  }

  onGoBack() {
    try {
      this.subscription.unsubscribe();
      this.map.off();
      this.map.remove();
    } catch (error) {
      alert(error.message);
    }
    this.router.navigate(["app/tabs/country-list"]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.map.off();
    this.map.remove();
  }
}
