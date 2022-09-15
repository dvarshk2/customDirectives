import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterBgChange]'
})
export class BetterBgChangeDirective implements OnInit{

  constructor(private renderrer: Renderer2, private eleRef : ElementRef) { }
  ngOnInit(): void {
    // this.renderrer.setStyle(this.eleRef.nativeElement, "backgroundColor", "teal");
    this.renderrer.addClass(this.eleRef.nativeElement, "alert-success");
  }
  // @HostListener('mouseenter') onMouseEnter(){
  //   this.renderrer.setStyle(this.eleRef.nativeElement, 'background-color', 'skyblue')
  // }
  // @HostListener('mouseleave') onMouseLeave(){
  //   this.renderrer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
  // }
  @HostListener('mouseover') onMouseOver(){
    this.renderrer.setStyle(this.eleRef.nativeElement, 'background-color', 'skyblue')
  }
  @HostListener('mouseout') onMouseOut(){
    this.renderrer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
  }
}
