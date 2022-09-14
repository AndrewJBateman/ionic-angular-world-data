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
import { Subscription } from "rxjs";

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapPage implements OnDestroy {
  subscription: Subscription;
  countryName: string;
  queryParams: Params;
  map: Leaflet.Map;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  loadMap() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      this.queryParams = params;
      this.countryName = this.queryParams.name;
      this.leafletMap(this.queryParams.lat, this.queryParams.lon);
    });
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  leafletMap(lat: number, lng: number) {
    this.map = Leaflet.map("map", {
      center: [lat, lng],
      zoom: 5,
    });

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "OpenStreetMap.org",
    }).addTo(this.map);
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
