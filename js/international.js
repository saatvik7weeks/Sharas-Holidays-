// Searchbar JS

const searchInput = document.getElementById("search-bar");
const searchSubmit = document.getElementById("search-submit");
let searchValue = "";

const searchExtract = searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value;
  searchValue.toLowerCase();
  // console.log(searchValue)

});

try {
  const clickListener = searchSubmit.addEventListener("click", () => {
    const searchValueFinal = searchValue.toLowerCase(); 
    const potentialRoutes = ["krabi", "singapore", "bangkok"]; 
  
    if (potentialRoutes.includes(searchValueFinal)) {
      window.location.href = `../shras-domestic.html?state=${searchValueFinal}`;
    } else {
      window.location.href = '../error.html'
      
    }
  });
}catch(err){
  console.log(err)
}