const renderMenu = () => {
    const element = document.createElement('div');
    const p = document.createElement('p')

    p.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum harum dolor ab necessitatibus officiis nobis adipisci cumque itaque commodi aliquid suscipit maxime ipsam ipsa id soluta accusantium, tenetur fuga quos.`

    element.append(p)
    element.classList.add('home')

    return element

}

export default renderMenu