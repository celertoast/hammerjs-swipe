import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hammerjs-test';
  public data = [
    {name: 'test', address:'addr'},
    {name: 'test1', address:'addr1'},
    {name: 'test2', address:'addr2'},
    {name: 'test3', address:'addr3'},
    {name: 'test4', address:'addr4'},
    {name: 'test5', address:'addr5'},
    {name: 'test6', address:'addr6'},
    {name: 'test7', address:'addr7'},
    {name: 'test8', address:'addr8'},
    {name: 'test9', address:'addr9'},
    {name: 'test10', address:'addr10'},
    {name: 'test11', address:'addr11'},
    {name: 'test12', address:'addr12'},
    {name: 'test13', address:'addr13'},
    {name: 'test14', address:'addr14'},
    {name: 'test15', address:'addr15'}
  ];

  public data2 = [
    {name: 'd2test', address:'addr'},
    {name: 'd2test1', address:'addr1'},
    {name: 'd2test2', address:'addr2'},
    {name: 'd2test3', address:'addr3'},
    {name: 'd2test4', address:'addr4'},
    {name: 'd2test5', address:'addr5'},
    {name: 'd2test6', address:'addr6'},
    {name: 'd2test7', address:'addr7'},
    {name: 'd2test8', address:'addr8'},
    {name: 'd2test9', address:'addr9'},
    {name: 'd2test10', address:'addr10'},
    {name: 'd2test11', address:'addr11'},
    {name: 'd2test12', address:'addr12'},
    {name: 'd2test13', address:'addr13'},
    {name: 'd2test14', address:'addr14'},
    {name: 'd2test15', address:'addr15'}
  ];

  public swipeup(event: any) {
    console.log(event);
    if (+event.target.id % 10 === 0) {
      this.data = this.data.concat(this.data2);
    }
  }
}
