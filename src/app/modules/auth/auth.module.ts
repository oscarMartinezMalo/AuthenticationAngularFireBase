import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { TeamsDropdownComponent } from 'src/app/shared/components/teams-dropdown/teams-dropdown.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
    declarations: [
        UpdateUserComponent,
        ForgotPassComponent,
        SignupComponent,
        SigninComponent,
        ProfileComponent,
        TeamsDropdownComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressBarModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule {}
