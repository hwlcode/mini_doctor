import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-review-page-one',
    templateUrl: './review-page-one.page.html',
    styleUrls: ['./review-page-one.page.scss'],
})
export class ReviewPageOnePage implements OnInit {

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }

}
