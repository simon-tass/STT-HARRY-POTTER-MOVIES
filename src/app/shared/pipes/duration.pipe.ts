import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(totalMinutes: string = ''): string {
    const hours = Math.floor(parseInt(totalMinutes) / 60);
    const minutes = parseInt(totalMinutes) % 60;

    return `${hours}h ${minutes}min`;
  }

}
