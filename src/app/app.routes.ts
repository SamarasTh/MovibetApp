import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: (urlInfo) => {
            console.log(urlInfo);
            return '/home'
        },
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: SearchComponent,
    }
];
