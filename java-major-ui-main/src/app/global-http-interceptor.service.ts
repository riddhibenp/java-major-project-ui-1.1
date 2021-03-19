import { HttpEvent, HttpHandler, HttpRequest,HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorService implements ErrorHandler{

  constructor(public router: Router) { }
  handleError(error: any): void {
    throw new Error('Method not implemented.');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('error in intercept')
        console.error(error);
        return throwError(error.message);
      })
    )
  }


}
