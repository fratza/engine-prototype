import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsHeadlineComponent } from './components/news-headline/news-headline.component';
import { FallbackImageComponent } from './components/fallback-image/fallback-image.component';
import { QRCodeComponent } from './components/qr-code/qr-code.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsHeadlineComponent,
    FallbackImageComponent,
    QRCodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
