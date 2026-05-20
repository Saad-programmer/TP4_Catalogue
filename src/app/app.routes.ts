// app.routes.ts
import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Produits } from './pages/produits/produits';

import { DetailProduit } from './pages/detail-produit/detail-produit';

import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Admin } from './pages/admin/admin';

import { PageIntrouvable } from './pages/page-introuvable/page-introuvable';

import { authGuard } from './auth-guard';


// app.routes.ts — Routes imbriquées

import { AdminDashboard } from './pages/admin/admin-dashboard/admin-dashboard';

import { AdminUsers } from './pages/admin/admin-users/admin-users';

import { AdminProduits } from './pages/admin/admin-produits/admin-produits';



export const routes: Routes = [
    { path: '', component: Accueil },
    { path: 'accueil', component: Accueil },
    { path: 'produits', component: Produits },
    { path: 'produits/:id', component: DetailProduit },
    { path: 'contact', component: Contact },
    { path: 'login', component: Login },
    
    {path:'admin',
        component: Admin,
        canActivate: [authGuard],
        children:[
            { path: '', component: AdminDashboard },
            { path: 'users', component: AdminUsers },
            { path: 'produits', component: AdminProduits },
        ]
    },
    {
        path: '**',
        component: PageIntrouvable
    }
];