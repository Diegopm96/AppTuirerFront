import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
// primeNg
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SlideMenuModule,
    ButtonModule,
    MenubarModule

  ],
  exports:[
    SidebarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
