import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
export class GlobalHttpInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            
              console.log('event--->>>', event);
          }
          return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('working here...')
          let data = {};
          data = {
              reason: error && error.error && error.error.reason ? error.error.reason : '',
              status: error.status
          };
          alert(data);
          return throwError(error);
      }));
  }
}



