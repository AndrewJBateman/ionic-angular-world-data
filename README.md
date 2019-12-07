# Ionic Country Data

App that displays details about countries using data from the [Rest Countries](https://restcountries.eu/), using the [Ionic 5 framework](https://ionicframework.com/docs).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* The [Rest Countries API](https://restcountries.eu/) has a lot more detailed functionality available:

## Screenshots

![Ionic page](./img/country-list.png)

## Technologies

* [Ionic v5.0.0](https://ionicframework.com/)

* [Angular v7.2.2](https://angular.io/)

* [Ionic/angular v4.1.0](https://www.npmjs.com/package/@ionic/angular)

* [Rest Countries API](https://restcountries.eu/)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* tba.

```typescript
tba
```

## Features

* Displays mat-card list of countries with country flag, title, capital and region.
* (future) search bar to search for country from list.
* (future) clicking on the More Info button will route to a detailed info page.
* (future) clicking on the Map button will route to a (Google) Map view of the country.
* (future) clicking on Analysis will route to World Bank statistics - 2nd API.
* **Typescript interface** used to define the expected structures of the json objects returned from the IP and news APIs.
* **Separate services** page with API http fetch functions.
* **Dark mode** (future) switch on menu changes from light to dark mode.
* **Offline Storage** of favourite articles using Ionic Storage.
* **Common Progess Bar Component** ion-card shows while news loading on News, Categories and Favourites pages.
* **Localisation using i18n** so user can select between English (default), Spanish and French.

## Navigation/Pages

* **Nav side-bar:** countries, categories, favorites, search, about, change language, dark theme toggle + Unsplash image with credit. Change color of tabs bar - add blue top border??
* **TODO** add menu close function.

* **Countries page:** Simple list of cards working for 'all' and all region categories.
**TODO:** Include search bar at top. Link to Country Detail page - footer: link to map, link to Wikipedia? link to World Bank Data?

* **Country Detail page:** TODO

* **Categories** Replace with quiz? Change title to QUIZ. or news??

* **Favourites** Replace with..map? just a map you can zoom in?

* **About** 

## Status & To-do list

* Status: Working Country List page. Ion segment used to allow user to select country_list by continent. Routes to detail page but data binding not working due to api get error.

* To-do: Add to categories page/add extra pages with rankings data from World Bank etc. Add contact info to about page. Add scss color themes. Look at CIA Fact Book for info - API?

## Inspiration

* [Ionic Academy Tutorial: How to Localise Your Ionic App with ngx-translate](https://ionicacademy.com/localise-ionic-ngx-translate/) however language selected using ion-select-option dropdown list in side-menu (ie not using a popover page).

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
