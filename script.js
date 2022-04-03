let likeButton = document.querySelector('.like_button');
let likeIcon = document.querySelector('#icon');
let likeCount = document.querySelector('#count');
let contextBox = document.getElementsByClassName('contextBox');

for(let i=0;i<contextBox.length;i++) {
    contextBox[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}


let count = 0;
let clicked = false;
likeButton.addEventListener('click', () => {
    if(!clicked) {
        clicked = true;
        count++;
        likeIcon.innerHTML = ` <i class="fas fa-thumbs-up"></i>`
        likeCount.innerText  = count;
    } else {
        clicked = false;
        count--;
        likeIcon.innerHTML = ` <i class="far fa-thumbs-up"></i>`
        likeCount.innerText  = count;
    }
})