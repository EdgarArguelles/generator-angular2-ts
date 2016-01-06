/// <reference path="./pages/app/app.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

import {App} from './pages/app/app';

bootstrap(App,  [HTTP_PROVIDERS]);
