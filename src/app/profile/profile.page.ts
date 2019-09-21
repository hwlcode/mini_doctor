import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ModalController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    isLogin = false;

    constructor(private router: Router,
                private storage: Storage,
                private modalController: ModalController) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.storage.get('isLogin').then(
            val => {
                if (val == null) {
                    this.router.navigateByUrl('/');
                    this.checkLogin();
                }
            }
        );
    }

    async checkLogin() {
        if (!this.isLogin) {
            const modal = await this.modalController.create({
                component: LoginPage,
            });
            return await modal.present();
        }
    }
}
