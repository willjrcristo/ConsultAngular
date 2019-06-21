import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConsultsService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  refresh(){
    this.change.emit();
  }
}
