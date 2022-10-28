// Set Array with staff
let staffInformation = [
  {
    id: 1,
    name: "Morgan Freeman",
    job: "Actor",
    img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/905k0RFzH0Kd6gx8oSxRdnr6FL.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda asperiores provident corporis quasi perferendis eaque animi non harum id cumque eius maiores eveniet, iste odio eos, ipsa ex ad facere.Adipisci, omnis id sint, eius sit exercitationem tempora minima obcaecati non a officiis nam magnam, nihil corporis numquam commodi dignissimos natus fuga accusantium neque sed. Hic ratione quaerat sapiente adipisci?",
  },
  {
    id: 2,
    name: "Adolf Hitler",
    job: "Dictator",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Adolf-hitler-106_v-img_16_9_xl_-d31c35f8186ebeb80b0cd843a7c267a0e0c81647.jpg",
    text: "But in the German Empire itself those who were then its rulers saw nothing of what all this meant As if struck blind, they stood beside a corpse and in the very symptoms of decomposition they believed that they recognized the signs of a renewed vitality. In that unhappy alliance between the young German Empire and the illusory Austrian State lay the germ of the World War and also of the final collapse. ",
  },
  {
    id: 3,
    name: "Rick Sanchez",
    job: "Scientist",
    img: "https://progameguides.com/wp-content/uploads/2021/06/fortnite-outfit-Rick-Sanchez.jpg?w=875",
    text: "Now, if you'll excuse me, I've got a quick solo adventure to go on, and this one will not be directed by Ron Howard.",
  },
  {
    id: 4,
    name: "Nikodem Dyzma",
    job: "Premier",
    img: "https://www.dwutygodnik.com/public/media/image/cb2fe3d7.jpg",
    text: "Prawdziwy dżentelmen nie pije przed południem",
  },
  {
    id: 5,
    name: "Pablo Escobar",
    job: "Businessman",
    img: "https://s3-eu-central-1.amazonaws.com/ciekawostki/subjects/392/coverPhoto.jpg",
    text: "I prefer to be in the grave in Colombia than in a jail cell in the United States.",
  },
];
// Select items:
let photo = document.querySelector(".profilePhoto");
let name = document.querySelector(".name");
let job = document.querySelector(".currentPosition");
let description = document.querySelector(".staffDiscription");
// Select Buttons:
let prevBtn = document.querySelector(".previousButton");
let nextBtn = document.querySelector(".NextButton");
let surpriseBtn = document.querySelector(".surpriseMe");
// Set starting item:
let startingItem = 0;
// Load initial item
window.addEventListener("DOMContentLoaded",  ()=> {
  showPerson(startingItem);
});

// fnc based on person:
function showPerson(number) {
  const item = staffInformation[number];
  photo.src = item.img;
  name.innerText = item.name;
  job.innerText = item.job;
  description.innerText = item.text;
}
//initial prev btn
prevBtn.addEventListener("click",  ()=> {
  startingItem--;
  if (startingItem ==-1){
    startingItem =4
  }
  showPerson(startingItem);
  
});

//initial next btn
nextBtn.addEventListener("click",  ()=> {
  startingItem++;
  if (startingItem > 4 ){
    startingItem =0
  }
  showPerson(startingItem);
});
//Get random Person
surpriseBtn.addEventListener('click', ()=>{
    showPerson(startingItem = Math.floor(Math.random()*staffInformation.length))
})