import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultParentComponent } from './defaultChild/default-parent.component';
import { DefaultSingleComponent } from './defaultSingle/default-single.component';
import { OnPushParentComponent } from './onpushChild/onpush-parent.component';
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
			},
			{
				path: 'child',
				component: DefaultParentComponent
			}
		]
	},
	{
		path: 'onpush',
		children: [
			{
				path: 'single',
				component: OnPushSingleComponent
			},
			{
				path: 'child',
				component: OnPushParentComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
