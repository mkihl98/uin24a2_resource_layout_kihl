document.addEventListener("DOMContentLoaded", addResource('HTML'))

console.log(resources)

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
}


/*`<article>
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
        <ul>
            <li><a href="${resource.sources.url}">${resource.sources.title}</a></li>
            <li><a href="${resource.url}">${resource.title}</a></li>
            <li><a href="${resource.url}">${resource.title}</a></li>
        </ul>
    </article>`
*/