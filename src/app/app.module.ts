import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Hammer from 'hammerjs';
import { GestureDirective } from './gesture.directive';
export class MyHammerConfig extends HammerGestureConfig {
  override buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-x pan-y",
    });
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
  bootstrap: [AppComponent]
})
export class AppModule { }
