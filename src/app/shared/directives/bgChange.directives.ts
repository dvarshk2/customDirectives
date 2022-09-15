import { Directive, ElementRef, OnInit } from "@angular/core";



@Directive({
    selector: '[bgChange]'
})
export class BgChangeDirectives implements OnInit{

    constructor(public elementRef : ElementRef){

    }
    ngOnInit(): void {
        // this.elementRef.nativeElement.style.backgroundColor = 'orange';
        this.elementRef.nativeElement.classList.add('alert');
        this.elementRef.nativeElement.classList.add('alert-success');
    }
}