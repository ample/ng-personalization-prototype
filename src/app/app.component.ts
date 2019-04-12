import { Component, ViewChild } from '@angular/core';

import 'crds-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-personalization-prototype';
  contentfulIds = [
    '6tEyX0RFYsWau6ooCiayiW',
    '1Vid9AOKLaCQaygIcY8ygm',
    '5nK0627QNUsKIi04m6s2Is',
    '1BkqyKnA4IqaixrsVy8cBU',
    '5P2DTVqrLJtjbEYdsXlGx4',
    '5Z7xcLSl5vGCxr6AV2H3xr'
  ]
}
