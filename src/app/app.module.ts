import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';



import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { VisionComponent } from './vision/vision.component';
import { ServiceComponent } from './service/service.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    AboutUsComponent,
    ContactComponent,
    VisionComponent,
    ServiceComponent,
    ConfirmationComponent,
    GalleryComponent,
    
  ],
  imports: [
    BrowserModule, routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
