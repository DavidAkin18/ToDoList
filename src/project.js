function doToDo(){
    const displayList = []

const ToDo =class{
  constructor(title, dueDate, description){
    this.title=title;
    this.dueDate=dueDate;
    this.description=description;
  }
}
ToDo.prototype.toggleRead= function() {
  this.read != this.read
}

function toggleRead(index){
  displayList[index].toggleRead()
  render();
}

function render(){
  const content = document.querySelector('.todoing')
  content.innerHTML ="";
  const header = document.createElement('h2')
        header.innerText= "Project Works"
        content.appendChild(header);
    for(let i = 0; i < displayList.length; i++){
        let book = displayList[i];
        const bookLi =  document.createElement('div');
        content.appendChild(bookLi);
        bookLi.classList.add('card')
        const round = document.createElement('div');
        round.classList.add('round')
        bookLi.appendChild(round);
        const done =  document.createElement('input')
        done.setAttribute('type', 'checkbox');
        done.setAttribute('id', 'checkbox');
        done.setAttribute('name', 'checkbox');

        round.appendChild(done)

        const cardHead = document.createElement('div');
        cardHead.classList.add('card-hard');
        bookLi.appendChild(cardHead);

        const tit = document.createElement('h3')
        tit.innerText= `${book.title}`
        const desc = document.createElement('p')
        desc.innerText= `${book.description}`
        desc.setAttribute('id', 'desk')
       

        cardHead.appendChild(tit)
        cardHead.appendChild(desc)
        // cardHead.appendChild(due)


        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        bookLi.appendChild(cardBody)
        const due = document.createElement('h5');
        due.innerText =`${book.dueDate}`
        const hea = document.createElement('h3')
        hea.classList.add('fa-solid')
        hea.classList.add('fa-trash')


        hea.addEventListener('click', ()=>{
            removeBook(i)
            
        });
        cardBody.appendChild(due)
        cardBody.appendChild(hea);
        cardBody.setAttribute('id', 'btnn');
        cardBody.classList.add('remove-btn');
    }
}


function removeBook(index){
    displayList.splice(index, 1) 
    console.log(index) 
    render()
}

function ToDoList(){
  let title = document.querySelector('#title').value;
  let dueDate = document.querySelector('#dueDate').value;
  let description = document.querySelector('#describe').value;
  let newToDoList = new ToDo(title, dueDate, description)
  displayList.push(newToDoList)
  render()
}ToDoList()


let getStar = document.querySelector('#startBtn')
getStar.addEventListener('click', ()=>{
    let myForm= document.querySelector('#my-form')
    myForm.style.display='block';
})



document.querySelector('#btnSubmit').addEventListener('click', (event)=>{
  event.preventDefault();
  ToDoList()
})


};



export default doToDo;