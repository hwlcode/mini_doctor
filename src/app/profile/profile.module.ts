import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ProfilePage} from './profile.page';
import {LoginPage} from '../login/login.page';

const routes: Routes = [
    {path: '', component: ProfilePage},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    entryComponents: [LoginPage],
    declarations: [ProfilePage, LoginPage]
})
export class ProfilePageModule {
}
