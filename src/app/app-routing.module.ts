import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
const appRoutes: Routes = [
  {
    path: 'guide',
    component: GuideComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  // {
  //   path: '**',
  //   component: AppComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
