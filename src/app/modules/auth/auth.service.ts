import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {
    AngularFirestore,
    AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from 'src/app/shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    BASE_URL = 'http://localhost:4000/auth';
    token: string;
    user$: Observable<User> = of(null);

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar
    ) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user && user.emailVerified) {
                    user.getIdToken().then((token: string) => {
                        this.token = token;
                    });
                    console.log(this.afs.doc<User>(`users/${user.uid}`).valueChanges());
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                } else {
                    this.token = null;
                    return of(null);
                }
            })
        );
    }

    get isAuthenticated(): boolean {
        return true;
    }
    getUserInfo() { }

    // Update data from Google and emailPass SignIN and SignUP
    updateUserData(user: firebase.User) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(
            `users/${user.uid}`
        );

        const data: User = {
            uid: user.uid,
            email: user.email,
            name: user['name']
        };
        return userRef.set(data);
    }

    createUserData(userProfile: User) {
        const user = this.afAuth.auth.currentUser;
        const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(
            `users/${user.uid}`
        );

        userRef.update(userProfile);
    }

    async logIn({ email, password }: { email: string; password: string }) {
        // Get the url that the user wanted, but couldn't go because it have to login first
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';

        try {
            const credential = await this.afAuth.auth.signInWithEmailAndPassword(
                email,
                password
            );

            if (credential.user.emailVerified) {
                this.router.navigate([`/${returnUrl}`]);
            } else {
                this.afAuth.auth.signOut();
                this.snackBar.open(
                    'Please validate your email address. Check your inbox',
                    'X',
                    {
                        duration: 3000
                    }
                );
            }
        } catch (error) {
            this.snackBar.open(error.message, error.code, { duration: 3000 });
        }
    }

    async signup({ name, email, password }: { name: string; email: string; password: string }) {
        try {
            const credential = await this.afAuth.auth.createUserWithEmailAndPassword(
                email,
                password
            );

            credential.user['name'] = name;
            await this.updateUserData(credential.user); // Add User to the Database

            this.sendVerificationEmail(); // Verfication email
            this.logOut();
        } catch (error) {
            this.snackBar.open(error.message, error.code, { duration: 3000 });
        }
    }

    sendVerificationEmail() {
        const user = this.afAuth.auth.currentUser;
        user.sendEmailVerification()
            .then(() => {
                this.snackBar.open(
                    'Email was sent to you, please confirm account and after that you can login',
                    'X'
                );
                this.router.navigate(['/signin']);
            })
            .catch(error => {
                this.snackBar.open(error.message, 'X', { duration: 3000 });
            });
    }

    logOut() {
        this.afAuth.auth
            .signOut()
            .then(() => {
                this.token = null;
                this.router.navigate(['/signin']);
            })
            .catch(error => {
                this.snackBar.open(error.message, error.code, {
                    duration: 3000
                });
            });
    }

    updatePassword(passWordInfo: any) {
        this.afAuth.auth
            .sendPasswordResetEmail(passWordInfo)
            .then(() => {
                this.snackBar.open('An email was sent to you', 'X', {
                    duration: 3000
                });
                this.router.navigate(['/signin']);
            })
            .catch(error => {
                this.snackBar.open(error.message, 'X', { duration: 3000 });
            });
    }
    updateUserInfo(user: User) { }
    sendResetEmail(emailReset: any) {
    }

    private handleMessages(error: HttpErrorResponse) { }
}
