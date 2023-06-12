let left_bt=document.getElementsByClassName('left-arrow')[0];
let right_bt=document.getElementsByClassName('right-arrow')[0];

let cards=document.getElementsByClassName('cards')[0];

left_bt.addEventListener('click',()=>{
   
    cards.scrollLeft-=140
})
right_bt.addEventListener('click',()=>{
   
    cards.scrollLeft+=140
})


let json_url="movie.json";
fetch(json_url).then(Response=>Response.json())
.then((data) => 
{
    console.log(data)
    data.forEach(element => {
        let card=document.createElement('a');
        card.classList.add('a-card-poster');
        // card.href=element.url;
        card.innerHTML=
        `
        <img src=${element.sposter} alt=${element.name}>
    <div class="rest-card">
        <img src=${element.bposter} alt="">
        <div class="cont">
            <h4>${element.name}</h4>
            <div class="sub">
                <p>${element.genre} , ${element.date}</p>
                <h4 class="rate"><span class="imd">IMDB</span><i class="fa-solid fa-star"></i><span>${element.imdb}</span>
 
 
            </div>
        </div>
    </div>
    ` 
    cards.appendChild(card) 
    });

    console.log(data[0].name)
    document.getElementById('title').innerText=data[0].name;
document.getElementById('gen').innerText=data[1].genre;
document.getElementById('year').innerText=data[0].data;
document.getElementById('rate').innerHTML=`<span class="imd">IMDB</span><i class="fa-solid fa-star"></i><span class="ratings">${data[0].imdb}</span>`;



})