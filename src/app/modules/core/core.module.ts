import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(localeFr);
  }
}
