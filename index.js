
document.addEventListener('DOMContentLoaded', () => {
    var baralho = null

    async function newShuffle(id){
        const response = await fetch('https://deckofcardsapi.com/api/deck/'+id+'/shuffle/?deck_count=1')
        baralho = await response.json()
        console.log(baralho)
    }

    async function drawCard(id){
        const response = await fetch('https://deckofcardsapi.com/api/deck/'+ id +'/draw/?count=1')
        const carta = await response.json()
        return carta
    }

    const btnEmbaralhar = document.querySelector('#embaralhar')
    const divMsg = document.getElementById('msg')

    const btnRetirar = document.getElementById('retirar')
    const divMesa = document.getElementById('mesa')

//    btnEmbaralhar.addEventListener('click', newShuffle(baralho_deck_id))
    btnEmbaralhar.addEventListener('click', async() => {
        await newShuffle('hp8i0k5l5zfq')
        divMsg.innerHTML = 'Cartas na pilha: '+baralho.remaining
    })

    btnRetirar.addEventListener('click', async() => {
        //let carta = await drawCard(baralho.deck_id)
        let carta = await drawCard('hp8i0k5l5zfq')
        console.log(carta)
        let img = document.createElement('img')
        img.src = carta.cards[0].image
        divMesa.appendChild(img)
        divMsg.innerHTML = 'Cartas na pilha: '+carta.remaining
    })
})