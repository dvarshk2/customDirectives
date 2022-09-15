import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInoutFormat]'
})
export class InoutFormatDirective implements OnInit{
  // @Input('') format! : string;
 
  constructor(private eleRef : ElementRef) { }
  ngOnInit(): void {
  }
  @HostListener('blur') onBlur(){
    console.log(this.eleRef.nativeElement.value);
    let inputVal : string = this.eleRef.nativeElement.value;
    if(inputVal === inputVal.toUpperCase()){
    this.eleRef.nativeElement.value = inputVal.toLowerCase();
    }else if(inputVal === inputVal.toLowerCase()){
      this.eleRef.nativeElement.value = inputVal.toUpperCase();
    }else{
      this.eleRef.nativeElement.value = inputVal.toUpperCase();
    }
  }
}
