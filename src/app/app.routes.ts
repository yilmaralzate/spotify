import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { PaisesComponent } from './components/paises/paises.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    //{ path: 'artist', component: ArtistComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'search', component: SearchComponent },
    { path: 'paises', component: PaisesComponent },
    //{ path: '', component: HomeComponent },
    //{ path: '**', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
