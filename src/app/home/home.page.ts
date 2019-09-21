import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

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

    constructor(private router: Router,
                private iab: InAppBrowser) {
    }

    ngOnInit() {
    }

    goAnswer() {
        this.router.navigateByUrl('/answer');
    }

    goUserMessage() {
        this.router.navigateByUrl('/user-message');
    }

    openUrl() {
        const browser = this.iab.create('https://baidu.com/', '_blank', 'location=yes');
        browser.show();
    }

}
