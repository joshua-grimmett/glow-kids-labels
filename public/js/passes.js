const DEFAULT_DATA = [ 
    {
        text: 'Grab a snack',
        img: '/img/snack-clip-art-7.jpeg'
    },
    {
        text: 'Go for a walk',
        img: '/img/706268.jpeg'
    },
    {
        text: 'Playpark',
        img: '/img/343664.jpeg'
    },
    {
        text: 'See my parents',
        img: '/img/gieoEzx4T.png'
    },
    {
        text: 'Quiet place',
        img: '/img/473465.jpeg'
    },
    {
        text: 'Outside',
        img: '/img/22711.png'
    }
];

function onReady() {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data') && params.get('data').length > 0
        ? params.get('data').split(',').map(i => {
            return {
                text: i.split(';')[0],
                img: i.split(';')[1]
            }
        })
        : DEFAULT_DATA;

    const template = document.querySelector('#label-template');
    const firstNode = data.shift();
    template.childNodes[3].childNodes[3].innerHTML = firstNode.text;
    template.childNodes[3].childNodes[1].src = firstNode.img;
    const grid = document.querySelector('#labels');
    for (let item of data) {
        let newLabel = template.cloneNode(true);
        
        newLabel.childNodes[3]
            .childNodes[3].innerHTML = item.text;
        newLabel.childNodes[3]
            .childNodes[1].src = item.img;

        grid.appendChild(newLabel);
    }

    $('#labels').imagesLoaded(() => {
        window.print();
    })
}

window.onload = onReady;