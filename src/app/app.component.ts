import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hammerjs-test';
  public data = [
    {name: 'test1', address:'addr1'},
    {name: 'test2', address:'addr2'},
    {name: 'test3', address:'addr3'},
    {name: 'test4', address:'addr4'},
    {name: 'test5', address:'addr5'},
    {name: 'test6', address:'addr6'},
    {name: 'test7', address:'addr7'},
    {name: 'test8', address:'addr8'},
    {name: 'test9', address:'addr9'},
    {name: 'test10', address:'addr10'}
  ];

  public data2 = [
    {name: 'd2test1', address:'addr1'},
    {name: 'd2test2', address:'addr2'},
    {name: 'd2test3', address:'addr3'},
    {name: 'd2test4', address:'addr4'},
    {name: 'd2test5', address:'addr5'},
    {name: 'd2test6', address:'addr6'},
    {name: 'd2test7', address:'addr7'},
    {name: 'd2test8', address:'addr8'},
    {name: 'd2test9', address:'addr9'},
    {name: 'd2test10', address:'addr10'}
  ];

  public swipeup(event: any) {
    alert(event);
    if (+event.target.id % 10 === 0) {
      this.data = this.data.concat(this.data2);
    }
  }

  public swipeleft(event: any) {
    alert(event);
  }

  public panup(event: any) {
    if (+event.target.id % 10 === 0) {
      this.swipeup(event)
    }
  }
  public doubleTap(event: any) {
    console.log(event);
  }
  public tripleTap(event: any) {
    console.log(event);
  }

}
