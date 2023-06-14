let left_bt = document.getElementsByClassName("left-arrow")[0];
let right_bt = document.getElementsByClassName("right-arrow")[0];

let cards = document.getElementsByClassName("cards")[0];

left_bt.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});
right_bt.addEventListener("click", () => {
  cards.scrollLeft += 140;
});

let json_url = "movie.json";
data=[]
fetch(json_url)
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
    let i = 0;
    data.forEach((element) => {
      let card = document.createElement("a");
      card.classList.add("a-card-poster");
      // card.href=element.url;
      card.innerHTML = `
        <img src=${element.sposter} alt=${element.name} >
    <div class="rest-card" onclick=myF(${i})>
        <img src=${element.bposter} alt="" >
        <div class="cont">
            <h4>${element.name}</h4>
            <div class="sub">
                <p>${element.genre} , ${element.date}</p>
                <h4 class="rate"><span class="imd">IMDB</span><i class="fa-solid fa-star"></i><span>${
                  element.imdb
                }</span>
 
 
            </div>
        </div>
    </div>
    `;
      cards.appendChild(card);
      i++;
    });

   
  });
  function myF(id) {
    
    fetch(json_url)
  .then((Response) => Response.json())
  .then((data) => {
 setTimeout(() => {
    image_h=document.getElementById("img-h")

   
    url1= `${data[id].sposter}`
image_h.style.backgroundImage = `url('${data[id].bposter}')`;;
    document.getElementById("title").innerText = data[id].name;
    document.getElementById("gen").innerText = data[id].genre;
    document.getElementById("year").innerText = data[id].date;
    document.getElementById(
      "rate"
    ).innerHTML = `<span class="imd">IMDB</span><i class="fa-solid fa-star"></i><span class="ratings">${data[id].imdb}</span>`;

 }, 300);
   });
}
play=document.getElementById("play")

var video = document.getElementsByTagName("video");
play.addEventListener('click',()=>{
    video[0].style.display="block"
video[0].play();
// video_Timeline(video[0])
})
video[0].addEventListener("ended", () => {
    video[0].style.display = "none";
   console.log("ended")
  });
function video_Timeline(video) {
    
}