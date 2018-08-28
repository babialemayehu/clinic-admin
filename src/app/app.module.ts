import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutes } from './routes'; 

import 'materialize-css'; 

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'; 

import { MatInputModule} from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';

import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FloatingActionBtnComponent } from './floating-action-btn/floating-action-btn.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { HttpClientModule} from "@angular/common/http";
import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { 
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule, 
  MatDialogModule,  
  MatSelectModule, 

} from '@angular/material';
import { UsersComponent } from './users/users.component';

// SERVICE PROVIDERS
import { UserService } from './service/user.service';
import { UserTableComponent } from './user-table/user-table.component';

// context menu
import { ContextComponent } from './context/context.component';
// import { ContextMenu } from './context/context.menu';
import { ContextMenuModule } from '../lib/context-menu.module';
import { ContextMenuComponent } from './context-menu/context-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    FloatingActionBtnComponent,
    RegisterationFormComponent,
    AlertComponent,
    DashboardComponent,
    UsersComponent,
    UserTableComponent,
    ContextComponent,
    ContextMenuComponent
    // ContextMenu,
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, 
    MatDialogModule, 
    MatSelectModule,
    ContextMenuModule,
   
  ],
  entryComponents: [
    RegisterationFormComponent, 
    AlertComponent, 
    // ContextMenu, 
    ContextMenuComponent,
  ], 
  providers: [
    UserService, 
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
