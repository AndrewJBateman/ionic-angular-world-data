import {
  Component,
  OnInit,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
} from "@angular/core";
import { Router } from "@angular/router";
import { IonContent, IonicModule } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";

import { RestApiService } from "./../../services/rest-api.service";
import { ToastService } from "src/app/services/toast.service";
import { CountryPopoverPage } from "../country-popover/country-popover";
import { CountryList, CountryDetail } from "../../interfaces/country";
import { DetailItemComponent } from "../../components/detail-item/detail-item.component";
import { CountryItemComponent } from "../../components/country-item/country-item.component";
import { FormsModule } from "@angular/forms";
import { UpperCasePipe } from "@angular/common";

@Component({
  selector: "app-country-list",
  templateUrl: "./country-list.page.html",
  styleUrls: ["./country-list.page.scss"],
  providers: [RestApiService],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CountryItemComponent,
    DetailItemComponent,
    UpperCasePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CountryListPage implements OnInit {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  private restApiService = inject(RestApiService);
  private router = inject(Router);
  public popoverCtrl = inject(PopoverController);
  private toastService = inject(ToastService);

  loadingInfo = false;
  public countryChosen = false;
  query = "";
  public countryName = "";
  continents = ["all", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  fullList = [];
  searchTerm: "";
  countries: CountryList[] = [];
  public country: CountryDetail;
  public continent: string;
  searchItems: any;

  // get country info for category 'all' with just the 4 fields needed.
  ngOnInit() {
    this.getCountryList("all?fields=name,capital,region,flags");
    this.countryChosen = false;
  }

  // fetch full list of countries
  getCountryList = (url: string): void => {
    this.restApiService
      .fetchCountryListData(url)
      .subscribe((data: CountryList[]) => {
        this.countries = data;
        this.searchItems = this.countries.sort(
          (a, b) => a.name.common.charCodeAt(0) - b.name.common.charCodeAt(0)
        ) as CountryList[];
      });
  };

  // fetch country detail
  onShowCountryDetail(country: CountryList): void {
    this.loadingInfo = true;
    this.countryChosen = true;
    const countryToSearch = country.name.common;
    this.restApiService.fetchCountryDetailData(countryToSearch).subscribe({
      next: (value: CountryDetail[]) => {
        this.country = value[0];
        this.countryName = value[0].name["common"];
      },
      error: (error) => {
        this.toastService.presentErrorToast(
          `An error occurred: "${error.message}". Please try again later.`
        );
        throw error(error);
        this.loadingInfo = false;
      },
    });
    this.content.scrollToTop(0);
  }

  // If user clicks on header back button then show country list
  backToList() {
    this.countryName = "";
    this.countryChosen = false;
  }

  // load country list data for continent selected by filtering list of countries by region
  getContinentData(event: any): void {
    this.resetSearchItems(); // reset list after each
    this.searchItems =
      event.detail.value !== "all"
        ? this.searchItems.filter((item: CountryList) => {
            return item.region.includes(event.detail.value);
          })
        : this.countries;
  }

  resetSearchItems(): void {
    this.searchItems = this.countries;
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

  presentPopover(event: Event): void {
    this.popoverCtrl
      .create({
        component: CountryPopoverPage,
        componentProps: {
          country: this.country,
        },
        event,
      })
      .then((popover) => {
        popover.present();
      })
      .catch((error) => {
        this.toastService.presentErrorToast(
          `An error occurred: "${error.message}". Please try again later.`
        );
        throw error(error);
      });
  }

  public openMap(): void {
    this.router.navigate(["app/tabs/map"], {
      queryParams: {
        countryName: this.countryName,
        capName: this.country.capital[0],
        lat: this.country.latlng[0],
        lon: this.country.latlng[1],
        capLat: this.country.capitalInfo.latlng[0],
        capLon: this.country.capitalInfo.latlng[1],
      },
    });
  }

  public trackByName(index: number, item: CountryList): string {
    return item.name.common;
  }
}
