var Xclick = document.querySelector("#nav #lines");
var menuTop = document.getElementById("menu");
let flag = 0;
Xclick.addEventListener("click",function () {
  if(flag == 0)
  {
  flag = 1;
  menuTop.style.top = "0%";
  }
  else{
    menuTop.style.top = "-100%";
    flag = 0;
  }
})
var tl = gsap.timeline();
tl.from("#page1 h1",{
  y:100,
  duration:0.8,
  opacity:0
}).from("#page1 h1 span",{
  duration:0.5,
  opacity:0
})



gsap.from("#page2 h1",{
  y:200,
  opacity:0,
   scrollTrigger:{
     trigger:"#page2 h1",
     scroller:"body",
     start:"top 90%",
     end:"top 85%",
     scrub:3
   }
 })

 gsap.from("#page3 #l1",{
  y:200,
  opacity:0,
   scrollTrigger:{
     trigger:"#page3 #l1",
     scroller:"body",
     start:"top 98%",
     end:"top 95%",
     scrub:3
   }
 })

 gsap.from("#page3 #l2",{
  y:200,
  opacity:0,
   scrollTrigger:{
     trigger:"#page3 #l2",
     scroller:"body",
     start:"top 95%",
     end:"top 92%",
     scrub:3
   }
 })

 gsap.from("#page3 #l3",{
  y:200,
  opacity:0,
   scrollTrigger:{
     trigger:"#page3 #l3",
     scroller:"body",
     start:"top 92%",
     end:"top 89%",
     scrub:3
   }
 })

  
 gsap.from("#page2 .img:nth-child(1) img:nth-child(even)",{
  y:200,
  opacity:0,
   scrollTrigger:{
     trigger:"#page2 .img img:nth-child(even)",
     scroller:"body",
     start:"top 92%",
     end:"top 88%",
     scrub:3
   }
 })

 gsap.from("#page2 .img:nth-child(1) img:nth-child(odd)",{
  y:200,
  opacity:0,
   scrollTrigger:{
     trigger:"#page2 .img img:nth-child(odd)",
     scroller:"body",
     start:"top 89%",
     end:"top 84%",
     scrub:3
   }
 })

 gsap.from("#page2 .img:nth-child(2) img:nth-child(odd)",{
  y:200,
  opacity:0,
   scrollTrigger:{
     trigger:"#page2 .img:nth-child(2) img:nth-child(odd)",
     scroller:"body",
     start:"top 85%",
     end:"top 80%",
     scrub:3
   }
 })

 gsap.from("#page2 .img:nth-child(2) img:nth-child(2)",{
  y:200,
  opacity:0,
   scrollTrigger:{
     trigger:"#page2 .img:nth-child(2) img:nth-child(2)",
     scroller:"body",
     start:"top 80%",
     end:"top 75%",
     scrub:3
   }
 })
 gsap.from("#page2 .img:nth-child(3) img",{
  y:200,
  opacity:0,
   scrollTrigger:{
     trigger:"#page2 .img:nth-child(3) img",
     scroller:"body",
     start:"top 90%",
     end:"top 85%",
     scrub:3
   }
 })


 gsap.from("#scroller #li1,#li3",{
  transform:"translateX(-25%)",
  duration:0.5,
  scrollTrigger:{
    trigger:"#scroller #li1,#li3",
    scroller:"body",
    start:"top 98%",
    end:"top 10%",
    scrub:3
  }
})

gsap.from("#scroller #li2,#li4",{
  transform:"translateX(30%)",
  duration:0.5,
  scrollTrigger:{
    trigger:"#scroller #li2,#li4",
    scroller:"body",
    start:"top 98%",
    end:"top 10%",
    scrub:3
  }
})

const scale = (ele)=>{
  ele.style.zIndex="99";
  ele.style.width="27vw";
  ele.style.height="42vh";
  ele.style.padding="2.5rem"
  ele.style.backgroundColor="rgb(200,200,50)";
}
//array of Dummy Students Name 
const student_names = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Davis",
  "Diana Evans",
  "Evan Foster",
  "Fiona Garcia",
  "George Harris",
  "Hannah Ives",
  "Isaac Johnson"
]
const names = document.querySelectorAll("#cards .ele h3");
for(let i = 0; i<names.length; i++){
  names[i].textContent = `${student_names[i]}`;
}

const messages = [
  "The software training program here has been outstanding.I've gained significant confidence in my software development skills",
  "The software training program here has been outstanding.Instructors provided clear and thorough explanations of complex topics.",
  "I appreciate the focus on practical, real-world applications.The software training program here has been outstanding.",
  "The course structure was well-organized and easy to follow.",
  "I've gained significant confidence in my software development skills.The software training program here has been outstanding.",
  "The support from faculty and peers made a big difference in my learning experience.The software training program here has been outstanding.",
  "Access to up-to-date tools and technologies was a huge advantage.The software training program here has been outstanding.",
  "This training has definitely prepared me for a career in software development.The software training program here has been outstanding.",
  "I highly recommend this institution to anyone looking to enhance their software skills.The software training program here has been outstanding."
];

const message = document.querySelectorAll("#cards .ele .mess");
for(let i=0; i<messages.length; i++)
{
  message[i].textContent = `${messages[i]}`;
}

const studentImages = [
  "icons/studentsIcon.jpg",
  "icons/studentsIcon.jpg",
  "icons/studentsIcon.jpg",
  "icons/studentsIcon.jpg",
  "icons/studentsIcon.jpg",
  "icons/studentsIcon.jpg",
  "icons/studentsIcon.jpg",
  "icons/studentsIcon.jpg",
  "icons/studentsIcon.jpg"
];
const pic = document.querySelectorAll("#cards .ele img")
for(let i=0; i<studentImages.length; i++)
  {
    pic[i].setAttribute("src",`${studentImages[i]}`);
  }

gsap.from("#page4 #cards #scrll",{
  transform:"translateX(-30%)",
  duration:0.5,
  scrollTrigger:{
    trigger:"#page4 #cards #scrll",
    scroller:"body",
    start:"top 98%",
    end:"top 10%",
    scrub:3
  }
})

//page5
gsap.from("#page5 #part1 #l1",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#page5 #part1 #l1",
    scroller:"body",
   markers:true,
    start:"top 95%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from("#page5 #part1 #l2",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#page5 #part1 #l2",
    scroller:"body",
    start:"top 95%",
    end:"top 40%",
    scrub:3
  }
})

gsap.from("#page5 #part1 p",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#page5 #part1 p",
    scroller:"body",
    start:"top 95%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from("#page5 #wbtn",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#page5 #wbtn",
    scroller:"body",
    start:"top 95%",
    end:"top 80%",
    scrub:3
  }
})