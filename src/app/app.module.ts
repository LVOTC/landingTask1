import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import 'hammerjs';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatButtonToggleModule, } from '@angular/material';
import { MainComponent } from './main/main.component';
import { ModalService } from './modal/modal.service';
import { NavbarComponent } from './navbar/navbar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database'
import { environment } from '../environments/environment';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ModalConfirmComponent } from './modal/modal-confirm/modal-confirm.component';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    ModalComponent,
    ModalConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ModalComponent, ModalConfirmComponent],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
