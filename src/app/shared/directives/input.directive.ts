import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective implements OnInit {
  // @Input() format! : string;
  @Input('appInput') formatter! : string;
  constructor(private eleRef: ElementRef) { }
  ngOnInit(): void {
   this.eleRef.nativeElement.style.color = 'brown';
   this.eleRef.nativeElement.style.fontSize = '24px';
   this.eleRef.nativeElement.style.fontStyle = 'italic';
  }

  @HostListener('blur') onBlur(){
    // console.log(this.eleRef.nativeElement.value);
    let inputValue : string = this.eleRef.nativeElement.value;
    if(this.formatter === 'lowercase'){
      this.eleRef.nativeElement.value = inputValue.toLowerCase();
      console.log(inputValue.toLowerCase());
    }else{
      this.eleRef.nativeElement.value = inputValue.toUpperCase();
      console.log(inputValue.toUpperCase());
    }
    
    
  }
}
