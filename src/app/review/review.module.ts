import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReviewPage } from './review.page';
import {ReviewPageOnePage} from '../review-page-one/review-page-one.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ReviewPageOnePage],  // 这两个地方都需要引入
  declarations: [ReviewPage, ReviewPageOnePage] // 这两个地方都需要引入
})
export class ReviewPageModule {}
