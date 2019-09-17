import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    slides = [
        'assets/images/banner.png',
        'assets/images/banner.png',
        'assets/images/banner.png',
    ];
    slideOpts = {
        initialSlide: 1,
        speed: 400
    };

    constructor() {
    }

    ngOnInit() {
    }

}
