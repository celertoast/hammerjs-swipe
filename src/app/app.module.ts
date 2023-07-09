import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Hammer from 'hammerjs';
import { GestureDirective } from './gesture.directive';
export class MyHammerConfig extends HammerGestureConfig {
  override buildHammer(element: HTMLElement) {
    let options = {};
    const dataAttr: string = element.getAttribute('data-mc-options') || '';
    if (dataAttr !== '') {
      try {
        let parseOptions = JSON.parse(dataAttr);
        options = parseOptions;
      } catch(err) {
        console.error('An error occurred when attempting to parse Hammer.js options: ', err);
      }
    }
    // } else {
    //   options = {
    //     touchAction: "pan-x pan-y",
    //   }
    // }

    let mc = new Hammer(element, options);
    mc.get('swipe').set({
      enable: true,
      direction: Hammer.DIRECTION_ALL
    });
    mc.get('pan').set({
      enable: true,
      direction: Hammer.DIRECTION_ALL
    });
    mc.get('pinch').set({
      enable: false,
    });
    mc.get('rotate').set({
      enable: false,
    });
    mc.get('pan').dropRecognizeWith(mc.get('swipe'));

    return mc
  }
}

@NgModule({
  declarations: [
    AppComponent,
    GestureDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
