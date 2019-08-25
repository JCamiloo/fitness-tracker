import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatSidenavModule,
         MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, 
         MatToolbarModule, MatListModule
} from "@angular/material"

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ]
})
export class MaterialModule {}