import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonContent } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";

import { RestApiService } from "./../../services/rest-api.service";
import { PopoverPage } from "../country-popover/country-popover";
import {
  CountryListInterface,
  CountryDetailInterface,
  Country,
} from "../../interfaces/interface";

@Component({
  selector: "app-country-list",
  templateUrl: "./country-list.page.html",
  styleUrls: ["./country-list.page.scss"],
  providers: [RestApiService],
})
export class CountryListPage implements OnInit {
  @ViewChild(IonContent, { static: true }) content: IonContent;

  loadingInfo = false;
  countryChosen = false;
  query = "";
  public countryName = "";
  continents = ["all", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  fullList = [];
  searchTerm: "";
  countries: any;
  public country: any;
  public continent: string;
  arrayLength: any;
  searchItems: Array<Country> = [];

  constructor(
    private restApiService: RestApiService,
    private router: Router,
    public popoverCtrl: PopoverController
  ) {}

  // get country info for category 'all' with just the 4 fields needed.
  ngOnInit() {
    this.loadingInfo = true;
    this.getCountryList("all?fields=flag;name;capital;region");
    this.loadingInfo = false;
  }

  // get list of countries with API response limited to 4 fields
  // take a copy of array to use in search function
  getCountryList(url: string) {
    this.restApiService.fetchCountryListData(url).subscribe(
      (data: CountryListInterface[]) => {
        this.countries = data;
        this.searchItems = this.countries;
      },
      (error) => {
        console.log("error fetching country list info: ", error);
      }
    );
  }

  // load country detail data
  getCountryDetail(country: any) {
    this.loadingInfo = true;
    this.countryChosen = true;
    const countryToSearch = country.name;
    this.restApiService.fetchCountryDetailData(countryToSearch).subscribe(
      (data: CountryDetailInterface[]) => {
        this.country = data[0];
        this.countryName = data[0].name;
      },
      (error) => {
        console.log("error fetching country detail info: ", error);
      }
    );
    this.loadingInfo = false;
    this.content.scrollToTop(0);
  }

  // If user clicks on header back button then show country list
  backToList(event: Event) {
    this.countryName = "";
    this.countryChosen = false;
  }

  // load country list data for continent selected by filtering list of countries by region
  getContinentData(event: any) {
    this.searchItems = this.countries; // reset list after each event
    return (this.searchItems =
      event.detail.value !== "all"
        ? this.searchItems.filter((item) => {
            return item.region.indexOf(event.detail.value) > -1;
          })
        : this.countries);
  }

  // filter array of country names to match search query (letters only using regex)
  filterItems(event: any) {
    const regExp = /^[a-zA-Z]*$/;
    const query = event.target.value.toLowerCase();
    this.searchItems =
      query.length > 0 && regExp.test(query)
        ? this.searchItems.filter((item) => {
            return item.name.toLowerCase().indexOf(query) > -1;
          })
        : this.countries;
  }

  onCancel() {
    this.query = null;
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps: {
        country: this.country,
      },
      event,
    });
    await popover.present();
  }

  public openMap(event: any): void {
    this.router.navigate(["app/tabs/map"], {
      queryParams: {
        countryName: this.countryName,
        countryLat: this.country.latlng[0],
        countryLng: this.country.latlng[1],
      },
    });
  }

  addToFavourites() {}
}
