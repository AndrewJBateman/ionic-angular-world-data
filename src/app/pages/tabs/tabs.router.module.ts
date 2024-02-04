import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "country-list",
        children: [
          {
            path: "",
            loadComponent: () =>
              import("../country-list/country-list.page").then(
                (m) => m.CountryListPage
              ),
          },
        ],
      },
      {
        path: "ocean-list",
        children: [
          {
            path: "",
            loadComponent: () =>
              import("../ocean-list/ocean-list.page").then(
                (m) => m.OceanListPage
              ),
          },
        ],
      },
      {
        path: "favourites",
        children: [
          {
            path: "",
            loadComponent: () =>
              import("../favourites/favourites.page").then(
                (m) => m.FavouritesPage
              ),
          },
        ],
      },
      {
        path: "about",
        children: [
          {
            path: "",
            loadComponent: () =>
              import("../about/about.page").then((m) => m.AboutPage),
          },
        ],
      },
      {
        path: "map",
        children: [
          {
            path: "",
            loadComponent: () =>
              import("../map/map.page").then((m) => m.MapPage),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/country-list",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/country-list",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
