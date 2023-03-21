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
      boundsPadding: 1,
      onTouch: function(e) { // comment those three lines to make the bug disappear/appear
        return false; // tells the library to not preventDefault.
      }
    });

    this.addClickListeners();
  }

  public addClickListeners() {
    const elements = Array.from(document.getElementsByClassName('clickable'));
    elements.forEach(element => {
      element.addEventListener('click', () => console.log('CLICK REGISTERED'));
    });
  }

}
