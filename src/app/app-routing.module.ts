import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultSingleComponent } from './defaultSingle/default-single.component';

const routes: Routes = [
	{
		path: 'default',
		children: [
			{
				path: 'single',
				component: DefaultSingleComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
