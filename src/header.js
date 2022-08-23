const header = () => {
    const element = document.createElement('div')

    const home = document.createElement('button')
    home.innerText = 'Hello'

    const menu = document.createElement('button')
    menu.innerText = 'Menu'

    const about = document.createElement('button')
    about.innerText = 'About'

    element.append(home)
    element.append(menu)
    element.append(about)

    element.classList.add('nav')

    // Add Event Listener to each button

    return element
}

export {header as renderHeader}