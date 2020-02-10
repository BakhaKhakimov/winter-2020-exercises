import './contact.css';

export class Contact {
  constructor(gender, name, number) {
    this.gender = gender;
    this.name = name;
    this.number = number;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'contact';
    this.element.innerHTML = (
      `
      <div class="contact__avatar contact__avatar--${this.gender}"></div>
      <div class="contact__body">
        <div class="contact__name">
          ${this.name}
        </div>
        <div class="contact__phone">
          ${this.number}
        </div>
      </div>
      <button class="contact__callbtn"></button>
      `
    );

    return this.element;
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }
}