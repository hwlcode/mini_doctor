import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-health',
    templateUrl: './health.page.html',
    styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    segmentChanged(e) {

    }

    goDetail(id) {
        this.router.navigateByUrl('/detail', {queryParams: id});
    }

}
