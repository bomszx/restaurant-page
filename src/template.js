import mainContent from './mainContent.js'
import renderHome from './home.js'
import renderMenu from './menu.js'
import renderAbout from './about.js'

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

const title = () => {
    const titleElement = document.createElement('div')
    const p = document.createElement('p')
    p.innerText = `All Time Hapag Chupaan`
    titleElement.append(p)
    titleElement.classList.add('header')
    return titleElement
}

const footer = () => {
    const footerElement = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = `Copyright \u00A9 ${new Date().getFullYear()} bomszx`
    footerElement.append(p)
    footerElement.classList.add('footer')
    return footerElement
}

const renderTemplate = () => {
    const content = document.getElementById('content')
    content.append(title())
    content.append(header())
    //create a setDefault page for the home page then create eventlisteneres to corresponding bottoms
    content.append(renderHome())
    content.append(footer())
}

export default renderTemplate