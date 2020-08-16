
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



@NgModule({
  
  imports: [

    FormsModule,
    HttpModule,
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRoutingModule { }
