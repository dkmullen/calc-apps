import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';


import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { PageoneComponent } from './pages/run-calc/pageone.component';
import { RunLogComponent } from './pages/run-log/run-log.component';
import { BmiCalcComponent } from './pages/bmi-calc/bmi-calc.component';
import { CalcComponent } from './pages/calc/calc.component';

const appRoutes: Routes = [
  { path: '', component: PageoneComponent },
  { path: 'calculator', component: CalcComponent },
  { path: 'run-log', component: RunLogComponent },
  { path: 'bmi-calculator', component: BmiCalcComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    SidenavComponent,
    TopbarComponent,
    ButtonBarComponent,
    CalcComponent,
    RunLogComponent,
    BmiCalcComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
