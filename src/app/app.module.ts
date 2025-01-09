
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
