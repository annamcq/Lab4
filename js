let posts1 = {
    logoimage:"./images/logo.png", 
    username: "cbcnews",
    postImage:"./lake.jpg"
    
}


var posts = new Array (3);
posts[0] = "./images/cbc.png";
posts[1] = "./images/heart.png";
posts[2] = "./images/lake.jpg";


var posts1 = [
    "./images/cbc.png",
    "./images/lake.jpg",
    "./images/heart.png", 

]

var posts2 = [
    "./images/cbc.png",
    "./images/lake.jpg",
    "./images/heart.png", 

]

let newpost  = document.createElement ("div");
newpost.innerHTML = `<header>
<img src="/images/cbc.png" alt="cbc">
<h1> cbcnews </h1>
</header>
<main>
<div class="imgcontainer">
    <img src="/images/lake.jpg" alt="lake">
</div>
<footer>
    <div class = "heart">
        <img src="/images/heart.png">
    </div>
    <div>
    </div>
    <div>
    </div>
</footer>
</main>`;

document.body.appendChild (newpost);


