/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../../../node_modules/zone.js/dist/zone.js.d.ts" />

import { bootstrap }    from '../../../node_modules/@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '../../../node_modules/@angular/http';
import '../../../node_modules/rxjs/Rx';
import { EntryFormComponent } from './time_entries/entryform.component';

bootstrap(EntryFormComponent, [ HTTP_PROVIDERS ]);