import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2'
})
export class Pipe2Pipe implements PipeTransform {

  transform(value: any, wordCount: number): any {
    const str = value.split(' ');
    let strValue = '';

    if ( str.length <= wordCount ) {
      return value;
    } else if ( str.length > wordCount ) {
      for (let i = 0; i < wordCount; i++) {
        strValue += str[i] + ' ';
      }
      return strValue;
    }
  }

}
