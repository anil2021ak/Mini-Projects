let bookmarks = [{
    bookmarkId: "bookmark1",

    name: "Learning Portal",
    url: "https://learning.ccbp.in/",

}, ];
for (let i of bookmarks) {
    createbookmark(i)

}

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (siteNameInput.value !== "" && siteUrlInput.value !== "") {
        i = {
            name: siteNameInput.value,
            url: siteUrlInput.value
        }
        createbookmark(i)

    } else if (siteNameInput.value === "" && siteUrlInput.value === "") {
        siteNameErrMsg.textContent = "Required*"
        siteUrlErrMsg.textContent = "Required*"
    } else if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*"
    } else if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*"
    }





})
siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*"
    } else {
        siteNameErrMsg.textContent = ""
    }

})
siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*"
    } else {
        siteUrlErrMsg.textContent = ""
    }

})

function createbookmark(i) {
    let list = document.createElement('li')
    list.classList.add("d-flex", "flex-row", "container", "silvercard", "mb-3")
    bookmarksList.appendChild(list)
    let p = document.createElement('p')
    p.id = i.bookmarkId
    p.textContent = i.name
    p.classList.add("pelement", "container")
    list.appendChild(p)
    let buttoncontainer = document.createElement('div')
    buttoncontainer.classList.add("container", "align")
    list.appendChild(buttoncontainer)
    let a = document.createElement('a')
    a.href = i.url
    a.target = "_target"
    buttoncontainer.appendChild(a)
    let visit = document.createElement('button')
    visit.setAttribute("class", "btn btn-primary")
    visit.textContent = "visit"
    a.appendChild(visit)
    siteNameInput.value = "";
    siteUrlInput.value = ""
}