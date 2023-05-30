import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
// primeNg
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import { NavbarComponent } from './navbar/navbar.component';
import { MenuModule } from 'primeng/menu';
@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SlideMenuModule,
    ButtonModule,
    MenubarModule,
    MenuModule

  ],
  exports:[
    SidebarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
