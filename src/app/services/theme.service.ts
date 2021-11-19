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

	async enableDark() {
		this.renderer.addClass(this.document.body, "dark-theme");
    await this.storage.create();
		this.storage.set("dark-theme", true);
		this.darkMode = true;
	}

	async enableLight() {
		this.renderer.removeClass(this.document.body, "dark-theme");
    await this.storage.create();
		this.storage.set("dark-theme", false);
		this.darkMode = false;
	}

	changeThemeMode(e: any) {
		e.detail.checked ? this.enableDark() : this.enableLight();
	}
}
