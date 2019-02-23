import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { SessionService } from './session-service';


const HTTP_401_UNAUTHORIZED = 401;
//Gestionar la inyeccion de cabeceras como el token
@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

    constructor(
        private injector: Injector,
        private sessionService: SessionService
        ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return null
    }
}