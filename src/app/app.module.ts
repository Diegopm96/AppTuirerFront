import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { FeedModule } from './feed/feed.module';
import { LoginComponent } from './login/login.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { DividerModule } from 'primeng/divider';
import { CookieService } from 'ngx-cookie-service';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { RegistroComponent } from './registro/registro.component';
import { UtilsModule } from './utils/utils.module';
import { MensajesComponent } from './mensajes/mensajes.component';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegistroComponent, MensajesComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    MessagesModule,
    DialogModule,
    UtilsModule,
    TableModule,
    AccordionModule,
    InputTextareaModule



  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
    },
    CookieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
