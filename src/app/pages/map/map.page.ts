import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnChanges,
  Input,
  OnDestroy,
} from "@angular/core";
import * as Leaflet from "leaflet";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapPage implements OnDestroy {
  countryName: string;
  queryParams: Params;
  map: Leaflet.Map;

  constructor(private activatedRoute: ActivatedRoute) {}

  getMapView() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.queryParams = params;
      this.countryName = this.queryParams.countryName;
      console.log(
        "coords: ",
        this.queryParams.countryLat,
        this.queryParams.countryLng
      );
      this.leafletMap(this.queryParams.countryLat, this.queryParams.countryLng);
    });
  }

  ionViewDidEnter() {
    {
      this.getMapView();
    }
  }

  leafletMap(lat, lng) {
    this.map = Leaflet.map("map", {
      center: [lat, lng],
      zoom: 5,
    });

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "OpenStreetMap.org",
    }).addTo(this.map);
  }

  ngOnDestroy() {
    this.map.off();
    this.map.remove();
  }
}
