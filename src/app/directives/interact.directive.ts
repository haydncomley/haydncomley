import { EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[interaction]'
})
export class InteractDirective {

    @Output() interaction = new EventEmitter<any>();

    constructor(element: ElementRef<HTMLElement>) { }

    @HostListener('click', ['$event'])
    onClick(e: MouseEvent) {
        this.doInteraction(e, true);
    }

    @HostListener('keydown', ['$event'])
    onEnter(e: KeyboardEvent) {
        if (e.key !== 'Enter') return;
        this.doInteraction(e);

    }

    doInteraction(event: any, removeFocus?: boolean) {
        if (document.activeElement && document.activeElement != document.body && removeFocus) (document.activeElement as HTMLElement).blur();
        this.interaction.emit(event)
    }

}