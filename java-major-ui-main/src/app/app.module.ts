import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GlobalHttpInterceptorService } from './global-http-interceptor.service';
import { GlobalErrorHandlerService } from './global-error-handler.service';



@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,HttpClientModule,ReactiveFormsModule, NoopAnimationsModule,MaterialModule
   
  ],
  providers: [  { provide: HTTP_INTERCEPTORS,    useClass: GlobalHttpInterceptorService,    multi: true  },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
