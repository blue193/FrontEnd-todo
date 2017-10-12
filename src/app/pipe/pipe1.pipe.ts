import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {
  titleCase(str) {
    const splitStr = str.toLowerCase().replace(/  +/g, ' ').split(' ');
    // console.log('split() => ', splitStr);
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      str = splitStr.join(' ');
    }
    return str;
  }
  transform(value: any, args?: any): any {
    return this.titleCase(value);
  }

}
