import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WorkItem } from '../shared/work-item';
import { WorkItemService } from '../shared/work-item.service';

@Component({
	selector: 'default-parent',
	templateUrl: 'default-parent.component.html',
	changeDetection: ChangeDetectionStrategy.Default
})

export class DefaultParentComponent {
	items: WorkItem[];

	constructor(itemService: WorkItemService) {
		this.items = itemService.getItems();
	}
}
