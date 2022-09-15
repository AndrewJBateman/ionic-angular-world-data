import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonContent } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";

import { RestApiService } from "./../../services/rest-api.service";
import { CountryPopoverPage } from "../country-popover/country-popover";
import {
  CountryListInterface,
  CountryDetailInterface,
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
  countries: CountryListInterface[] = [];
  public country: CountryDetailInterface;
  public continent: string;
  searchItems: any;

  constructor(
    private restApiService: RestApiService,
    private router: Router,
    public popoverCtrl: PopoverController
  ) {}

  // get country info for category 'all' with just the 4 fields needed.
  ngOnInit() {
    this.loadingInfo = true;
    this.getCountryList("all?fields=name,capital,region,flags");
    this.loadingInfo = false;
  }

  // fetch full list of countries
  getCountryList = async (url: string): Promise<any> => {
    this.restApiService
      .fetchCountryListData(url)
      .subscribe((data: CountryListInterface[]) => {
        this.countries = data;
        this.searchItems = this.countries;
      });
  };

  // fetch country detail
  onShowCountryDetail(country: CountryListInterface): void {
    this.loadingInfo = true;
    this.countryChosen = true;
    const countryToSearch = country.name.common;
    this.restApiService.fetchCountryDetailData(countryToSearch).subscribe({
      next: (value: CountryDetailInterface[]) => {
        this.country = value[0];
        console.log('country:', this.country)
        this.countryName = value[0].name["common"];
      },
      error: console.error,
    });
    this.loadingInfo = false;
    this.content.scrollToTop(0);
  }

  // If user clicks on header back button then show country list
  backToList() {
    this.countryName = "";
    this.countryChosen = false;
  }

  // load country list data for continent selected by filtering list of countries by region
  getContinentData(event: any): CountryListInterface[] {
    this.searchItems = this.countries; // reset list after each event
    return (this.searchItems =
      event.detail.value !== "all"
        ? this.searchItems.filter((item: CountryListInterface) => {
            return item.region.indexOf(event.detail.value) > -1;
          })
        : this.countries);
  }

  // filter array of country names to match search query (letters only using regex)
  filterItems(event: Event): void {
    const regExp = /^[a-zA-Z]*$/;
    const element = event.target as HTMLInputElement;
    const value = element.value;
    const query = value.toString().toLowerCase();
    this.searchItems =
      query.length > 0 && regExp.test(query)
        ? this.searchItems.filter((item: any) => {
            return (
              item.name.common.toString().toLowerCase().indexOf(query) > -1
            );
          })
        : this.countries;
  }

  onCancel() {
    this.query = null;
  }

  async presentPopover(event: Event): Promise<void> {
    const popover = await this.popoverCtrl.create({
      component: CountryPopoverPage,
      componentProps: {
        country: this.country,
      },
      event,
    });
    await popover.present();
  }

  public openMap(): void {
    this.router.navigate(["app/tabs/map"], {
      queryParams: {
        name: this.countryName,
        lat: this.country.latlng[0],
        lon: this.country.latlng[1],
      },
    });
  }
}
