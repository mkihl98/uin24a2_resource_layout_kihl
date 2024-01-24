/*Kjører funksjonen addResource() når nettsiden lastes inn med parameteren "HTML",
slik at HTML-ressursene er synlige med en gang man åpner nettsiden:*/
document.addEventListener("DOMContentLoaded", addResource('HTML'))

console.log(resources)

/*Oppretter en variabel som skal inneholde menyen (navigasjonsbaren) på siden:*/
let menuHTML = "<ul>"

resources.map(resource => menuHTML += 
    `<li onClick="addResource('${resource.category}')">${resource.category}</li>`
)

const nav = document.getElementsByTagName("nav")
nav[0].innerHTML = `${menuHTML}</ul>`

console.log(menuHTML)

function addResource(title) {
    let resourcesHTML = ""

    let elements = resources.filter(resource => title === resource.category)

    elements.map(element => { resourcesHTML +=
        `<h2>${element.category}</h2>
        <p>${element.text}</p>`

        element.sources.map(e => resourcesHTML +=
            `<ul>
                <li><a href="${e.url}">${e.title}</a></li>
            </ul>`
        )
    })

    const main = document.getElementsByTagName("main")
    main[0].innerHTML = resourcesHTML

    addClass(title)
}

function addClass(title) {
    const resourceType = document.getElementsByTagName("li")

    if(resourceType.classList.contains("active") === true) {
        resourceType.classList.remove("active")
    } else {
        resourceType.classList.add("active")
    }
}