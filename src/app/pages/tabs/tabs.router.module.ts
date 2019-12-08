import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'country-list',
				children: [
					{
						path: '',
						loadChildren: () => import('../country-list/country-list.module').then(m => m.CountryListPageModule)
					}
				]
			},
/* 			{
				path: 'country-detail',
				children: [
					{
						path: '',
						loadChildren: () => import('../country-detail/country-detail.module').then(m => m.CountryDetailPageModule)
					}
				]
			}, */
			{
				path: 'categories',
				children: [
					{
						path: '',
						loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
					}
				]
			},
			{
				path: 'favourites',
				children: [
					{
						path: '',
						loadChildren: () => import('../favourites/favourites.module').then(m => m.FavouritesPageModule)
					}
				]
			},
			{
				path: 'about',
				children: [
					{
						path: '',
						loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
					}
				]
			},
			{
				path: '',
				redirectTo: '/tabs/country-list',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/country-list',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}
