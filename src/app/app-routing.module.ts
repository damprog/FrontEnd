import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PackageComponent } from './package/package.component';
import { PackagesComponent } from './packages/packages.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserComponent } from './admin-dashboard/user/user.component';
import { PackagePanelComponent } from './admin-dashboard/package-panel/package-panel.component';
import { RecipePanelComponent } from './admin-dashboard/recipe-panel/recipe-panel.component';
import { FeedbackPanelComponent } from './admin-dashboard/feedback-panel/feedback-panel.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './account/login/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { LoginFormComponent } from './account/login/login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'packages', component: PackagesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'package', component: PackageComponent},
  { path: 'admin', component: AdminDashboardComponent},
  { path: 'user-panel', component: UserComponent},
  { path: 'package-panel', component: PackagePanelComponent},
  { path: 'recipe-panel', component: RecipePanelComponent},
  { path: 'feedback-panel', component: FeedbackPanelComponent},
  { path: 'account', component: AccountComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login-form', component: LoginFormComponent},
  { path: 'register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
