import { Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component'; 
import { UserProfileRouteComponent } from './user-profile-route/user-profile-route.component';
import { SettingsComponent } from './settings/settings.component';
import { ChangePasswordRouteComponent } from './change-password-route/change-password-route.component';
import { QueueComponent } from './queue/queue.component'; 
import { VisitsComponent } from './visits/visits.component';
import { RouteComponent as UploadProfile } from './upload_profile_pic/route/route.component';
import { DrugsComponent } from './drugs/drugs.component'; 
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderedDrugsComponent } from './ordered-drugs/ordered-drugs.component';

export const appRoutes: Routes = [
    {path: '', component: DashboardComponent },
    {path: 'users', component: UsersComponent },
    {path: 'drugs', component: OrdersListComponent }, 
    {path: 'settings', component: SettingsComponent }, 
    //{path: ':worker_id', component: UserProfileRouteComponent}, 
    {path: 'queue', component: QueueComponent },
    {path: 'visits/:reg_id', component: VisitsComponent},
    {path: 'search/:reg_id', component: DashboardComponent}, 
    {path: 'settings/change profile picture', component: UploadProfile },
    {path: 'settings/change password', component: ChangePasswordRouteComponent },
    {path: 'ordered drugs/:order_id', component: OrderedDrugsComponent},
]; 