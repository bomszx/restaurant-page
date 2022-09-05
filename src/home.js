const renderHome = () => {
    const element = document.createElement('div');
    const titleContainer = document.createElement('div')
    const pContainer = document.createElement('div')
    const title = document.createElement('p');
    const p = document.createElement('p');
    const pp = document.createElement('p');
    const btnContainer = document.createElement('div')
    const menuBtn = document.createElement('button')

    title.innerText = `Kamusta?`
    menuBtn.innerText = `Click Me!`

    p.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque totam deleniti eveniet cum id? Dolorum deserunt blanditiis tempora unde esse corporis accusantium, soluta cupiditate, aliquid numquam nobis! Illo, esse corporis!`

    pp.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati minima dolorem, accusantium et cupiditate voluptas cumque consectetur, repellendus labore hic! Ipsum, quam dignissimos! Dicta magnam fugiat in debitis inventore!`

    titleContainer.append(title)

    pContainer.append(p)
    pContainer.append(pp)

    element.append(titleContainer)
    element.append(pContainer)

    btnContainer.append(menuBtn)
    element.append(btnContainer)


    titleContainer.classList.add('titleElement')
    pContainer.classList.add('pContainer')
    element.classList.add('home')
    menuBtn.classList.add('menuBtn')

    return element
}

export default renderHome

