/*Kontrollerer at ressurser.js-filen er koblet til og at innholdet i denne filen kan hentes fram her:*/
console.log(resources)

/*Oppretter en variabel som skal inneholde menyen (navigasjonsbaren) på siden:*/
let menuHTML = "<ul id='menulist'>"

/*map()-er gjennom ressurs-arrayen og legger til et listepunkt (menypunkt) i variabelen menuHTML for hver kategori:*/
resources.map(resource => menuHTML += 
    `<li class="btn" onClick="addResource('${resource.category}')">${resource.category}</li>`
)

/*Henter <nav>-taggen og skriver ut innholdet i menuHTML til denne taggen:*/
const nav = document.getElementsByTagName("nav")
nav[0].innerHTML = `${menuHTML}</ul>`

console.log(menuHTML)

/*Oppretter funksjonen addResource() med parameteren title:*/
function addResource(title) {
    /*Oppretter en variabel til utskrift med foreløpig tom tekststreng, og en variabel til utskrift med <ul>-tagg:*/
    let resourcesHTML = ""
    let listHTML = "<ul>"


    /*Oppretter en variabel som filtrerer ut kategorien som matcher title-parameteren:*/
    let elements = resources.filter(resource => title === resource.category)

    /*map()-er gjennom variabelen som holder på filteret og legger til en <h2>-tagg med kategorinavn og en
    <p>-tagg med teksten til kategorien i variabelen resourceHTML:*/
    elements.map(element => { resourcesHTML +=
        `<h2>${element.category}</h2>
        <p>${element.text}</p>`

        /*map()-er gjennom dem allerede map()-ede arrayen for å nå fram til arrayen sources som ligger inne i resources-arrayen.
        Legger til en <li>-tagg med URL og tittel for hver ressurs i variabelen listHTML:*/
        element.sources.map(e => listHTML +=
            `<li><a href="${e.url}">${e.title}</a></li>`
        )
    })

    /*Henter <main>-taggen og skriver ut innholdet i resourcesHTML og listHTML til denne taggen:*/
    const main = document.getElementsByTagName("main")
    main[0].innerHTML = `${resourcesHTML}${listHTML}</ul>`

}

/*Kjører funksjonen addResource() med parameteren HTML for å sørge for at HTML-ressursene er tilgjengelige
med en gang man åpner nettsiden:*/
addResource('HTML')

/*Kode for å legge til klassen "active" på et listeelement i navigasjonsmenyen når listeelementet klikkes på.
Her har jeg brukt W3Schools til hjelp, ettersom jeg slet med å få til denne biten: https://www.w3schools.com/howto/howto_js_active_element.asp 
Menypunktet som er aktivt når siden først lastes inn blir ikke markert, man må trykke på et menypunkt for at det skal markeres:*/
let listContainer = document.getElementById("menulist")

let lists = listContainer.getElementsByClassName("btn")

/*For-løkke som legger til klassen "active" når et av menypunktene klikkes på:*/
for (let teller = 0; teller < lists.length; teller++) {
    lists[teller].addEventListener("click", function() {
        const current = document.getElementsByClassName("active")

        /*Erstatter "active"-klassen med ingen klasse, slik at umarkerte menypunkter går tilbake til å ha mørkeblå bakgrunnsfarge:*/
        if(current.length > 0) {
            current[0].className = current[0].className.replace("active", "")
        }

        this.className += " active"
    })
}

/*function addClass(active) {
    const resourceType = document.getElementsByTagName("li")

    if(resourceType.classList.contains("active") === true) {
        resourceType.classList.remove("active")
    } else {
        resourceType.classList.add("active")
    }
}*/