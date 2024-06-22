for (i=0; i<15; i++) {
    document.getElementById(i).style.zIndex = (15 - parseInt(i))
}

let page = 0

const nextpage = () => {
    document.getElementById(page).style.animation = "disappear ease 3s forwards"
    page += 1
}