export function getMagic(color, type) {
    return fetch(`https://api.magicthegathering.io/v1/cards?colors=${color}&type=${type}&`)
    .then((res) => {
        return res.json()
    })
}

