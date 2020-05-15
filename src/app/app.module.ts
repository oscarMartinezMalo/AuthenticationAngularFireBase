import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './core/home/home.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from 'src/environments/environment';

import { MaterialModuleModule } from './material-module.module';

import { NavbarComponent } from './core/navbar/navbar.component';
import { AuthService } from './modules/auth/auth.service';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { SharedService } from './shared/shared.service';

import { AppErrorHandler } from './shared/errors/app-error-handler';
import { InputFormatDirective } from './shared/directives/input-format.directive';
import { DialogCustomComponent } from './shared/components/dialog-custom/dialog-custom.component';

import { Ng9OdometerModule } from 'ng9-odometer';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ErrorPageComponent,
        SigninComponent,
        SignupComponent,
        InputFormatDirective,
        DialogCustomComponent,
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        HttpClientModule,

        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth ,
        AngularFireStorageModule, // imports firebase/storage only needed for storage features
        AngularFireDatabaseModule,

        ReactiveFormsModule,
        FormsModule,
        MaterialModuleModule, // All material components
        Ng9OdometerModule.forRoot(),
    ],
    providers: [
        SharedService,
        AuthService,
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
 