import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatCardFooter } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PackageComponent } from './package/package.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavComponent } from './admin-dashboard/admin-nav/admin-nav.component';
import { UserComponent } from './admin-dashboard/user/user.component';
import { ShowUserComponent } from './admin-dashboard/user/show-user/show-user.component';
import { AddEditUserComponent } from './admin-dashboard/user/add-edit-user/add-edit-user.component';



import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { PaypalPaymentsComponent } from './paypal-payments/paypal-payments.component';
import { NgxPayPalModule } from 'ngx-paypal';

import  { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { RecipePanelComponent } from './admin-dashboard/recipe-panel/recipe-panel.component';
import { ShowRecipeComponent } from './admin-dashboard/recipe-panel/show-recipe/show-recipe.component';
import { AddEditRecipeComponent } from './admin-dashboard/recipe-panel/add-edit-recipe/add-edit-recipe.component';
import { PackagePanelComponent } from './admin-dashboard/package-panel/package-panel.component';
import { ShowPackageComponent } from './admin-dashboard/package-panel/show-package/show-package.component';
import { AddEditPackageComponent } from './admin-dashboard/package-panel/add-edit-package/add-edit-package.component';
import { FeedbackPanelComponent } from './admin-dashboard/feedback-panel/feedback-panel.component';
import { ShowFeedbackComponent } from './admin-dashboard/feedback-panel/show-feedback/show-feedback.component';
import { AddEditFeedbackComponent } from './admin-dashboard/feedback-panel/add-edit-feedback/add-edit-feedback.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/login/register/register.component';
import { LoginFormComponent } from './account/login/login-form/login-form.component';
import { AccountComponent } from './account/account.component';




@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RecipesComponent,
    PackagesComponent,
    ContactComponent,
    SupplementsComponent,
    FooterComponent,
    PackageComponent,
    NavComponent,
    PaypalPaymentsComponent,
    UserComponent,
    AdminDashboardComponent,
    ShowUserComponent,
    AddEditUserComponent,
    AdminNavComponent,
    RecipePanelComponent,
    ShowRecipeComponent,
    AddEditRecipeComponent,
    PackagePanelComponent,
    ShowPackageComponent,
    AddEditPackageComponent,
    FeedbackPanelComponent,
    ShowFeedbackComponent,
    AddEditFeedbackComponent,
    LoginComponent,
    RegisterComponent,
    LoginFormComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatDialogModule,
    NgxPayPalModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
