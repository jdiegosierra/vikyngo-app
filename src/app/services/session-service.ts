import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APIService } from './api-service';
import { UserService } from './user-service';
import { Router } from '@angular/router';


@Injectable()

export class SessionService extends APIService {

    
    constructor(
        protected http: HttpClient,
        private userService: UserService,
        private router: Router) {
            super(http);

        }




}
