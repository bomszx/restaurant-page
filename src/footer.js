const footer = () => {
    const element = document.createElement('div')
    const p = document.createElement('p')

    p.textContent = `Copyright \u00A9 ${new Date().getFullYear()} bomszx`

    element.append(p)
    element.classList.add('footer')

    return element
}

export {footer as renderFooter}