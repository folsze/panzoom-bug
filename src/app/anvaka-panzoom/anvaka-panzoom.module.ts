import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnvakaPanzoomPageRoutingModule } from './anvaka-panzoom-routing.module';

import { AnvakaPanzoomPage } from './anvaka-panzoom.page';
import {InlineSVGModule} from 'ng-inline-svg-2';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        IonicModule,
        AnvakaPanzoomPageRoutingModule,
        InlineSVGModule
    ],
  declarations: [AnvakaPanzoomPage]
})
export class AnvakaPanzoomPageModule {}
