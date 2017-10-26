import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurretComponent } from './turret/turret.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { DeathSquareComponent } from './death-square/death-square.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TurretComponent,
    TieFighterComponent,
    DeathSquareComponent
  ]
})

export class InternalDefenseModule { }
