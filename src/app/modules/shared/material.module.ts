import { NgModule } from '@angular/core';

import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDividerModule} from "@angular/material/divider";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatChipsModule} from "@angular/material/chips";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTreeModule} from "@angular/material/tree";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';


const MaterialComponents = [
  MatSidenavModule,
  MatTableModule,
  MatDialogModule,
  MatButtonModule,
  MatNativeDateModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTooltipModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatSortModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatChipsModule,
  MatCheckboxModule,
  MatMenuModule,
  MatFormFieldModule,
  MatCardModule,
  MatSnackBarModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatDatepickerModule,
  ScrollingModule,
  MatTabsModule,
  MatToolbarModule,
  MatTreeModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonToggleModule,
  MatBadgeModule
]

@NgModule({
  exports: [MaterialComponents]
})
export class MaterialModule {}