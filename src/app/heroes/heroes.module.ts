import { ListadoComponent } from './listado/listado.component';
import { HeoreComponent } from './heroe/heroe.component';
import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeoreComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class HeroesModule {

}
