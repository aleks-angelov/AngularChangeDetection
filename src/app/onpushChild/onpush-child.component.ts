import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Priority, Status, Type, WorkItem } from '../shared/work-item';

@Component({
	selector: '[onpush-child]',
	templateUrl: 'onpush-child.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OnPushChildComponent {
	@Input() model: WorkItem;

	typeType = Type;
	statusType = Status;
	priorityType = Priority;
}
