import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultSingleComponent } from './defaultSingle/default-single.component';
import { EnumPipe } from './shared/enum.pipe';
import { WorkItemService } from './shared/work-item.service';

@NgModule({
	declarations: [
		AppComponent,
		DefaultSingleComponent,
		EnumPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [WorkItemService],
	bootstrap: [AppComponent]
})
export class AppModule { }
