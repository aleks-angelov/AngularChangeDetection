import { Component } from '@angular/core';
import { WorkItemService } from './shared/work-item.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	readonly currentYear: number;
	itemCount: number;

	constructor(private itemService: WorkItemService) {
		this.currentYear = new Date().getUTCFullYear();
		this.itemCount = 1000;
		this.setCount();
	}

	setCount(): void {
		this.itemService.setCount(this.itemCount);
	}
}
