const main = () => {
    const element = document.createElement('div');
    const btn = document.createElement('btn');
    btn.innerText = `Menu`

    btn.addEventListener('click', function(e) {
        console.log(`ola`)
    })

    element.append(btn)
    element.classList.add('main');
    return element
}

export default main