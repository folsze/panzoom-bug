import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import Panzoom from '@panzoom/panzoom';

@Component({
  selector: 'app-panzoom',
  templateUrl: './panzoom.page.html',
  styleUrls: ['./panzoom.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanzoomPage implements OnInit {

  private panzoom: any;

  constructor() { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    const elem = document.getElementById('panzoom-element');
    // @ts-ignore
    this.panzoom = Panzoom(elem, {
      minScale: 1,
      maxScale: 10,
      contain: 'outside',
    });
  }

}
