import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Priority, Status, Type, WorkItem } from '../shared/work-item';
import { WorkItemService } from '../shared/work-item.service';

@Component({
	selector: 'onpush-single',
	templateUrl: 'onpush-single.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OnPushSingleComponent {
	items: WorkItem[];

	typeType = Type;
	statusType = Status;
	priorityType = Priority;

	constructor(itemService: WorkItemService) {
		this.items = itemService.getItems();
	}
}
