export class Alert{
    constructor(text,color,selector){
        this.text = text;
        this.color = color;
        this.selector = selector;
    }
    showAlert(){
    const container = document.querySelector(this.selector);
    const alert= document.createElement('div');
    alert.style.display = "flex"
    alert.innerHTML = this.text
    alert.style.color = this.color
    setTimeout(() => {
      alert.style.display = "none"
    }, 3000);
    container.appendChild(alert);
    return alert;
  }
}