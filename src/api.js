export function getMagic() {
    return fetch('https://api.magicthegathering.io/v1/cards?rarity=mythic')
    .then((res) => {
        return res.json()
    })
}

