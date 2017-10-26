import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { DeathSquareComponent } from './death-square/death-square.component';
// import { TurretComponent } from './turret/turret.component';
// import { TieFighterComponent } from './tie-fighter/tie-fighter.component';

import { InternalDefenseModule } from './internal-defenses/internal-defenses.module';

@NgModule({
  declarations: [
    AppComponent,
    // DeathSquareComponent,
    // TurretComponent,
    // TieFighterComponent
  ],
  imports: [
    BrowserModule,
    InternalDefenseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
