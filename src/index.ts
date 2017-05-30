import { NgModule } from '@angular/core';

import { AngularDragonDirective } from './directive/angular-dragon.directive';

export * from './directive/angular-dragon.directive';

@NgModule({
  declarations: [
    AngularDragon
  ],
  exports: [
    AngularDragonDirective
  ]
})
export class AngularDragonModule {
}
