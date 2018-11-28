import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [SigninComponent],
    imports: [RouterModule, CommonModule],
    exports: [SigninComponent]
})

export class LoginModule { }
