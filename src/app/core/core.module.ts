import { NgModule } from '@angular/core';

import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent],
    imports: [RouterModule, CommonModule]
})


export class CoreModule {}
