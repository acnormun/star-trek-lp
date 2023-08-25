async function fetchCrewData() {
    const url = 'https://raw.githubusercontent.com/acnormun/star-trek/main/assets/data/stdata.json';
    const response = await fetch(url)
    const crewData = await response.json()
    return crewData
}

