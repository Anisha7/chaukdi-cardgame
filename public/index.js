// helper functions for game functionality
// card deck
export const generateDeck = () => {
    // hearts, diamonds, spades, clubs
    const SUITS = 'CDHS'
    const RANKS = '23456789TJQKA'
    const DECK = []
    // const DECK = tuple(''.join(card) for card in itertools.product(RANKS, SUITS))
    for (s in SUITS) {
        for (r in RANKS) {
            let suit = SUITS[s]
            let rank = RANKS[r]
            if (rank == 'T') {
                rank = '10'
            }
            let name = `${rank}${suit}`
            DECK.push(name)
            
        }
    }
    return DECK
}

// return a random number in the given range
export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// picks 13 random cards out of given deck
export const getHandCards = (deck) => {
    let hand = []
    
    for (i=0; i<13; i ++) {
        const card_index = getRandomInt(0, deck.length)
        const card = deck.splice(card_index, 1)[0]
        hand.push(card)
    }
    return hand
}

// const deck = generateDeck()
// let images = {}
// for (i in deck) {
//     let path = '../assets/cards/'+ deck[i] + '.png'
//     let img = require('../assets/cards/2C.png')
//     images[deck[i]] = img
// }
// export { images }