import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent,
        children: [
          {
            path: 'friend',
            outlet: 'sidebarOutlet',
            component: SidebarComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'sidebar',
    outlet: 'sidebarOutlet',
    component: SidebarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
