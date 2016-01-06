/// <reference path="../../config/paths.ts" />

import {Component, View} from 'angular2/core';
import {Header} from '../../components/header/header'
import { PATHS } from '../../config/paths'

@Component({
    selector: 'app'
})
@View({
    templateUrl: PATHS.pagesPath + '/app/app.html',
    directives: [Header]
})
export class App {
}
