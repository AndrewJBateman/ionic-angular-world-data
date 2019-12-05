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

![Ionic page](./img/list.png)

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

* Displays list of countries with country flag, title, capital and region.
* (future) search bar to search for country from list.
* (future) clicking on the More Info button will route to a detailed info page.
* (future) clicking on the Map button will route to a (Google) Map view of the country.
* (future) clicking on Analysis will route to World Bank statistics - 2nd API.
* **Typescript interface** (future) used to define the expected structures of the json objects returned from the IP and news APIs.
* **Separate services** page with API http fetch functions.
* **Dark mode** (future) switch on menu changes from light to dark mode.
* **Offline Storage** (future) of favourite articles using Ionic Storage.
* **Network** (future) status check in initialisation so latest news data is stored. Template data-binding always from stored data.
* **Common Refresh Component** (future) dragging down will perform refresh function.
* **Common Progess Bar Component** (future) ion-card shows while news loading on News, Categories and Favourites pages.
* **Localisation using i18n** so user can select between English (default), Spanish and French.

## Navigation/Pages

* **Nav side-bar:** TODO: countries, categories, favorites, search, about, change language, dark theme toggle + Unsplash image with credit.

* **Countries page** shows world headlines using an ion-card list. Uses *ngIf to only show card if it has an image to avoid having news items with empty spaces (API data is not perfect). Shows time as '... ago' using a date convert pipe that uses day.js to convert the API Coordinated Universal Time (UTC) date-time string to '...ago'.

* **Categories**

* **Favourites**

* **About**

## Status & To-do list

* Status: Working Country List page. Ion segment used to allow user to select country_list by continent. Routes to detail page but data binding not working due to api get error.

* To-do: Change ion-segment to ion-select-option or top bar menu sliding columns. Add search, fix detail page. Add filter to filter countries by select option chosen (ie Africa, Europe etc). Add to categories page/add extra pages with rankings data from World Bank etc. Add contact info to about page. Add scss color themes.

## Inspiration

* [Ionic Academy Tutorial: How to Localise Your Ionic App with ngx-translate](https://ionicacademy.com/localise-ionic-ngx-translate/) however language selected using ion-select-option dropdown list in side-menu (ie not using a popover page).

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
