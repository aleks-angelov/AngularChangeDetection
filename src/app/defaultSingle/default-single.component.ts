import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { Priority, Status, WorkItem } from '../shared/work-item';
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
		this.items = itemService.getItems();
	}
}
