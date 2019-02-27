import { NgModule } from '@angular/core';

import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './header/menu/menu.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
    
    imports: [RouterModule, CommonModule,HeaderModule, FooterModule],
    exports:[HeaderModule,FooterModule]
    
})


export class CoreModule {}
