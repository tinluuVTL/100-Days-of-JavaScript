const searchForm = document.getElementById("searchForm")
const searchBox = document.getElementById("searchBox")
const searchResult = document.getElementById("searchResult")
const showMore = document.getElementById("showMore")

accessKey = ""; //Your Unsplash API Key 
let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url)
    const data = await response.json();
    // console.log(data);

    if(page==1){
        searchResult.innerHTML=""
    }

    const results = data.results;
    results.map((result)=>{
        const image  = document.createElement('img')
        image.src=result.urls.small;
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMore.style.display="block";

}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page= 1;
    searchImage();
})

showMore.addEventListener("click", ()=> {
    page++;
    searchImage();
})