const gategory = document.querySelector(".cetagory-btn");
const cardContainer = document.querySelector(".card-container");

const gategorys = async () => {
   const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
   const data = await res.json()
   displayCategory(data.categories)
   
   throw new Error('Something is broken!');
   
};

const videos = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    const data = await res.json()
    displayVideo(data.videos)
}

const getTime = (time) => {
    const houre = parseInt(time / 3600)

    return `${houre} houre ago`
}
const displayCategory = (category) => {
    category.forEach((item) => {
      const button =  document.createElement("div")
        button.innerHTML = `
            <button class="btn">${item.category}</button>
        `
        gategory.append(button)
        
    })
    
};
const displayVideo = (video) => {
    video.forEach((item) => {
        const card = document.createElement("div")

    card.innerHTML = `
        <div class="card px-0">
        <figure class="h-[300px]">
            <img
            class="h-full object-cover"
            src=${item.thumbnail}
            alt="Shoes" />
            
        </figure>
            <div class="flex flex-row gap-5 px-2 py-4">
                <div class="w-[50px] h-[50px]">
                    <img class="w-full h-full object-cover rounded-full" src=${item.authors[0].profile_picture}/>
                </div>
                <di>
                        <h2 class="card-title">${item.title}</h2>
                    <div class="flex gap-1 items-center">
                        <h3 class="font-semibold text-gray-500">${item.authors[0].profile_name}</h3>
                    ${item.authors[0].verified === true ? '<img class="w-4 h-4" src="./assets/verified.png"/>': ''}
                    </div>
                    <div class="flex gap-3">
                        <p class="text-gray-400">${item.others.views} views</p>
                        ${
                            item.others.posted_date?.length == 0 ? "" : `<span>${getTime(item.others.posted_date)}</span>`
                            
                        }
                    </div>
                </di>
            </div>
        </div>

    `
    cardContainer.append(card)    
    })
}


gategorys();
videos();
