function getID(id) {
    const crewData = fetch(`https://raw.githubusercontent.com/acnormun/star-trek/main/assets/data/stdata.json`)
        .then(response => response.json())
        .then(data => {
            const crewId = document.getElementById('popup')
            crewId.innerHTML = data.tripulation.map(crew => {
                if (crew.id == id) {
                    const popup = document.getElementById('popup')
                    popup.classList.remove('hidden')

                    const overlay = document.getElementById('overlay')
                    overlay.classList.remove('hidden')

                    return `<div class="top">
                                <div>${crew.name}</div>
                                <button  id="closePopup" onClick = "closePopup()">&times;</button>
                            </div>
                            <div class="content">
                                <div>
                                    <img src="${crew.photo}"</img>
                                </div>
                                <div>
                                    <ul>
                                        <li> Nome: ${crew.name} </li>
                                        <li> Origem: ${crew.origin} </li>
                                        <li> Título: ${crew.title} </li>
                                        <li> Posição: ${crew.position} </li>
                                </div>
                            </div>`
                }
            }).join('')
        }
        )
}

function closePopup(){

    const popup = document.getElementById('popup')
    popup.classList.add('hidden')

    const overlay = document.getElementById('overlay')
    overlay.classList.add('hidden')

}