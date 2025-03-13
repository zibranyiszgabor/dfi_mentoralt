export const environment = {
  production: false,
  azureAd: {
    instance: 'https://login.microsoftonline.com/',
    tenantId_employee: 'bf311f86-40ef-4db9-9652-abc7ed69046c',
    tenantId_student: '00e57c4a-27e7-4b4c-af92-e07e32fd9612',
    clientId: 'AZURE_AD_CLIENT_ID', // 🔹 Az Azure AD Client ID-d
    clientId_employee: '4660acfe-ecc3-45e5-ad9c-3bc57e3b92fd',
    clientId_student: '5a68a69c-7d32-4322-b4f2-f8e2cf36738',
    authority_employee: 'https://login.microsoftonline.com/bf311f86-40ef-4db9-9652-abc7ed69046c',
    authority_student: 'https://login.microsoftonline.com/00e57c4a-27e7-4b4c-af92-e07e32fd9612',
    defaultAuthority: 'https://login.microsoftonline.com/common', // 🔹 Ez lehet alapértelmezett
    redirectUri: 'https://localhost:4200',
    scopes: ['User.Read']
  },
  apiBaseUrl: 'https://localhost:3000' // 🔹 Backend API URL-je
};
