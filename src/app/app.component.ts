import {
  Component,
  ViewEncapsulation,
  OnInit,
  EventEmitter,
  Output,
} from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

// Services
import { LanguageService } from "./services/language.service";
import { ThemeService } from "./services/theme.service";
import { StorageService } from "./services/storage.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @Output() sidenavClose = new EventEmitter();
  darkMode: boolean;
  public language: string = this.languageService.selected;
  public appPages = [
    {
      title: "Countries",
      titlefr: "Pays",
      titlesp: "Países",
      url: "/app/tabs/country-list",
      icon: "earth-outline",
      menuIcon: "menuIconCountry",
    },
    {
      title: "Oceans",
      titlefr: "Océans",
      titlesp: "Océanos",
      url: "/app/tabs/ocean-list",
      icon: "water-outline",
      menuIcon: "menuIconOceans",
    },
    {
      title: "Favourites",
      titlefr: "Favoris",
      titlesp: "Favoritas",
      url: "/app/tabs/favourites",
      icon: "heart-outline",
      menuIcon: "menuIconFavourites",
    },
    {
      title: "About",
      titlefr: "Sur cette app",
      titlesp: "Sobre esta app",
      url: "/app/tabs/about",
      icon: "information-circle-outline",
      menuIcon: "menuIconAbout",
    },
  ];

  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public themeService: ThemeService,
    private languageService: LanguageService,
    private storageService: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.languageService.setInitialAppLanguage();
      this.darkStartMode();
    });
  }

  async darkStartMode() {
    this.storageService.getStoredData("dark-theme").then((val) => {
      this.darkMode = JSON.parse(val);
      this.darkMode === true
        ? this.themeService.enableDark()
        : this.themeService.enableLight();
    });
  }

  languageChange() {
    this.languageService.setLanguage(this.language);
  }

  onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
