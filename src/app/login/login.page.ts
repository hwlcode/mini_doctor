import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private modalCtrl: ModalController,
                private navCtrl: NavController,
                private storage: Storage) {
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
        this.navCtrl.navigateRoot(['/tabs/profile']);
    }

}
