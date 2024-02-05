const  getStarted= ()=>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content');
    content.appendChild(pageContent);
    
    const getStart = document.createElement('h2');
    getStart.innerText= "Make List and Keep Track ToDO-List ";
    pageContent.appendChild(getStart)

    const getStartedBtn = document.createElement('button');
    getStartedBtn.innerText='Start';
    getStartedBtn.setAttribute('id', 'startBtn')
    getStartedBtn.classList.add('start')
    pageContent.appendChild(getStartedBtn);
}

export default getStarted 