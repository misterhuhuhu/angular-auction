import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-seller-info',
    templateUrl: './seller-info.component.html',
    styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {

    @Input()
    sellerId: number;

    constructor(private routrInfo: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.sellerId = this.routrInfo.snapshot.params.id;
    }

}
