import {NgModule} from '@angular/core';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchPipe } from 'src/app/pipes/search.pipe';

@NgModule({
  declarations: [SearchPipe],
  exports: [
    MatSnackBarModule,
    MatToolbarModule,
    SearchPipe
  ]
})
export class SharedModule {}
