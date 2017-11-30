import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

// Import all other components here
import { HomeComponent } from './home/home.component';

const APP_ROUTES : Routes = [
  { path : '', component: HomeComponent},
  { path : 'home', component: HomeComponent}
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
