import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor() { }
  @HostBinding('style.box-shadow') boxshadow! : string;
  @HostListener('input', ['$event'])
  onInputHandler(event: Event){
    let input = event.target as HTMLInputElement;
    // console.log(input.value);
    let inputVal:string = input.value.replace(/\s+/g, '');
    console.log(inputVal);
    // input.value = inputVal;
    if(inputVal.length > 16){
      inputVal = inputVal.substring(0, 16);
    }
    input.value =inputVal;
    let numArr : string[] =[];
    for(let i=0; i < inputVal.length; i += 4){
      numArr.push(inputVal.substring(i, i+4));
    }
    console.log(numArr);
    input.value = numArr.join(' ');
    this.boxshadow='';
    if(/[^\d]+/.test(inputVal)){
      this.boxshadow = '0 0 6px 4px rgba(245,78,66,0.5)';
    }
  }
}
