import { Routes } from '@angular/router';
import { HomeComponent } from '../componenti/home/home.component';
import { ChisiamoComponent } from '../componenti/chisiamo/chisiamo.component';
import { CatalogoComponent } from '../componenti/catalogo/catalogo.component';
import { ContattiComponent } from '../componenti/contatti/contatti.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "chisiamo",
        component: ChisiamoComponent
    },
    {
        path: "catalogo",
        component: CatalogoComponent
    },
    {
        path: "contatti",
        component: ContattiComponent
    }
];
