import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Priority, Status, Type, WorkItem } from '../shared/work-item';
import { WorkItemService } from '../shared/work-item.service';

@Component({
	selector: 'default-single',
	templateUrl: 'default-single.component.html',
	changeDetection: ChangeDetectionStrategy.Default
})

export class DefaultSingleComponent {
	items: WorkItem[];

	typeType = Type;
	statusType = Status;
	priorityType = Priority;

	constructor(itemService: WorkItemService) {
		itemService.getItems(newItems => this.items = newItems);
	}
}
