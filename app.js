const dataofwallpaper=[
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27263.jpg",
        about:"Xiaomi 18 Fold"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27244.jpg",
        about:"Xiaomi 18 Fold"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27240.png",
        about:"Xiaomi 18 Fold"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27223.jpg",
        about:"Xiaomi 18 Fold"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27177.jpg",
        about:"Xiaomi 18 Fold"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27257.jpg",
        about:"Godzilla Minus Zero"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27248.jpg",
        about:"Dragon Ball Super: Beerus"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27242.jpg",
        about:"alwas lias"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27211.png",
        about:"zizustu kisen"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27230.jpeg",
        about:"Q by Aston Martin DB12 S VMF"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27194.png",
        about:"you can do it"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27206.jpg",
        about:"jonson(gta 6)"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27189.jpg",
        about:"Final Fantasy VII Revelation"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27165.jpg",
        about:"Naruto Uzumaki,skeatch"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27266.jpg",
        about:"Avengers: Endgame,8k,movie poster"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27226.jpg",
        about:"Star Wars Zero Company"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27222.jpg",
        about:"Kusuriya no Hitorigoto (The Apothecary Diaries)"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27180.jpg",
        about:"Cadillac V-ONE Concept"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27225.png",
        about:"Onimusha: Way of the Sword"
    },
    {
        Imageurl:"https://4kwallpapers.com/images/walls/thumbs_2t/27152.jpg",
        about:"Teansfromer,minecraft,2026 games"
    },
]


let contenair=document.getElementById("piclist");

function walpappers(arr){
    
    arr.forEach((data)=>{

    let div=document.createElement("div");
    div.className="contenerdiv";
        div.innerHTML=`<img src="${data.Imageurl}">
        <h3>${data.about}<h3>`

        contenair.appendChild(div);


})};
walpappers(dataofwallpaper);


let inputFild=document.querySelector(".text");
inputFild.addEventListener("input",()=>{

    let countskip=false;
   let newUser = dataofwallpaper.filter((user)=>{
    
    //    return user.about.startsWith(inputFild.value);

      let match = user.about.startsWith(inputFild.value);
    if (match) {
      countskip = true; // update if any match
    }
    return match;
  });
      
         document.getElementById("piclist").innerHTML="";
          if (countskip) {
    console.log("jdidi - found");
  } else {
    console.log("jdidi - not found");
  }

       walpappers(newUser)
       
// console.log(newUser);
   });

   

