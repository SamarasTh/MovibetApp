import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

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
];
