import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { IconsComponent } from '../icons/icons.component';
import { TypographyComponent } from '../typography/typography.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { NotificationComponent } from '../notifications/notification.component';
import { UserlistComponent } from '../userlist/userlist.component';
import { ParentTestingComponent } from '../parentTesting/parentTesting.component';

export const LayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'parentTesting', component: ParentTestingComponent }
];