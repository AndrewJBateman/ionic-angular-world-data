import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

	{
		path: '',
		redirectTo: '/app/tabs/country-list',
		pathMatch: 'full'
	},
	{
		path: 'app',
		loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
	},
	// { 
	// 	path: 'search',
	// 	loadChildren: './pages/search/search.module#SearchPageModule'
	// },
	{ 
		path: 'country-detail',
		loadChildren: () => import('./pages/country-detail/country-detail.module').then(m => m.CountryDetailPageModule)
	},
  // { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' }

];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
