import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// **we set up routing for all our pages/components we created
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { VisionComponent } from './vision/vision.component';
import { ServiceComponent} from './service/service.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { GalleryComponent }  from './gallery/gallery.component';
// **we create an arrayy of all our componens that we wanna call
// ** this is an array that containers objects inside
export const router: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full'}, 

    { path: 'about-us', component: AboutUsComponent},
    { path: 'service', component: ServiceComponent},
    { path: 'vision', component: VisionComponent},
    { path: 'booking', component: BookingComponent},
    { path: 'contact',component: ContactComponent},
    { path:  'confirmation', component: ConfirmationComponent},
    { path:  'gallery', component: GalleryComponent},
    
];


// ***this is what will cotrol all our routing transactions
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
