
//birds//

function Bird (name,lifespan,group,food,length,weight,found,image){
    this.name = name ,
    this.lifespan =lifespan,
    this.group = group,
    this.food = food, 
    this.length =length,
    this.weight = weight,
    this.found = found,
    this.image = image,
    this.detail = () => `${name} ${lifespan} ${group} ${food} ${length} ${weight} ${found} ${image} `
}

let cassowary = new Bird ("Cassowary",
    "20 years",
    "birds",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "1.7m",
    "44kg",
    "Queensland",
    "./images/birds/cassowary.jpg")

let Kookaburra = new Bird("kookaburra","20 years",
    "birds",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "1.7m",
    "44kg",
    "Queensland",
    "./images/birds/kookaburra.jpg")

let YellowTailedBlackCockatoo = new Bird ("YellowTailedBlackCockatoo","birds",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "1.7m",
    "44kg",
    "Queensland",
    "./images/birds/yellow-tailed-black-cockatoo.jpg")

let birds = [cassowary,Kookaburra,YellowTailedBlackCockatoo];

birds.forEach(bird => {
    console.log(bird.detail());
});





//read more

let detailList = document.querySelector(".detail__list");
let detailImage = document.querySelector("img");


let gridSection = document.querySelector("#birdsContainer");
let detailDescription = document.querySelector("#birdsDetail")

birdsDetail.style.display = "none";


detailList.textContent = cassowary.detail();
detailImage.src = cassowary.image;
detailImage.alt = cassowary.name;

let readMoreBtn = document.querySelector(".bird__card .btns")

readMoreBtn.addEventListener("click", function () {
    birdsDetail.style.display ="none";
    birdsDetail.style.display ="block"
});