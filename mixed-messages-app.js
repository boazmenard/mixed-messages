let animeCharacters = ['Eren Jaeger', 'Naruto Uzamaki', 'Tanjiro Kamado', 'Yuji Itadori', 'Kirito', 'Goku', 'Mikasa Ackerman']
let adjectives = ['cool', 'awesome', 'weird', 'beautiful', 'strong', 'swole', 'unbeatable', 'crazy', 'smart']
let emojis = [';)', ':)', '-_-', '0_0', ':^(', ':(', ':/']

const characterSelector = Math.floor(Math.random() * animeCharacters.length)
const adjectiveSelector = Math.floor(Math.random() * adjectives.length)
const emojiSelector = Math.floor(Math.random() * emojis.length)

function giveMeInspirationalAnimeMessage() {
    return `HEY YOU! I want you to know that you are ${adjectives[adjectiveSelector].toUpperCase()} like ${animeCharacters[characterSelector].toUpperCase()}!!! ${emojis[emojiSelector].toUpperCase()}`
}

console.log('I know you need this right now...')
console.log(giveMeInspirationalAnimeMessage())