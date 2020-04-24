import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { OceanListPage } from "./ocean-list.page";
import { PopoverPage } from "../ocean-popover/ocean-popover";

const routes: Routes = [
  {
    path: "",
    component: OceanListPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [OceanListPage, PopoverPage],
  entryComponents: [PopoverPage],
})
export class OceanListPageModule {}
