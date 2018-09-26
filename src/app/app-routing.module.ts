import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultSingleComponent } from './defaultSingle/default-single.component';
import { OnPushSingleComponent } from './onpushSingle/onpush-single.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'default/single'
	},
	{
		path: 'default',
		children: [
			{
				path: 'single',
				component: DefaultSingleComponent
			}
		]
	},
	{
		path: 'onpush',
		children: [
			{
				path: 'single',
				component: OnPushSingleComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
