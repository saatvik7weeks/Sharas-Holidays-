// Global Searchbar JS

const searchInput = document.getElementById("global-search");
const searchSubmit = document.getElementById("search-submit");
let searchValue = "";

const searchExtract = searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value;
  searchValue.toLowerCase();
  

});

const clickListener = searchSubmit.addEventListener("click", () => {
    const searchValueFinal = searchValue.toLowerCase(); 
    const potentialRoutes = ["kerela", "mumbai", "goa", "himachal", "uttar pradesh", "odisha", "hyderabad", "rajasthan", "gujarat", "kashmir", "arunachal pradesh", "meghalaya", "andaman"]; 
  
    if (potentialRoutes.includes(searchValueFinal)) {
      window.location.href = `shras-domestic.html?state=${searchValueFinal}`;
    } else {
      window.location.href = 'error.html'
      
    }
  });