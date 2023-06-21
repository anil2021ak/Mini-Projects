let userinputvalue = ""
searchInput.addEventListener("keydown", function(event) {
    userinputvalue = event.target.value

    request()
})

function request() {

    if (event.key === "Enter") {
        spinner.classList.toggle("d-none")
        let options = {
            method: "GET"
        }
        searchResults.textContent = ""
        let url = "https://apis.ccbp.in/book-store?title=" + event.target.value + "&" + "maxResults=" + selectDisplayCount.value
        console.log(url)

        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                let {
                    search_results
                } = data

                spinner.classList.toggle("d-none")
                if (search_results.length !== 0) {
                    error.textContent = ""
                } else if (search_results.length === 0) {
                    error.textContent = "No results found"
                }
                for (let i of search_results) {
                    dynamically(i)

                }

            })

    }
}

function dynamically(i) {
    let container = document.createElement('div')
    container.classList.add("card", "col-5", "ml-2", "mr-2")
    searchResults.appendChild(container)
    let image = document.createElement('img')
    image.src = i.imageLink
    container.appendChild(image)
    let p = document.createElement('p')
    p.textContent = i.author
    container.appendChild(p)
}