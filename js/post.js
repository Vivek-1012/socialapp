let heartIcon = document.querySelector('.activity-log .nav-icon');
let activityContainer = document.querySelector('.activity-container');

heartIcon.addEventListener("click", () => {
    activityContainer.classList.toggle('hide');
    let src = heartIcon.src.split('-')[0];
    if(image/heart.src.includes('nofill')){
        heartIcon.src = `${src}-fill.png`;

    }else{
        heartIcon.src = `${src}-nofill.png`;
    }

})