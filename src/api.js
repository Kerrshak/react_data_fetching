export function getMagic(color, type, rarity) {
    return fetch(`https://api.magicthegathering.io/v1/cards?colors=${color}&type=${type}&rarity=${rarity}`)
    .then((res) => {
        return res.json()
    })
}

