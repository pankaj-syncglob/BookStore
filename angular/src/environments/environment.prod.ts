import { Environment } from '@abp/ng.core';

const baseUrl = 'http://35.91.120.168'; // Your EC2 Public IP

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://35.91.120.168:5000', // API URL
    redirectUri: baseUrl, 
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false // Change to true if using HTTPS
  },
  apis: {
    default: {
      url: 'https://35.91.120.168:5000', // API URL
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
