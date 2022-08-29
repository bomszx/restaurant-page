const renderAbout = () => {
    const element = document.createElement('div')
    element.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.129687706838!2d120.96377329222749!3d14.626469275848427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b59322808915%3A0xbaceda73259cf52c!2sBUILDING%2012%20URBAN%20DECA%20HOMES!5e0!3m2!1sen!2sph!4v1661790762613!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    return element
}



export default renderAbout
