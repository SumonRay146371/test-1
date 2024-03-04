// duita kaj baki 
// all show kora loading spiner

let cardContainer = document.getElementById("cardContainer");
const cardData = async (categoryName) => {
  cardContainer.textContent = "";
  let loading = document.getElementById("loading");
  loading.classList.remove("hidden");
  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`
  );
  let data = await response.json();
  let allData = data.posts;
  // console.log(allData);
  allData.forEach((item) => {
    // console.log(item);

    let div = document.createElement("div");
    div.classList = `bg-[#797DFC1A] lg:w-[880px] rounded-lg flex flex-col lg:flex-row my-5 p-4  lg:space-x-6`;
    // parent
    div.innerHTML = `
        <div class="  lg:w-28  lg:h-28  text-center  lg:rounded-[40px]   ">
   <div class="relative flex flex-col lg:flex-row items-center lg:items-start justify-center"> 
         <div class="lg:absolute  lg:right-0  ml-44 ${
          item.isActive ? "bg-green-400" : "bg-red-400"}    z-10 w-3 h-3 rounded-lg flex ">
          </div>  
         
        <img class="w-48 mx-auto rounded-full mb-8" src="${
          item.image
        }" alt="">
        </div>
   </div>
      
        <div class=" w-full">
            <div class="">
             <div class="flex gap-36 ">
             <h1 class=" text-[16px]">#${
              item.category
            } </h1>
            <h1>
             <span class="">author: <span> ${item.author.name}</span> </span> </h1> 
             </div>
            </div>
            <h1 class=" text-[20px] text-gray-black my-3 ">${
              item?.title || "0"
            }</h1>
            <p class="pb-3 mb-3  border-b-2 border-dashed"> ${
              item.description
            } </p>
   <div class="flex gap-28 mr-14 items-center justify-center
   
  w-[100%]">
    <div class="w-[80%]">
        <i class="fa-regular fa-message mr-5  "><span class="ml-2">${
          item.comment_count
        }</span></i>
        <i class="fa-regular fa-eye mr-5 "> <span class="ml-2">${
          item?.view_count || "0"
        }</span> </i>
        <i class="fa-regular fa-clock mr-5 "><span class="ml-2">${
          item?.posted_time || "0"
        }</span></i>
    </div>
    <div class=" bg-green-700 w-6 rounded-full flex flex-col items-center justify-center">
        <button class="" onclick="parseValue('${item.title}','${item.view_count}');
      addValue(true); parseValue3('Introduction to Python: A Beginner\'s Guide', '2650')"><i  class="rounded-full fa-solid fa-envelope" style="color: #63E6BE;"></i></button>
    </div>
   </div>
        </div>
     </div>  
        `;

    cardContainer.appendChild(div);
  });
  loading.classList.add("hidden");
};
// ****************************
// counterApp()

const parseValue3=(data)=>{
  console.log(data);
}


let sum = 0;
const addValue = (f) => {
  let count = document.getElementById("count");
  sum = sum + 1;
  count.innerHTML = sum;
  console.log(sum);
};


const parseValue = (item , item2) => {
  const numericValue = item2.replace(/'/g, "&#39;")
  console.log(numericValue);
  const showDetails = document.getElementById("showDetails");
  let div2 = document.createElement("div");
  div2.innerHTML = `
<div class="bg-slate-600 mt-4 p-4 rounded-md flex items-center justify-between mb-4">
  <div class="flex flex-col items-center justify-center">
<h3>${item}</h3>
  </div>
  <div class="flex flex-col items-center justify-center">
    <i class="mt-5 fa-regular fa-eye"
      ><span id="view" class="ml-2">${item2}</span></i
    >
  </div>
`;
  showDetails.appendChild(div2);
};
// ***************************************************************

let convertNumber = (id) => {
  let convert = document.getElementById(id);
  let result = parseInt(convert);
  return result;
};

// const parseValue2 = (item) => {
//   let view = document.getElementById("view");
//   view.innerHTML = `${item}`;
// };
// ************************
const handlebtn = () => {
  let searchFeild = document.getElementById("inputTxt");
  let searchText = searchFeild.value;
  // console.log(searchFeild);
  cardData(searchText);
};
cardData('comedy');

// **************************************************************************

// letest Post

const showLetestPost=async()=>{
  let loading = document.getElementById("loading2");

loading.classList.remove("hidden");

const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
const data=await response.json()
const allData=data
// console.log(allData);

allData.forEach(item=>{
  let card = document.getElementById('card')
  let div=document.createElement('div')
  div.innerHTML=`
  <div class=" rounded-lg  bg-slate-200  p-8">

  <div class="bg-neutral-300 w-full rounded-xl ">
    <img class="rounded-xl " src="${item?.cover_image}" alt="">
  </div>
  <h1 class="text-xl my-3"><i class="fa-regular fa-calendar"></i> ${item?.author?.posted_date || "No Publish Date"}</h1>
  <h1>${item.title}</h1>
      <p class="my-3">${item.description}</p>
 <div class="flex gap-5">
<div class="w-14 rounded-lg ">     
  <img class="rounded-full" src="${item?.profile_image}" alt="">
</div>
<div class="">
  <h1>${item?.author?.name}</h1>
  <p>${item?.author?.designation || 'unknown'}</p>
</div>

 </div>
</div>

  `
  card.appendChild(div)
})
loading.classList.add("hidden");


}
showLetestPost()

// "No Publish Date"
