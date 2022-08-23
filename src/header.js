const header = () => {
    const element = document.createElement('div')

    const home = document.createElement('button')
    home.innerText = 'Hello'
    element.append(home)

    return element
}

export {header as renderHeader}