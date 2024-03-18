document.querySelector('button').addEventListener('click',() => {
    const width = window.screen.width;
    const height = window.screen.height;
    document.querySelector('div').innerHTML = `Ширина экрана : ${width} px, высота экрана : ${height} px`
})