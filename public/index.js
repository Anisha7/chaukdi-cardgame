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

// sort the given list of cards
export const sortCards = (hand) => {
    spades = []
    hearts = []
    clubs = []
    diamonds = []
    for (i in hand) {
        card = hand[i]
        if (card.contains('C') == true) {
            clubs.push(card)
        } else if (card.contains('S') == true) {
            spades.push(card)
        } else if (card.contains('D') == true) {
            diamonds.push(card)
        } else if (card.contains('H') == true) {
            hearts.push(card)
        }
    }

    spades.sort()
    hearts.sort()
    clubs.sort()
    diamonds.sort()
    return hearts.concat(diamonds).concat(spades).concat(diamonds)
}


export const isValidPlay = (type, card) => {
    return
}
// say which card is bigger
export const isBigger = (card1, card2) => {
    return
}