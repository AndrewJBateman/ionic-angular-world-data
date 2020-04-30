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
            loadChildren: () =>
              import("../country-list/country-list.module").then(
                (m) => m.CountryListPageModule
              ),
          },
        ],
      },
      {
        path: "ocean-list",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../ocean-list/ocean-list.module").then(
                (m) => m.OceanListPageModule
              ),
          },
        ],
      },
      {
        path: "favourites",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../favourites/favourites.module").then(
                (m) => m.FavouritesPageModule
              ),
          },
        ],
      },
      {
        path: "about",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../about/about.module").then((m) => m.AboutPageModule),
          },
        ],
      },
      {
        path: "map",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../map/map.module").then((m) => m.MapPageModule),
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
