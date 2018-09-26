import { Component } from '@angular/core';
import { WorkItemService } from './shared/work-item.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(itemService: WorkItemService) {
		itemService.setItems(2000);
	}
}
