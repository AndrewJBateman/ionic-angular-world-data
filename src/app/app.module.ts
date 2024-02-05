/**
 * This code snippet represents the AppModule class in an Angular application.
 * It is responsible for importing and configuring various modules, components and providers.
 * The AppModule class is the root module of the application and is used to bootstrap the AppComponent.
 * 
 * The AppModule class imports the following core modules:
 * - HttpClientModule: Provides the necessary dependencies for making HTTP requests.
 * - NgModule: Decorator used to define a module.
 * - FormsModule: Provides support for template-driven forms.
 * - ReactiveFormsModule: Provides support for reactive forms.
 * - BrowserModule: Provides services that are essential to launch the application in a browser.
 * - RouteReuseStrategy: Provides a strategy for reusing routes.
 * - IonicModule: Provides the necessary dependencies for building Ionic applications.
 * 
 * The AppModule class also imports the following components and modules:
 * - AppComponent: The root component of the application.
 * - AppRoutingModule: The routing module of the application.
 * 
 * Additionally, the AppModule class imports the following third-party dependencies:
 * - SplashScreen: Provides functionality for displaying a splash screen during app startup.
 * - StatusBar: Provides functionality for managing the status bar of the device.
 * - Storage: Provides functionality for storing data in the Ionic storage.
 * 
 * The AppModule class is decorated with the NgModule decorator, which configures the module by specifying its declarations, imports, providers, and bootstrap components.
 * The providers array includes the necessary providers for the application, such as Storage, StatusBar, SplashScreen, and RouteReuseStrategy.
 * The bootstrap array specifies the root component of the application, which is AppComponent.
 * 
 * To use this AppModule in an Angular application, it needs to be imported in the main.ts file and included in the bootstrap process.
 */

// Core imports
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

// Components and modules
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

// Third party imports
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Storage } from "@ionic/storage-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    Storage,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
