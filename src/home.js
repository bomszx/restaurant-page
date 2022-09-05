const renderHome = () => {
    const element = document.createElement('div');
    const title = document.createElement('p');
    const p = document.createElement('p')
    const pp = document.createElement('p')

    title.innerText = `Kamusta?`

    p.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque totam deleniti eveniet cum id? Dolorum deserunt blanditiis tempora unde esse corporis accusantium, soluta cupiditate, aliquid numquam nobis! Illo, esse corporis!`

    pp.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati minima dolorem, accusantium et cupiditate voluptas cumque consectetur, repellendus labore hic! Ipsum, quam dignissimos! Dicta magnam fugiat in debitis inventore!`

    element.append(title);
    element.append(p)
    element.append(pp)
    element.classList.add('home')
    return element
}

export default renderHome

