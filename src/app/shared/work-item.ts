export class WorkItem {
	id: number;
	type: Type;
	status: Status;
	priority: Priority;

	location?: string;
	subject?: string;
	description?: string;

	isEditMode: boolean;
	isExpanded: boolean;

	projectId?: number;
	project?: Project;

	assignedToUserId: number | null;
	assignedToUser: User | null;
}

export enum Type {
	feature = 1,
	issue = 2,
	task = 3,
	bug = 4,
}

export enum Status {
	new = 1,
	inProgress = 2,
	inTest = 3,
	closed = 4,
}

export enum Priority {
	urgent = 1,
	high = 2,
	normal = 3,
	low = 4,
}

export class Project {
	id: number;
	name: string;
}

export class User {
	id: number;
	fullName: string;
	password: string;
	userName: string;

	isEditMode: boolean;
	isExpanded: boolean;

	isActive: boolean;
}
