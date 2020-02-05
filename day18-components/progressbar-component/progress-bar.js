class ProgressBar {
  constructor(value) {
    this.value = value;
  }

  increment() {
    if (this.value < 10) {
      this.value += 1;
      this.update();
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.update();
    }
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'progress-bar';
    this.element.innerHTML = (
      `<div id="label" class="label">
        <span id="counter"></span>/<span id="maximum">10</span>
       </div>
       <div class="progress">
        <div id="minus" class="btn-minus"></div>
        <div class="bar">
          <div id="knob" class="knob"></div>
        </div>
        <div id="plus" class="btn-plus"></div>
       </div>`
    );

    const btnPlus = this.element.querySelector('#plus');
    btnPlus.addEventListener('click', () => this.increment());
  
    const btnMinus = this.element.querySelector('#minus');
    btnMinus.addEventListener('click', () => this.decrement());

    return this.element;
  }

  update() {
    const counterElm = this.element.querySelector('#counter');
    counterElm.textContent = this.value;
    const knobElm = this.element.querySelector('#knob');
    knobElm.style.width = `${this.value * 10}%`;
  }

  mount(parent) {
    this.render();
    this.update();
    parent.appendChild(this.element);
  }
};