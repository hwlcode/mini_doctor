import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
})
export class AnswerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goDetail(id) {
    this.router.navigateByUrl('/detail', {queryParams: id});
  }

}
