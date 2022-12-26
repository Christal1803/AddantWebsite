import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudsolutionsComponent } from './cloudsolutions/cloudsolutions.component';
import { DatascienceandengineeringComponent } from './datascienceandengineering/datascienceandengineering.component';
import { DesktopapplicationsComponent } from './desktopapplications/desktopapplications.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { KisoktouchscreenComponent } from './kisoktouchscreen/kisoktouchscreen.component';
import { MobileapplicationsComponent } from './mobileapplications/mobileapplications.component';
import { WebapplicationsComponent } from './webapplications/webapplications.component';

const routes: Routes = [
  { path: '', component: ExpertiseComponent },
  { path: 'cloudsolutions', component: CloudsolutionsComponent },
  { path: 'datascienceandengineering', component: DatascienceandengineeringComponent },
  { path: 'desktopapplications', component: DesktopapplicationsComponent },
  { path: 'kisoktouchscreen', component: KisoktouchscreenComponent },
  { path: 'mobileapplications', component: MobileapplicationsComponent },
  { path: 'webapplications', component: WebapplicationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertiseRoutingModule { }
