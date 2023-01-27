// Formata o preço
export function formatPrice(price) {
    return 'R$ ' + price.toString().replace('.', ',');
}

// Calcula o valor de cada parcela e retorna sem formatação
export function calculateParcel(parcel, price) {
    return (price / parcel).toFixed(2);
}

// Calcula a média de avaliações do produto
export function calculateRating(array) {
    let sum = 0;
    for (let rating of array) {
        sum += rating.rating;
    }
    const rating = (sum / array.length).toFixed(1);
    return rating;
}

// Formata url
export function formatUrl(url) {
    return '/' + url.toLowerCase().replace(/ /g,'-');
}