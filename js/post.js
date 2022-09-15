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

//post like

let likeBtn = document.querySelector('.like-btn');
let likeImg = document.querySelector('.like-icon');

likeBtn.addEventListener("click", () => {
    if(likeBtn.src.includes('nofill')){
        likeImg.classList.add('show');
    }
    changeIcon(likeBtn);
    
    setTimeout(() => {
        likeImg.classList.remove('show');
    }, 3000); 
})