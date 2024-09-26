import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { CollectionsPageComponent } from './components/collections-page/collections-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: (urlInfo) => {
            console.log(urlInfo);
            return '/search'
        },
        pathMatch: 'full',
    },
    {
        path: 'search',
        component: SearchComponent,
    },
    { 
        path: 'collections',
        component: CollectionsPageComponent },

];
