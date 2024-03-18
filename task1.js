const button = document.querySelector('button');
button.addEventListener('click', () => {
    const first_icon = document.querySelector('.body__icon1');
    if (getComputedStyle(first_icon).display === 'block') {
        document.querySelector('.body__icon1').style.display = 'none'
        document.querySelector('.body__icon2').style.display = 'block'
    }
    else {
        document.querySelector('.body__icon2').style.display = 'none'
        document.querySelector('.body__icon1').style.display = 'block'
    }
})