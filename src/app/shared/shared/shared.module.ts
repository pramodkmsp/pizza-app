import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
