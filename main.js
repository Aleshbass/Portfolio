let projects= [
 {
     name: "Fitogram",
     link: "https://fitogram.netlify.app",
     src: "01.jpg",
     details: `This projects is basically instagram but specifically for fitness contents. It allows users to sign up and also get a personalized fitness report.
     Ensure to follow the password requirements when signing up.
     Once you are logged in, try to change site theme, like a post, uplaod a picture with a caption too. I used a lot of ES6 syntax on this one.`
 },
 {
     name: "Tech-Educa",
     link: "https://abasscart.netlify.app",
     src: "02.jpg",
     details: `This cart projects includes basic cart function such has clear, remove, add and substract cart item.
     It utilizes localstorage to save cart details. Try adding items to cart. It was my first attempt at using function constructor and it was fun.`
 },
 {
     name: "Light web page",
     link: "https://abasslight.netlify.app",
     src: "03.png",
     details: `This project is an unresponsive desktop landing page. It was one of my first design.
     I love the color choice. I learnt the basic's of CSS throught this project. I used positioning, grid, flexbox`
 },
 {
     name: "Burna Landing page",
     link: "https://burnaboy.netlify.app",
     src: "04.png",
     details: `Feels good to design a simple, responsive landing page for my favourite artist. I used this project to learn new CSS skills 
     like "writing-mode", "webkit-text-stroke", etc. I used an external JS library for the first time too. In additon, I also used the window scrollTo method to return page to default scrool position.`
 },
 {
     name: "Fitogram",
     link: "https://abasscalculator.netlify.app",
     src: "05.jpg",
     details: `This calculator project helped me develop confidence in javascript.`
 }

]

// project function

//get documents from HTML
let project_image= document.querySelector('.picture > img')
let project_name= document.querySelector('.inner-six h4')
let project_details= document.querySelector('.inner-six p')
let project_link= document.querySelector('.inner-six button')
let project_All= [...document.querySelectorAll('.pic-collection span> img')]


project_All.forEach( (project, index)=>{
 project.addEventListener('click', ()=>{
     

    project_All.forEach(project=>{

        project.parentElement.classList.remove('active')
    
    })
    
project.parentElement.classList.add('active')


  project_image.src= projects[index].src;
  project_details.innerHTML= projects[index].details;
  project_link.dataset.link= projects[index].link;
  project_name.innerHTML= projects[index].name



 })



})


//view project
project_link.addEventListener('click', (event)=>{

    let Url= event.target.dataset.link;
    console.log(Url)
    window.open(Url, '_blank')
    
    })








//scroll down function

const contact= document.querySelector('#contact');
const portfolio= document.querySelector('#portfolio');
const myCV= document.querySelector('#CV')


contact.addEventListener('click', ()=>{
 window.scrollTo(0, 2600)

} )
portfolio.addEventListener('click', ()=>{
    window.scrollTo(0, 1600)
   
   } )
   

// social media link

const allSocial= [...document.querySelectorAll('.social span> img')]



allSocial.forEach(social=>{

    social.addEventListener('click', (event)=>{
       let account= event.target.dataset.link;
    //   window.location.href= account
    window.open(account, '_blank');
    })
})



//back to top function


let back_to_top= document.querySelector('#button');

    back_to_top.addEventListener('click', ()=>{
    window.scrollTo(0,0)
    })

  /////////////////////////
  
  

//get email details;
let send= document.querySelector('.page-eight button')
let user_name= document.querySelector('.page-eight input[type="text"]')
let email= document.querySelector('.page-eight input[type="email"]')
let message= document.querySelector('.page-eight textarea')


send.addEventListener('click', (e)=>{
e.preventDefault();

send.innerHTML= "SENDING...";

setTimeout(function(){
    send.innerHTML= "SENT";
    send.style.backgroundColor= "#4cac9f"
}, 2000)

setTimeout(function(){
    send.innerHTML= "SEND";
}, 3000)

    user_name = user_name.value.trim()
    email= email.value.trim()
    message= message.value.trim()
    
 console.log(user_name) 
 console.log(email)   
 console.log(message)   

SendEmail();

})

let viewcv= document.querySelector('#CV')
viewcv.addEventListener('click', ()=>{

    let pdfUrl= "mycv.pdf"
window.open(pdfUrl, '_blank');

})


// send email

 function SendEmail(){

    let details={
   from_name: user_name,
   to_name:"Abass Ademola",
   from_email:email,
   message: message

    };
    emailjs.send("Abass1997", "Abass1997", details)
    .then(function(res){

        console.log(res)
    })


}

 

