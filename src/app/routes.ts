import { Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component'; 
import { UserProfileRouteComponent } from './user-profile-route/user-profile-route.component';

export const appRoutes: Routes = [
    {path: '', component: DashboardComponent },
    {path: 'users', component: UsersComponent },
    {path: ':worker_id', component: UserProfileRouteComponent}
]; 