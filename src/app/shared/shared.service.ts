import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../modules/auth/auth.service';
import { switchMap, take, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { of, Observable, Subject } from 'rxjs';
import { User } from './models/user';

@Injectable()
export class SharedService {
    rootUrl = 'https://test.firebaseio.com/';
    constructor(
        // private http: HttpClient,
        // private authService: AuthService,
        // private afs: AngularFirestore
    ) {
        //
    }
}
