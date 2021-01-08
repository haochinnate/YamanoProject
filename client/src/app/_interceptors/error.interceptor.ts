import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        // ther error is HttpErrorResponse
        if (error) {
          // switch (error.status) {
          //   case 400:
          //     if (error.error.error) {
                
          //     }
          //     break;
          
          //   default:
          //     break;
          // }
        }
        
        // if switch didn't catch and handle it, then just return the error
        // buy actually should not hit here
        return throwError(error);
      })
    );
  }
}
