import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDebitCard]'
})
export class DebitCardDirective {

  constructor() { }
@HostListener('input', ['$event'])
onKeyHandler(event : Event){
  let input = event.target as HTMLInputElement;
  let inputValue = input.value.replace(/  /g,'');
  console.log(inputValue);
  
}


}
