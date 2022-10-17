// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: "http://localhost:8082/",
  //apiURL: "https://fitosmovies-movie.herokuapp.com/",

  firebaseConfig: {
    apiKey: "AIzaSyAeeP7QjftSLWdOBm6sC21txzexxOUeX_E",
    authDomain: "fitosmoviesdirector.firebaseapp.com",
    projectId: "fitosmoviesdirector",
    storageBucket: "fitosmoviesdirector.appspot.com",
    messagingSenderId: "580950419429",
    appId: "1:580950419429:web:6153ddd1944f5f9e7b310c",
    measurementId: "G-ZBDP6JF8ET"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
