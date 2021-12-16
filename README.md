# :zap: Ionic Country Data

Ionic app that displays data about countries and oceans from the [Rest Countries](https://restcountries.com/) API, a [Google Maps](https://cloud.google.com/maps-platform/maps/) API and a local json file.
**Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-world-data?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-world-data?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-world-data?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-world-data?style=plastic)

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* The [Rest Countries API](https://restcountries.com/) has a number of endpoints that can be used to search for info. I have used the endpoints: All, Name & Region. The [API Response Example](https://restcountries.com/#api-endpoints-response-example) was useful to create my http interface class.
* The [Google Maps](https://cloud.google.com/maps-platform/maps/) API displays an interactive map of the chosen country that the user can zoom in and out of.
* Built using the [Ionic 5 framework](https://ionicframework.com/docs)

## :camera: Screenshots

| ![Ionic page](./img/list1.png) | ![Ionic page](./img/list2.png) | ![Ionic page](./img/list3.png) |
|:---:|:---:|:---:|
| Country-List Page | Country-List Page - Dark | Country-List - Detail |

| ![Ionic page](./img/world1.png) | ![Ionic page](./img/world2.png) | ![Ionic page](./img/world3.png) |
|:---:|:---:|:---:|
| Map View Page | Side Menu | Side Menu - Dark |

| ![Ionic page](./img/oceans1.png) | ![Ionic page](./img/oceans2.png) | ![Ionic page](./img/oceans3.png) |
|:---:|:---:|:---:|
| Oceans-List Page | Oceans Page - Dark| Oceans Page + Popover |

| ![Ionic page](./img/favourites1.png) | ![Ionic page](./img/favourites2.png) | ![Ionic page](./img/favourites3.png) |
|:---:|:---:|:---:|
| Favourites Page | Favourites Page + Popover | Favourites Page - Dark |

| ![Ionic page](./img/about1.png) | ![Ionic page](./img/about2.png) | ![Ionic page](./img/about3.png) |
|:---:|:---:|:---:|
| About Page | About Page + Popover | About Page - Dark |

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Angular v13](https://angular.io/)
* [Ionic/angular v6](https://www.npmjs.com/package/@ionic/angular)
* [Rest Countries API v2](https://restcountries.com/)
* [Google Maps API](https://developers.google.com/chart/interactive/docs/gallery/map)
* [Ionic 5 open source Ionicons](https://ionicons.com/)

## :floppy_disk: Setup

* Run `npm i` to install dependencies
* Get yourself an API key for Google Cloud Maps API and add to `index.html` file
* To start the server on _localhost://8100_ type: 'ionic serve'
* To run linter: `npm run lint`
* To create a build file suitable for Firebase deployment: `ionic build --prod --release`
* To deploy to Firebase: `firebase deploy`

## :computer: Code Examples

* service function to fetch API country details, from `rest-api.service.ts` using the take(1) method so unsubscribing from the observable is not necessary.

```typescript
fetchCountryDetailData(country: string) {
  return this.httpClient
    .get<CountryDetailInterface[]>(`${apiUrl}/name/${country}?fullText=true`)
    .pipe(
      take(1),
      catchError((error) => {
      return throwError('Country not found', error);
    })
  );
}
```

## :cool: Features

* **integrated Google Chart Maps** API to show country map.
* **Typescript interface** used to define the expected structures of the json objects returned from the API.
* **Separate services** page with API http fetch functions.
* **RxJS Observables** used to extract data asynchronously.
* **Dark mode** switch on menu.
* **Offline Storage**  (future) of favourite countries/oceans using Ionic Storage.
* **Localisation using i18n** so user can select between English (default), Spanish and French.
* **ion-grid** with fixed column size used so country content data will display ok even on a PC.
* **search** function to search for country name with regex to only allow letters in search text.

## General/Navigation/Pages

* **General:** i18n Translation part-complete
* **TODO:**
* Correct language check so it does revert to English when EN selected - use storage

* **Nav side-bar:** countries, oceans, favorites, about, change language, dark theme toggle. Languages added.
* **TODO** Add language for alert cancel?

* **Countries page:** Displays mat-card list of countries, displaying country flag, title, capital and region, for 'all' and 5 region sub-categories. Clicking on a country list item will show the country detail (no routing required - all done using *ngIf in the html content :-)). Country searchbar to search by country name. Fab icon link to map of country, generated using the Google Maps API.
* **TODO:**
* Change from Google Maps to Leaflet
* Make fab button stay inside div
* add function to convert border country 3 letter codes to full country names.
* add function (custom pipe) to insert ',' in area figures etc.
* translate: popup continent names, card: capital region

* **Oceans page** Displays a mat-card for each ocean using data from a local json file and an *ngFor loop. Menu popover with links to further info for each ocean. It was decided not to add 'favourites functionality' as there are only 5 oceans and they are easy to find.

* **Favourites** Shows an image with text below if there are no favourites
**TODO**
* Add code to store/clear favourites

* **About** Displays image with author credit and short info about the app with links to APIs used. Header includes popover with working links to Author Website, Github Repo & author website contact page

## :clipboard: Status & To-do list

* Status: Part working, displays country list & country detail page etc. passes linting.
* To-do: fix search function & region selection, fix linting, reduce API calls (use param?), replace deprecated subscribe function. Consider using API v3 - requires new interfaces etc.

## :clipboard: To-do

1. replace any types with models
2. Dark theme - add storage
3. Check translations
4. Splash screen
5. SqLite - use as default database?
6. Lighthouse score?
7. Run on simulator

## :clap: Inspiration

* [Ionic Academy Tutorial: How to Localise Your Ionic App with ngx-translate](https://ionicacademy.com/localise-ionic-ngx-translate/) however language selected using ion-select-option dropdown list in side-menu (ie not using a popover page)
* [Devpato article: Setup Google Map in Angular app (The pro way)](https://dev.to/devpato/setup-google-map-in-angular-app-the-pro-way-3m9p)
* [ERROR Error: Database not created. Must call create() first](https://stackoverflow.com/questions/68378350/error-error-database-not-created-must-call-create-first)
* [What’s New in RxJS 7: Small Bundles and Big Changes to share()](https://www.bitovi.com/blog/whats-new-in-rxjs-7-small-bundles-and-big-changes-to-share)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
