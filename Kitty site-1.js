function generatekitty(){
    let image = document.createElement("img")
    let div = document.getElementById("cat-pictures")
    let catImg = "https://api.thecatapi.com/v1/images/search?format=src&limit=100&size=small"
    console.log(catImg)
    image.src = catImg
    div.append(image);
}
