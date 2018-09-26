import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Priority, Status, Type, WorkItem } from '../shared/work-item';

@Component({
	selector: 'default-child',
	templateUrl: 'default-child.component.html',
	changeDetection: ChangeDetectionStrategy.Default
})

export class DefaultChildComponent {
	@Input() model: WorkItem;

	typeType = Type;
	statusType = Status;
	priorityType = Priority;
}
