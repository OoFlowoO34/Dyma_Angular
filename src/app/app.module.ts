import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NouveauComponent } from './nouveau/nouveau.component';

@NgModule({
  declarations: [AppComponent, NouveauComponent],
  imports: [BrowserModule, FormsModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
