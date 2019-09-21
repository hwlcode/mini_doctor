import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private modalCtrl: ModalController,
                private storage: Storage,
                private router: Router) {
    }

    ngOnInit() {
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }

    async login() {
        await this.storage.set('isLogin', true);
        this.modalCtrl.dismiss({
            dismissed: true
        });
        this.router.navigateByUrl('/profile');
    }

}
