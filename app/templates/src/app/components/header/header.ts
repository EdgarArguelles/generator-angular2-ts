/// <reference path="../../config/paths.ts" />

import {Component, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { PATHS } from '../../config/paths';

@Component({
    selector: 'header',
    viewProviders: [HTTP_PROVIDERS]
})
@View({
    templateUrl: PATHS.buildPath + '/components/header/header.html',
    directives: [NgFor]
})
export class Header {
    names: Array<string>;
    public http: Http;

    constructor(@Inject(Http) http: Http) {
        this.http = http;
    }

    public tryMe() {
        this.http.get('http://www.mocky.io/v2/568ae655140000d0198a1166')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(message => console.log(message) );
    }

    addName(name: string) {
        this.names.push(name);
    }
}
