import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { ProfileComponent } from './profile/profile.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    ProfileComponent,
    CalculatorComponent,
    ColorPickerComponent,
    FontSizeEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
