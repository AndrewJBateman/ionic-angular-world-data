/**
 * ThemeService class responsible for managing the theme mode of the application.
 * It provides methods to enable dark mode, enable light mode, and change the theme mode based on user interaction.
 * The class uses the Renderer2 and Storage modules from Angular to manipulate the DOM and store the theme mode.
 */
import { Injectable, RendererFactory2, Inject, Renderer2 } from "@angular/core";

import { DOCUMENT } from "@angular/common";
import { Storage } from "@ionic/storage-angular";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  darkMode: boolean;
  renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    private storage: Storage,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  THEME_CLASS = "dark-theme";
  
  async enableDark(): Promise<void> {
    this.renderer.addClass(this.document.body, "dark-theme");
		await this.storage.set(this.THEME_CLASS, true);
    this.darkMode = true;
  }

  async enableLight(): Promise<void> {
    this.renderer.removeClass(this.document.body, "dark-theme");
    await this.storage.set(this.THEME_CLASS, false);
    this.darkMode = false;
  }

  changeThemeMode(event: CustomEvent): void {
    event.detail.checked ? this.enableDark() : this.enableLight();
  }
}
