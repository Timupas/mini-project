const form = document.getElementById('search-form');
const list = document.querySelector('.gallery');
const btnLoad = document.querySelector('.load')

const API_KEY = "47446943-b17379f6931e486b133594f5d";
const PER_PAGE = 12;

let page = 1;
let searchText = "";

const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&per_page=12&key=${API_KEY}`;

fetch(url).then((res) => res.json()).then((res) => console.log(res.hits));

async function getImg() {
    try{
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&per_page=12&key=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();
        return data.hits
    } catch(error) {
        console.log('Error');
        return []
    }
}
getImg().then((res) => console.log(res));

async function renderImg(arr) {
    const item = arr.map((element) => {
        return ``
    })
}

