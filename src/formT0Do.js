function myForm(){
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content');
    content.appendChild(pageContent);

    pageContent.innerHTML =`
    <form id="my-form" style="display: none;">
      <label for="title">Title:</label>
      <input type="text" name="title" id="title" class="todo"><br>

      <label for="dueDate">dueDate:</label>
      <input type="date" name="dueDate" id="dueDate" class="todo"><br>
      
      <label for="description">Describe:</label>
      <input type="text" name="describe" id="describe" class="todo"><br>

      <input type="submit" id="btnSubmit" value="Add ToDo">
    </form>
    <div class="todoing"></div>`
}
export default myForm;