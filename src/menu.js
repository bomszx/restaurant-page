const menuArr = [
    {
        name: `Sinigang na Baka with Banana`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor iste a nisi, fuga id dicta tempora pariatur. Dolor, ut tempore doloremque vitae minima possimus harum nemo aperiam explicabo ipsam atque.`,
        price: `4$`
    },
    {
        name: `Crispy Tadyang (Beef)`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nostrum deleniti itaque culpa saepe ea, dicta velit earum dolor. Iusto fugit repudiandae quibusdam possimus officia? Quasi nam reiciendis dicta dolorem!`,
        price: `7$`
    },
    {
        name: `Kare Kare with Ox Tail`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat labore tenetur eaque pariatur voluptatum unde! Repellendus officia voluptatibus ut perspiciatis quisquam dolor. Expedita ex eligendi ratione sint deleniti at dolore.`,
        price: `5$`
    },
]

// we should create the menu outright not when we click the menu button, so this function will create our html elements

// then this function will append to our main content element
const renderMenu = () => {
    const menuContainer = document.createElement('div');

    menuArr.forEach((menu) => {

        const pTitle = document.createElement('p');
        const menuItem = document.createElement('div');
        const p = document.createElement('p');
        const pPrice = document.createElement('p');
        const hr = document.createElement('hr');

        pTitle.classList.add('pTitle')
        menuContainer.classList.add('menuSection');
        menuItem.classList.add('menuItem')

        pTitle.innerText = `${menu.name}`;
        p.innerText = `${menu.description}`;
        pPrice.innerText = `${menu.price}`;

        menuItem.append(pTitle)
        menuItem.append(hr);
        menuItem.append(p);
        menuItem.append(pPrice);
        menuContainer.append(menuItem);               
    })
    return menuContainer  

}


export default renderMenu