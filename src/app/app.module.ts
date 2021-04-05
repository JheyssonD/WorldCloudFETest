import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { DashboardModule } from './modules/dashboard/dashboard.module';

import { AppRoutingModule } from './app.routing';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		SharedModule,
		
		AppRoutingModule,

		DashboardModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
