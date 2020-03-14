import {Component, ViewChild} from '@angular/core';
import {NgxTypedJsComponent} from '../../projects/ngx-typed-js/src/lib/ngx-typed-js.component';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NgxTypedJsComponent, { static: true }) typed: NgxTypedJsComponent;
  doSmth(): void {
    this.typed.start();
  }
}
