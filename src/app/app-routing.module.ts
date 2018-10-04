import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/auth.guard';
import { SearchUserComponent } from './components/search-user/search-user.component';

const appRoutes: Routes = [
//  { path: 'search', component: SearchUserComponent},
  { path: 'search', canActivate: [AuthGuard], component: SearchUserComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
