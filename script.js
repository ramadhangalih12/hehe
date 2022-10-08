
// const Ayang = "Shakira"

// const namaAyang = document.querySelector('.ayang')
// namaAyang.innerHTML = Ayang


const text = document.querySelector('.fullText')

const option = {
    strings: ['Manis', 'Gemess', 'Galak', 'Ngangenin ga sii', 'kek kura-kura'],
    typeSpeed: 150,
    backSpeed: 150,
    onComplete: (self) => {end()}
}

let typed = new Typed('.text', option);

const end = () => {
    text.animate([
        {opacity: 1},
        {opacity: 0},
    ], {
        duration: 1000,
        iterations: 1
    }).onfinish = () => {
        text.style.display = 'none'
    }

    document.querySelector('.container').animate([
        {backgroundColor: "#424b53"},
        {backgroundColor: "#d3e9fd"},
    ], {
        duration: 1000,
        iterations: 1
    }).onfinish = () => {
        document.querySelector('.container').style.backgroundColor = "#d3e9fd"
        text.innerHTML = `Semangat kadernyaa <span class='ayang'>byy</span> Shakira :)`
        text.style.color = "#424b53"
        text.style.display = 'block'
        text.animate([
            {opacity: 0},
            {opacity: 1},
        ], {
            duration: 1000,
            iterations: 1
        }).onfinish = () => {
            text.style.display = 'block'
        }
    }


}
