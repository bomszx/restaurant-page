import renderHome from './home';
import './style.css';
import renderTemplate from './template';

const header = () => {
    const headerElement = document.createElement('div')
    const home = document.createElement('button')
    home.innerText = 'Home'
    const menu = document.createElement('button')
    menu.innerText = 'Menu'
    const about = document.createElement('button')
    about.innerText = 'About'

    // adding a function to the event doesn't seem to work?
    menu.addEventListener('click', renderHome());

    headerElement.append(home)
    headerElement.append(menu)
    headerElement.append(about)
    headerElement.classList.add('nav')

    // Add Event Listener to each button, we can only return one element from a function
    return headerElement
}

const content = document.getElementById('content')
content.append(header())

renderTemplate();

// save your header footer on this file, then create functions that will append those files on their respective file ie header.js, footer.js
// const element = document.getElementById('content')
// element.append(renderHome())

//need to create a template for header nav and footer, then inject our content with either home menu about 

function createHtmlElement(type, id, arrayClasses, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses)
      arrayClasses.forEach((myClass) => element.classList.add(myClass));
  
    if (content) element.innerText = content;
  
    return element;
  }