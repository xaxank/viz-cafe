import { Routes } from '@angular/router';
import { WidgetDesignComponent } from './views/widget-design/widget-design.component'; // Update the path as necessary
import { DashboardDesignComponent } from './views/dashboard-design/dashboard-design.component'; // Update the path as necessary
import { HomeComponent } from './views/home/home.component'; // Update the path as necessary

export const routes: Routes = [
    {
        path: 'widget-design',
        component: WidgetDesignComponent
    },
    {
        path: 'dashboard-design',
        component: DashboardDesignComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        component: HomeComponent
    },
];
