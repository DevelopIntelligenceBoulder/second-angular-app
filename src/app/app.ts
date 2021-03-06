//our root app component
import {Component, View} from 'angular2/angular2'
import {StockSearch} from './components/stockSearch';

@Component({
  selector: 'app'
})
@View({
  template: `
    <header>
      <h2>Second Angular 2 App</h2>
    </header>
    <stock-search></stock-search>
  `,
  directives: [StockSearch]
})
export class AppComponent {}
