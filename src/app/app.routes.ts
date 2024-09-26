import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { CollectionsPageComponent } from './components/collections-page/collections-page.component';
import { CollectionCreatePageComponent } from './components/collection-create-page/collection-create-page.component';
import { CollectionDetailsPageComponent } from './components/collection-details-page/collection-details-page.component';

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
        component: CollectionsPageComponent
    },
    {
        path: 'collections/create',
        component: CollectionCreatePageComponent
    },
    {
        path: 'collections/:title',
        component: CollectionDetailsPageComponent
    },

];
