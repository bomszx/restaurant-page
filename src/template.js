const header = () => {
    const headerElement = document.createElement('div')

    const home = document.createElement('button')
    home.innerText = 'Home'

    const menu = document.createElement('button')
    menu.innerText = 'Menu'

    const about = document.createElement('button')
    about.innerText = 'About'

    headerElement.append(home)
    headerElement.append(menu)
    headerElement.append(about)

    headerElement.classList.add('nav')

    // Add Event Listener to each button

    return headerElement
}

const title = () => {
    const titleElement = document.createElement('div')

    const p = document.createElement('p')

    p.innerText = 'Hapag Chup Chupaan'

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
    content.append(footer())

}

export {renderTemplate};