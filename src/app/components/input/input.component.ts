import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() textToShow: string;
  @Input() extraClassNames: string;

  constructor() {
  }

  handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add('active');
  }

  handleBlur = (e) => {
    const target = e.target;
    if (!target.value) {
      target.parentNode.classList.remove('active');
    }
  }

  bindEvents = (element) => {
    const floatField = element.querySelector('input');
    floatField.addEventListener('focus', this.handleFocus);
    floatField.addEventListener('blur', this.handleBlur);
  }

  ngOnInit() {
    const floatContainers = document.querySelectorAll('.inputComponent');
    floatContainers.forEach((element) => {
      if (element.querySelector('input').value) {
          element.classList.add('active');
      }
      this.bindEvents(element);
    });
  }

}
