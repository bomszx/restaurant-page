const main = () => {
    const element = document.createElement('div');
    const pe = document.createElement('p');
    pe.innerText = 'mango';

    element.append(pe)
    element.classList.add('main')
    return element
}

export {main as renderMain}