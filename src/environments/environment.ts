// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {environmentInterface} from '../app/interfaces/environments.interface';

export const environment: environmentInterface = {
    production: false,
    log: true,
    lang: 'es',
    apiUrl: 'http://api.finance.local',
    grant_type: "password",
    client_id: '1_320ge9ybgxusww0444g0coco40gckw4wsgoocgoocwkkoc08s4',
    client_secret: '2s0f2apyzzy8o44wk084o04w4ko4gw08sw8koswkw40g4wks40'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
