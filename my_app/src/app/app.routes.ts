import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { GiftPageComponent } from './gift-page/gift-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'surprise', component: GiftPageComponent},
];
