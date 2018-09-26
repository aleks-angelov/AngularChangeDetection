import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enum' })
export class EnumPipe implements PipeTransform {
	transform(value: any, type: any): any {
		if (!value || !type) { return value; }
		return type[value];
	}
}
