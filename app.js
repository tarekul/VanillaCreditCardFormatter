class CCreader{
  constructor(){
    this.number = '';
    this.type = '';
  }

  display(){
    const root = document.querySelector('#root')
    root.innerHTML += `<input type = 'text' class='js-input' />`
    root.innerHTML += '<h3></h3>'
  }

  addEvent(element,event,handler){
    const domE = document.querySelector(element);
    domE.addEventListener(event,handler)

  }
}

const cc = new CCreader()
cc.display()
cc.addEvent('.js-input','keyup',(e)=>{
  const firstChar = e.target.value[0]
  const secondChar = e.target.value[1]
  const h3 = document.querySelector('h3')
  if(firstChar === '4') h3.innerHTML = 'Visa'
  else if(firstChar === '5') h3.innerHTML = 'MasterCard'
  else if(firstChar ==='3' && secondChar ==='7') h3.innerHTML = 'Amex'
  else h3.innerHTML = ''
  
  if(h3.innerHTML !== 'Amex'){
    const inputField = e.target.value.split(' ').join('').slice(0,16)
    let counter = 0
    let str = ''
    for(let i=0;i<inputField.length;i++){
      if(counter === 3){
        str += inputField[i];
        str += ' '
        counter = 0;
      }
      else if(inputField[i] === " ") continue
      else{
        str += inputField[i];
        counter++;
      }
    }

    const input = document.querySelector('.js-input')
    input.value = str
  }
  else{
    const inputField = e.target.value.split(' ').join('').slice(0,15)
    let str = ''
    for(let i=0;i<inputField.length;i++){
      str += inputField[i]
      if(i === 3) str += " ";
      else if(i=== 9) str += " ";
    }

    const input = document.querySelector('.js-input')
    input.value = str
  }
  
})