import  data from './data.js';

const app = document.querySelector(".app");

data.forEach(element => {
    app.innerHTML += `
    <div class="card">
        <img class="card-img" src="${element.img}">
        <div class="card-info">
            <h1 class="card-title">${element.title}</h1>
            <p class="card-description">${element.description}
            </p>
            <a href="#" class="card-btn">Read more</a>
        </div>
    </div>
    `
});