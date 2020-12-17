import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-bind',
    templateUrl: './bind.component.html',
    styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

    constructor() {
    }

    /*dom属性绑定*/
    imgUrl = 'https://via.placeholder.com/320x150';

    ngOnInit(): void {
    }

    /*事件绑定*/
    onClick(ev: object): void {
        console.log(ev);
    }

    doOnInput(ev: any): void {
        // dom属性
        console.log(ev.target.value);
        // html 属性 一直不变 ,只和初始值有关
        console.log(ev.target.getAttribute('value'));

    }
}
