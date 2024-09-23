import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keepOneDigit',
    standalone: true,
})
export class KeepOneDigitPipe implements PipeTransform {

    transform(value: number): string {
        return Math.floor(value * 10) / 10 + ''; 
    }

}
