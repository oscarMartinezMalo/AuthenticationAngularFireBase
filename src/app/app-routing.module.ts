import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedGuard } from './core/guards/logged.guard';

const routes: Routes = [
    // {
    //   path: 'home', component: HomeComponent, canActivate: [RolesGuard],
    //   data: { animation: 'isLeft', expectedRole: [Roles.ADMIN, Roles.PLAYER] }
    // },
    { path: '', redirectTo: '/signin', pathMatch: 'full', data: { animation: 'isLeft' } },
    { path: 'home', component: HomeComponent, data: { animation: 'isRight' }, canActivate: [AuthGuard] },
    { path: 'signin', component: SigninComponent, data: { animation: 'isRight' }, canActivate: [LoggedGuard] },
    { path: 'signup', component: SignupComponent, data: { animation: 'isLeft' }, canActivate: [LoggedGuard] },

    { path: 'not_found', component: ErrorPageComponent, data: { message: 'This page can’t be reached', animation: 'isRight' } },
    { path: '**', redirectTo: '/not_found', data: { animation: 'isRight' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
