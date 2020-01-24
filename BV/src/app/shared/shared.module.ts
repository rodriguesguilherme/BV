import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    declarations: [
        DialogComponent
    ],
    exports: [
        DialogComponent
    ]
})

export class SharedModule {}