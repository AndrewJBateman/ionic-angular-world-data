import { Component, OnDestroy } from "@angular/core";
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
      this.leafletMap(
        this.queryParams.capName,
        parseFloat(this.queryParams.lat),
        parseFloat(this.queryParams.lon),
        parseFloat(this.queryParams.capLat),
        parseFloat(this.queryParams.capLon)
      );
    });
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
    const mapIcon = Leaflet.icon({
      iconUrl: "assets/icon/marker-icon.png",
      shadowUrl: "assets/icon/marker-shadow.png",
    });

    this.map = Leaflet.map("map", {
      center: [+lat, +lng],
      zoom: 5,
    });

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "OpenStreetMap.org",
    }).addTo(this.map);

    Leaflet.marker([capLat, capLon], {
      icon: mapIcon,
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
