const handleCategories =async()=>{
const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
const data = await res.json();

const categoryContainer = document.getElementById('category-container');

// console.log(data.data)
data.data.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.innerHTML = `
    <a class="tab bg-gray-100 rounded hover:bg-red-400 mr-4  flex justify-center">${category.category}</a>   
    `
    categoryContainer.appendChild(categoryDiv);
});
}
handleCategories()