import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-old-project';
  msg = 'Hello, Welcome';
  num1 = 5;
  num2 = 10;
  sum = this.num1 + this.num2;
  staicInput:string = '';
  dynamicInput:string = '';
  inputValue:string = '';
  dynamicValue:string = '';

  counterValue = 0;

  inpulVal = 'Hello';

  isDisabled = false;
  imgSrc = './public/favicon.ico'

  display(name: String) {
    alert(name + 'Button is clicked')
  }

  counter = 0;
  incr() {
    this.counter++;
  }

  onKeyDown() {
    console.log('Keyboard event is pressed')
  }

  onFocus() {
    console.log('Focus event is triggered')
  }

  isShift(event:any) {
    if(event.shiftKey && event.key === 'Y') {
    console.log('Shift + Y is pressed', event)
    }
  }

  show() {
    this.dynamicValue = this.inputValue;
  }


  counterMethod(type:string) {
    type==='incr'?this.counterValue++ : this.counterValue--;
  }
}
