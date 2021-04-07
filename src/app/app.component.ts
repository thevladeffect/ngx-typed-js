import {Component, ViewChild} from '@angular/core';
import {NgxTypedJsComponent} from '../../projects/ngx-typed-js/src/lib/ngx-typed-js.component';
import {interval} from 'rxjs';
import {map, reduce, scan, tap} from 'rxjs/operators';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NgxTypedJsComponent, { static: true }) typed: NgxTypedJsComponent;

  text$ = interval(3000).pipe(
    scan((acc, value) => [...acc, value], []), map(items => items.map(item => `item${item}`)));
}
