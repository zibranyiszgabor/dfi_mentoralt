import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// 🔹 MSAL MODUL IMPORTÁLÁSA
import { MsalModule, MsalService, MsalGuard, MsalInterceptor, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { PublicClientApplication, BrowserCacheLocation, InteractionType } from '@azure/msal-browser';
import { environment } from '../environments/environment';

// 🔹 Saját AuthService és AuthGuard
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

// 🔹 Saját HTTP interceptor az autentikációs tokenhez
import { AuthInterceptor } from './auth/auth.interceptor';


// 🔹 MSAL példány inicializálása
export function MSALInstanceFactory(): PublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.azureAd.clientId_employee, // 🔹 A megfelelő clientId legyen itt!
      authority: environment.azureAd.authority_employee,
      redirectUri: environment.azureAd.redirectUri
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: true
    }
  });
}

// 🔹 MSAL GUARD KONFIGURÁCIÓ
export function MSALGuardConfigFactory() {
  return { interactionType: InteractionType.Redirect };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, // 🔹 Hozzáadva az Angular közös direktíváihoz
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    MsalService,
    MsalGuard,
    AuthService, // 🔹 Hozzáadva
    AuthGuard, // 🔹 Hozzáadva
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, // 🔹 Hozzáadtam saját autentikációs interceptorodat
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
