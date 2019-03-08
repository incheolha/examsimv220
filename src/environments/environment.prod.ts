
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular-6-social-login';

export const environment = {
  production: true
};

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('506098316522281')
      },
      {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('97692696799-l8i6pfujb3fnh1at7bgch6t48pdh90fo.apps.googleusercontent.com')
      }
    ]
  );
  return config;
}
