import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef) {
    this.setHeight(170);
    this.setBorder("#f5f5f5");
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#808080');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  }
  setBorder(color: string){
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }
}
