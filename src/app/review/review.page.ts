import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ReviewPageOnePage} from '../review-page-one/review-page-one.page';
import {Router} from '@angular/router';

@Component({
    selector: 'app-review',
    templateUrl: './review.page.html',
    styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
    current = 0;
    total = 40;

    constructor(private modalController: ModalController, private router: Router) {
    }

    ngOnInit() {
    }

    selectedStep(curr) {
        this.current = curr;
    }

    async showBichao() {
        const modal = await this.modalController.create({
            component: ReviewPageOnePage,
            cssClass: 'bichao-page'
        });
        return await modal.present();
    }

    goHome() {
        this.router.navigateByUrl('/');
        this.current = 0;
    }

}
