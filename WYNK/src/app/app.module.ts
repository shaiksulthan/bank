import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { DatePipe } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,

} from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';
import { MatRadioModule } from '@angular/material/radio';
import { WebcamModule } from 'ngx-webcam';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { EncrDecrServiceService } from '../app/shared/encr-decr-service.service';
import { AppComponent } from './app.component';
import { CommonService } from './shared/common.service';
import { HeaderComponent } from './shared/header/header.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { HttpClientModule } from '@angular/common/http';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { ModalModule } from "ngx-bootstrap";
import { TestoneComponent } from './Views/testone/testone.component';

import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [

  { path: 'Test', component: TestoneComponent },

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    TestoneComponent
  ],
  imports: [
    AppRoutingModule,
    NgIdleKeepaliveModule.forRoot(),
    ModalModule.forRoot(),
    MomentModule,
    HttpClientModule,
    MatPasswordStrengthModule,
    NgxBarcodeModule,
    ReactiveFormsModule,
    WebcamModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      useHash: true,
    }),
    BsDatepickerModule.forRoot(),
    DropdownModule,
    CheckboxModule,
    AutoCompleteModule,
    TableModule,
    BrowserAnimationsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    A11yModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [CommonService, AuthGuard, DatePipe, EncrDecrServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
