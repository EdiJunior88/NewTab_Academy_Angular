import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SqrtPipe } from './sqrt.pipe';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { MyService } from './my.service';
import { provideRoutes } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePT, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsuariosComponent,
    SqrtPipe,
    HomeComponent,
    ContatoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [MyService, { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
