//suggestion carousel slider

let userCardContainer = document.querySelector('.suggestion-container');
let nxtArrow = document.querySelector('.next-arrow');
let preArrow = document.querySelector('.pre-arrow');

let containerDimenstions = userCardContainer.getBoundingClientRect();
let containerWidth = containerDimenstions.width;

nxtArrow.addEventListener("click", () =>{
    userCardContainer.scrollLeft += containerWidth;
} )

preArrow.addEventListener("click", () =>{
    userCardContainer.scrollLeft -= containerWidth;
} )



// popup post 
const userPost = [...document.querySelectorAll('.post-container .post')];

let popupPost = document.querySelector('.post-popup');
let closePopup = document.querySelector('.close-overlay');
let popupPostImg = document.querySelector('.post-popup .post .post-img-container img')

userPost.map(post => {
    post.addEventListener('click', () => {
        let img = post.querySelector('.post-img');
        popupPostImg.src = img.src;
        popupPost.classList.add('show');
    })
})


closePopup.addEventListener('click', () => popupPost.classList.remove('show'));


//post

posts = [...document.querySelectorAll(".post-popup .post")];
posts.map(post => addInteractionsToPost(post));
