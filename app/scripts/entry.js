// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
// import tiy from './app.js';

// Looks like the imported module was a function, because here we're executing it!
import Backbone from 'backbone';
import $ from 'jquery';
import toDoItemView from './views/TodoItemView.js';

const AddImage = Backbone.View.extend({
  className: 'add-to-list',
  events: {
    'submit .add onRenderList'
  },
  clearText: function() {
    toDoItems.value = '';
  },
  onRenderList: function() {
    const template = `
      <div class="toDoItems">
        <button class="add">Add</button>
      </div>
    `
    toDoList.html = '';
    newListItems = '';
    for (var i = 0; i < userInput.length; i++) {
        newListItems += userInput[i] + '<br>';
        toDoList.html = newListItems;
    }
  }

})