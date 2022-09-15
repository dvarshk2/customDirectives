import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomDirective1Component } from './custom-directive1/custom-directive1.component';
import { BgChangeDirectives } from './shared/directives/bgChange.directives';

import { FontDitectiveDirective } from './shared/directives/font-ditective.directive';
import { InoutFormatDirective } from './shared/directives/inout-format.directive';
import { BetterBgChangeDirective } from './shared/directives/better-bg-change.directive';
import { InputDirective } from './shared/directives/input.directive';
import { CreditCardDirective } from './shared/directives/credit-card.directive';
import { DebitCardDirective } from './shared/directives/debit-card.directive';
import { Custom2Component } from './custom2/custom2.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective1Component,
    BgChangeDirectives,
    FontDitectiveDirective,
    InoutFormatDirective,
    BetterBgChangeDirective,
    InputDirective,
    CreditCardDirective,
    DebitCardDirective,
    Custom2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
