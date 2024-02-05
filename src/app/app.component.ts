/**
 * AppComponent class represents the root component of the Angular application.
 * It is responsible for initializing the app, setting up the platform, and handling the dark mode.
 *
 * @constructor
 * @method initializeApp - Initializes the app by setting up the platform, status bar, splash screen, and dark mode.
 * @method darkStartMode - Sets up the dark mode based on the stored data.
 * @method onSidenavClose - Event handler for closing the sidenav.
 * @property platform - The platform service for detecting the current platform.
 * @property router - The router service for navigating between pages.
 * @property splashScreen - The splash screen service for hiding the splash screen.
 * @property statusBar - The status bar service for setting the status bar style.
 * @property themeService - The theme service for enabling the dark or light theme.
 * @property storageService - The storage service for retrieving stored data.
 * @property sidenavClose - An event emitter for closing the sidenav.
 * @property darkMode - A boolean indicating whether the dark mode is enabled or not.
 * @property appPages - An array of app pages constants.
 */

import {
  Component,
  ViewEncapsulation,
  OnInit,
  EventEmitter,
  Output,
  inject,
} from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

// Services
import { ThemeService } from "./services/theme.service";
import { StorageService } from "./services/storage.service";

// constants
import * as AppPageConstants from "./constants/app-pages.constants";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private platform = inject(Platform);
  private router = inject(Router);
  private splashScreen = inject(SplashScreen);
  private statusBar = inject(StatusBar);
  public themeService = inject(ThemeService);
  private storageService = inject(StorageService);

  @Output() sidenavClose = new EventEmitter();
  public darkMode: boolean = false;
  public appPages = AppPageConstants.APP_PAGES;

  constructor() {
    this.initializeApp();
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
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

  onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
