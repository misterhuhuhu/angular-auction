import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  /*流式编程*/
  searchInput: FormControl = new FormControl();

  constructor() {
    // 订阅流
    this.searchInput.valueChanges.subscribe(value => this.getStockInfo(value));
  }

  /*dom属性绑定*/
  imgUrl = 'https://via.placeholder.com/320x150';

  /*html属性绑定*/
  size = 2;

  /*class属性绑定*/
  usedClass = 'a b c';

  isBig = true;

  divClass: any = {
    a: false,
    b: false,
    c: false,
  };

  divStyle: any = {
    color: 'red',
    background: 'yellow'
  };

  /*双向绑定*/
  name = '双向绑定';


  ngOnInit(): void {
  }

  /*事件绑定*/
  onClick(ev: object): void {
    console.log(ev);
  }

  doOnInput(ev: any): void {
    // dom属性
    // console.log(ev.target.value);
    // html 属性 一直不变 ,只和初始值有关
    // console.log(ev.target.getAttribute('value'));

  }

  doOnInput2(ev: any): void {
    this.name = ev.target.value;
  }

  // 流式编程
  onKeyUp(myField: string): void {
    console.log(myField);
  }

  getStockInfo(myField: string): void {
    console.log(myField);
  }
}
