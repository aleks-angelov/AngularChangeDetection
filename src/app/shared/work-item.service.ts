import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Project, User, WorkItem } from './work-item';

@Injectable()
export class WorkItemService {
	private readonly $itemCount: Subject<number>;
	private readonly $workItems: BehaviorSubject<WorkItem[]>;

	constructor() {
		this.$itemCount = new Subject<number>();
		this.$workItems = new BehaviorSubject<WorkItem[]>([]);
		this.$itemCount.subscribe(newCount => this.setItems(newCount));
	}

	setCount(newCount: number): void {
		this.$itemCount.next(newCount);
	}


	getItems(next: (newItems: WorkItem[]) => void): Subscription {
		return this.$workItems.subscribe(next);
	}

	private setItems(count: number): void {
		const workItems: WorkItem[] = [];

		for (let i = 1; i <= count; i++) {
			const newItem = new WorkItem();

			newItem.id = i;
			newItem.type = Math.floor((Math.random() * 4) + 1);
			newItem.status = Math.floor((Math.random() * 4) + 1);
			newItem.priority = Math.floor((Math.random() * 4) + 1);
			newItem.location = `Location_${i}`;
			newItem.subject = `Subject_${i}`;
			newItem.description = `Description_${i}`;
			newItem.isEditMode = false;
			newItem.isExpanded = true;

			const newProject = new Project();
			newProject.id = i;
			newProject.name = `Project_${i}`;
			newItem.projectId = newProject.id;
			newItem.project = newProject;

			const newUser = new User();
			newUser.id = i;
			newUser.fullName = `User_${i}`;
			newUser.password = 'password';
			newUser.userName = `user${i}`;
			newUser.isEditMode = false;
			newUser.isExpanded = false;
			newUser.isActive = true;
			newItem.assignedToUserId = newUser.id;
			newItem.assignedToUser = newUser;

			workItems.push(newItem);
		}

		this.$workItems.next(workItems);
	}
}
