import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'person',
  standalone: true
})
export class PersonPipe implements PipeTransform {

  transform(persons: string[] | undefined): unknown {
    let result = '';
    if(persons && (persons.length > 0)) {
      persons.forEach(person => {
        result += person + ', '
      });
      result = result.substring(0, result.length - 2);

    }

    return result;
  }

}
