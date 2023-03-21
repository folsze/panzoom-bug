import {Component, ViewEncapsulation} from '@angular/core';
import panzoom from 'panzoom';

@Component({
  selector: 'app-anvaka-panzoom',
  templateUrl: './anvaka-panzoom.page.html',
  styleUrls: ['./anvaka-panzoom.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnvakaPanzoomPage {

  constructor() { }

  ionViewDidEnter() {
    let element: SVGElement = document.querySelector('svg') as SVGElement;
    panzoom(element!, {
      maxZoom: 10,
      minZoom: 1,
      bounds: true,
      boundsPadding: 1
    });
  }

}
