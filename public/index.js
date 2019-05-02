// helper functions for game functionality

// card deck
export const generateDeck = () => {
    // hearts, diamonds, spades, clubs
    const SUITS = 'cdhs'
    const RANKS = '23456789TJQKA'
    const DECK = []
    // const DECK = tuple(''.join(card) for card in itertools.product(RANKS, SUITS))
    for (s in SUITS) {
        for (r in RANKS) {
            DECK.push(`${SUITS[s]}${RANKS[r]}`)
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