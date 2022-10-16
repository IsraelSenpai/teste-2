const elements = document.querySelectorAll('.card-grid .card a .card-content .content p')
const card_text_limit = 50

for (let p of elements)
{
    const aboveLimit = p.innerText.length > card_text_limit
    const dots0rEmpty = aboveLimit ? '...' : ''
    p.innerText = p.innerText.substring(0, card_text_limit) + dots0rEmpty
}