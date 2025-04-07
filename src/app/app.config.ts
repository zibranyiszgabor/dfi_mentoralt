import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MsalGuard,
  MsalInterceptor,
  MsalModule,
  MsalService,
  
} from '@azure/msal-angular';
import {
  BrowserCacheLocation,
  InteractionType,
  PublicClientApplication,
} from '@azure/msal-browser';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { AuthGuard } from './auth/auth.guard';
// 🔹 Saját HTTP interceptor az autentikációs tokenhez
import { AuthInterceptor } from './auth/auth.interceptor';
// 🔹 Saját AuthService és AuthGuard
import { AuthService } from './auth/auth.service';

// 🔹 MSAL GUARD KONFIGURÁCIÓ
export function MSALGuardConfigFactory() {
  return { interactionType: InteractionType.Redirect };
}

export function MSALInstanceFactory(): PublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.azureAd.clientId_student, // 🔹 A megfelelő clientId legyen itt!
      authority: environment.azureAd.authority_student,
      redirectUri: environment.azureAd.redirectUri,
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: true,
    },
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    importProvidersFrom(
      MsalModule,
      MsalGuard,
      AuthGuard // 🔹 Hozzáadva
    ),
    MsalService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, // 🔹 Hozzáadtam saját autentikációs interceptorodat
      multi: true,
    },
  ],
};
