console.log(resources)

let resourcesHTML = ""

resources.map(resource => resourcesHTML += 
    `<article>
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
        <ul>
            <li><a href="${resource.sources.url}">${resource.sources.title}</a></li>
            <li><a href="${resource.url}">${resource.title}</a></li>
            <li><a href="${resource.url}">${resource.title}</a></li>
        </ul>
    </article>`
)

console.log(resourcesHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML = resourcesHTML