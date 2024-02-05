const createTabs = ()=>{
    const content = document.querySelector('#content')
    const options = document.createElement('div')
    options.classList.add('option');

    
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
   
    div1.innerText = 'ToDo'
    div2.innerText= 'Doing'
    div3.innerText = 'Done'

    //pass id 
    div1.setAttribute('id', 'todo')
    div2.setAttribute('id', 'doing')
    div3.setAttribute('id', 'done');
    
    // pass classes
    div1.classList.add('choice')
    div2.classList.add('choice')
    div3.classList.add('choice')

    options.appendChild(div1)
    options.appendChild(div2)
    options.appendChild(div3)
    content.appendChild(options)
}
export default createTabs;