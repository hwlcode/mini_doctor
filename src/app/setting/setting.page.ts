import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.page.html',
    styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

    constructor(private storage: Storage,
                private router: Router) {
    }

    ngOnInit() {
    }

    logout() {
        this.storage.remove('isLogin');
        this.router.navigateByUrl('/');
    }

}
