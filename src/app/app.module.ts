import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewcontactlistComponent } from './admin/viewcontactlist/viewcontactlist.component';
import { EditcontactComponent } from './admin/editcontact/editcontact.component';
import { DeletecontactComponent } from './admin/deletecontact/deletecontact.component';
import { CreatecontactComponent } from './admin/createcontact/createcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    ViewcontactlistComponent,
    EditcontactComponent,
    DeletecontactComponent,
    CreatecontactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
