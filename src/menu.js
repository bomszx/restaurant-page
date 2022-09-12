const renderMenu = () => {
    const element = document.createElement('div');
    const menuContainer = document.createElement('div')
    const menuTitle = document.createElement('p')
    const menuItem = document.createElement('p')
    // const hr = document.createElement('hr')


    menuTitle.innerText = `Sinigang na Baka with Banana`

    menuItem.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum harum dolor ab necessitatibus officiis nobis adipisci cumque itaque commodi aliquid suscipit maxime ipsam ipsa id soluta accusantium, tenetur fuga quos.`

    menuTitle.innerText = `Crispy Tadyang ng Dinosaur`

    menuItem.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sed debitis, officia porro nulla blanditiis, eveniet nobis, amet itaque quos provident impedit soluta possimus. Voluptate porro veniam odio optio unde?`

    menuContainer.append(menuTitle)
    menuContainer.append(menuItem)
    element.append(menuContainer)
    // element.append(hr)
    element.classList.add('menuSection')

    return element

}

export default renderMenu