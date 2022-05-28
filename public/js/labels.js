const DEFAULT_NAMES = [ 'Ferne', 'Lara', 'Imogen', 'Arizona', 'Kim', 'Arielle', 'Amity', 'Claudia', 'Kay', 'Chloe', 'Josh', 'Jordyn', 'Shenayah', 'Claudia', 'Morgan', 'Erin', 'Hollie', 'Ruby', 'Tjemyn', 'Louise'];

function onReady() {
    const params = new URLSearchParams(window.location.search);
    const names = params.get('names') != null
        ? params.get('names').split(',')
        : DEFAULT_NAMES;

    const template = document.querySelector('#label-template');
    template.childNodes[3].childNodes[1].innerHTML = names.shift();

    const grid = document.querySelector('#labels');
    for (let name of names) {
        let newLabel = template.cloneNode(true);
        
        newLabel.childNodes[3]
            .childNodes[1].innerHTML = name;

        grid.appendChild(newLabel);
    }
}

window.onload = onReady;