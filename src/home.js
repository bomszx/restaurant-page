const renderHome = () => {
    const element = document.createElement('div');
    const title = document.createElement('p');
    const p = document.createElement('p')

    title.innerText = `Eat All You Can! Hapag All The Way Chupaan`

    p.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque totam deleniti eveniet cum id? Dolorum deserunt blanditiis tempora unde esse corporis accusantium, soluta cupiditate, aliquid numquam nobis! Illo, esse corporis!`

    element.append(title);
    element.append(p)
    element.classList.add('main')
    return element
}

export default renderHome

