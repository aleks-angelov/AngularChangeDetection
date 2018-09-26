import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultChildComponent } from './defaultChild/default-child.component';
import { DefaultParentComponent } from './defaultChild/default-parent.component';
import { DefaultSingleComponent } from './defaultSingle/default-single.component';
import { OnPushChildComponent } from './onpushChild/onpush-child.component';
import { OnPushParentComponent } from './onpushChild/onpush-parent.component';
import { OnPushSingleComponent } from './onpushSingle/onpush-single.component';
import { EnumPipe } from './shared/enum.pipe';
import { WorkItemService } from './shared/work-item.service';

@NgModule({
	declarations: [
		AppComponent,
		DefaultChildComponent,
		DefaultParentComponent,
		DefaultSingleComponent,
		OnPushChildComponent,
		OnPushParentComponent,
		OnPushSingleComponent,
		EnumPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [WorkItemService],
	bootstrap: [AppComponent],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class AppModule { }
