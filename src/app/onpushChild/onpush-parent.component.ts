import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WorkItem } from '../shared/work-item';
import { WorkItemService } from '../shared/work-item.service';

@Component({
	selector: 'onpush-parent',
	templateUrl: 'onpush-parent.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OnPushParentComponent {
	items: WorkItem[];

	constructor(itemService: WorkItemService) {
		this.items = itemService.getItems();
	}
}
