function cree_ligne(val){
    const tr = document.createElement('tr')
    const tdList = document.createElement('td')
    const tdIcon = document.createElement('td')
    const tdCheck = document.createElement('td')
    const i = document.createElement('i')
    
    i.className = 'fa fa-trash'
    i.setAttribute('aria-hidden', 'true')
    i.style.cursor = "pointer"
    const inputCheck = document.createElement('input')
    inputCheck.type = 'checkbox'
    inputCheck.style.cursor = 'pointer'
    tbody.append(tr)
    tr.append(tdList)
    tr.append(tdIcon)
    tr.append(tdCheck)
    tdCheck.append(inputCheck)
    tdIcon.append(i)
    tdList.textContent = val

    tdIcon.addEventListener('click', function(){
        tr.remove()
    })
    inputCheck.addEventListener('change', function(){
        tr.classList.toggle('table-success', inputCheck.checked);
    })
}

const valeur = document.querySelector('.valeur')
const bouton = document.querySelector('.ajouter')
const tbody = document.querySelector('tbody')
const table = document.querySelector('table')

let existe = false

table.style.visibility = 'hidden'

bouton.addEventListener('click', function(){
    table.style.visibility = 'visible'
    if(valeur.value.trim() === ''){
        alert("Veuillez entré quelque chose")
    }else{
        cree_ligne(valeur.value)
        valeur.value = ""
    }
})