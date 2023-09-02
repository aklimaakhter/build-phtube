const handleCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    

    const categoryContainer = document.getElementById('category-container');

    console.log(data.data)
    data.data.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
    <a onclick="handleLoadCategory ('${category.category_id}')" class="tab bg-gray-100 rounded hover:bg-red-400 mr-4  flex justify-center">${category.category}</a>   
    `
        categoryContainer.appendChild(categoryDiv);
    });
}


const handleLoadCategory = async (categoryID) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryID}`)
    const data = await res.json()
    console.log(data.data)
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    data.data.forEach(categories => {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML =`
            <div class="card  bg-base-100 shadow-xl h-[350px]">
                <figure class="px-10 pt-10">
                    <img src="${categories.thumbnail}"class ="h-[150px]" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body">
                    <div class ="flex justify-center  space-y-4">
                    <div class ="mr-4">
                        <img src="${categories?.authors[0]?.profile_picture}" class="h-[50px] w-[50px] rounded-full" alt=""/>
                    </div>
                    <div class ="text-sm">
                        <h1>${categories.title}</h1>
                        <div class="flex justify-center items-center">
                            <h5>${categories?.authors[0]?.profile_name}</h5>
                            <p>${categories.authors[0].verified ? "" : ''}</p>
                        </div>
                        <p>${categories.others.views} <span>viwes</span></p>
                    </div>
                    </div>
                </div>
            </div>
`

        cardContainer.appendChild(cardDiv);
    })
}
handleCategories()
handleLoadCategory('1000')


// body{
//     ${item.authors[0].verified ? "<img src='./images/download.png' class=' w-5 h-5' >" : ""}


// "https://img.icons8.com/?size=2x&id=98A4yZTt9abw&format=png"