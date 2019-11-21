const listResults = document.getElementById("results")
new URLSearchParams(window.location.search).forEach((value,name) => {
    reqDiv = document.createElement("div");
    reqDiv.append(`${name}: ${value}`)
    reqDiv.append(document.createElement('br'))
    listResults.append(reqDiv);
})