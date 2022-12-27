import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertiseRoutingModule } from './expertise-routing.module';
import { ExpertiseComponent } from './expertise/expertise.component';
import { DesktopapplicationsComponent } from './desktopapplications/desktopapplications.component';
import { CloudsolutionsComponent } from './cloudsolutions/cloudsolutions.component';
import { DatascienceandengineeringComponent } from './datascienceandengineering/datascienceandengineering.component';
import { KisoktouchscreenComponent } from './kisoktouchscreen/kisoktouchscreen.component';
import { MobileapplicationsComponent } from './mobileapplications/mobileapplications.component';
import { WebapplicationsComponent } from './webapplications/webapplications.component';



@NgModule({
  declarations: [
    ExpertiseComponent,
    DesktopapplicationsComponent,
    CloudsolutionsComponent,
    DatascienceandengineeringComponent,
    KisoktouchscreenComponent,
    MobileapplicationsComponent,
    WebapplicationsComponent
  ],
  imports: [
    CommonModule,
    ExpertiseRoutingModule,

  ]
})
export class ExpertiseModule { }
