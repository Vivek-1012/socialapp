let heartIcon = document.querySelector('.activity-log .nav-icon');
let activityContainer = document.querySelector('.activity-container');

heartIcon.addEventListener("click", () => {
    activityContainer.classList.toggle('hide');
    changeIcon(heartIcon);    

})

const changeIcon = (icon) => {
    let src = icon.src.split('-')[0];
    if(icon.src.includes('nofill')){
        icon.src = `${src}-fill.png`;

    }else{
        icon.src = `${src}-nofill.png`;
    }
}

const addInteractionsToPost = (post) => {
    //post like

let likeBtn = post.querySelector('.like-btn');
let likeImg = post.querySelector('.like-icon');

likeBtn.addEventListener('click', () => {
    if(likeBtn.src.includes('nofill')){
        likeImg.classList.add('show');
        if(shareBTn.src.includes('-fill')){
            shareBTn.click();
        }
    }
    changeIcon(likeBtn);

    setTimeout(() => {
        likeImg.classList.remove('show');
    }, 3000); 
})


// post share 


let shareBTn = post.querySelector(".send-btn");
let shareWindow = post.querySelector(".share-window")

shareBTn.addEventListener("click", ()=>{
    shareWindow.classList.toggle('active');
    changeIcon(shareBTn)

})

let postLink = post.querySelector("#share-link").value ;
let copyLinkbtn = post.querySelector(".copy-btn");

copyLinkbtn.addEventListener("click", ()=> {
  navigator.clipboard.writeText(postLink).then(()=> {
    shareBTn.click();
  })
})

}

// post

let posts = [...document.querySelectorAll(".post")];
posts.map(post => addInteractionsToPost(post));










