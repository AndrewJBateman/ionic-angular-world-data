import { TranslateService } from "@ngx-translate/core";
import { Platform } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

const LNG_KEY = "SELECTED_LANGUAGE";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  selected = "en";

  constructor(
    private translateService: TranslateService,
    private storage: Storage,
    private plt: Platform
  ) {}

  // sets default language as browser language if no other language choice made
  // if language language selected then this value is stored using the ionic storage module
  async setInitialAppLanguage() {
    const language = this.translateService.getBrowserLang();
    this.translateService.setDefaultLang(language);
    await this.storage.create();
    this.storage.get(LNG_KEY).then((val) => {
      if (val === "es") {
        this.setLanguage("es");
        this.selected = "es";
      } else if (val === "fr") {
        this.setLanguage("fr");
        this.selected = "fr";
      } else {
        this.setLanguage("en");
        this.selected = "en";
      }
    });
  }

  // lng can be 'en', 'fr' or 'es'
  setLanguage(lng: string) {
    this.translateService.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
