const countryCard=document.querySelector(".countries-container")
const search=document.getElementById("search")
var completedata;

fetch("https://restcountries.com/v3.1/all/")
.then(res=>res.json())
.then(data=>{
    completedata=data;
    console.log(data)
    let answer=""
    data.forEach(country => {
        
       answer+= `<a href="./country.html?name=${country.name.common}" class="country-card">
                <img src=${country.flags.svg} alt="${country.name.common}'s flag"/>
                <div class="card-text">
                    <h2 class="card-title">${country.name.common}</h2>
                    <p><b>Capital: </b>${country.capital}</p> 
                    <p><b>Population:</b>${country.population.toLocaleString("en-IN")}</p>
                    <p><b>Region: </b>${country.region}</p>                                     
                </div></a>`
    });
    countryCard.innerHTML=answer;    
})
search.addEventListener("input",(e)=>{
    const filtered_data=completedata.filter(obj=>(obj.name.common.toLowerCase()).includes(e.target.value.toLowerCase()))
console.log(filtered_data)
let answer=""
    filtered_data.forEach(country => {
        
       answer+= `<a href="./country.html?name=${country.name.common}" class="country-card">
                <img src=${country.flags.svg} alt="${country.name.common}'s flag"/>
                <div class="card-text">
                    <h2 class="card-title">${country.name.common}</h2>
                    <p><b>Capital: </b>${country.capital}</p> 
                    <p><b>Population:</b>${country.population.toLocaleString("en-IN")}</p>
                    <p><b>Region: </b>${country.region}</p>                                     
                </div></a>`
    });
    countryCard.innerHTML=answer;    

})


const select=document.querySelector("#Filter-by-region")
select.addEventListener("input",(e)=>{
   console.log(e.target.value)
   fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
.then(res=>res.json())
.then(data=>{
   console.log(data)
   let answer=""
   data.forEach(country => {
       
      answer+= `<a href="./country.html?name=${country.name.common}" class="country-card">
               <img src=${country.flags.svg} alt="${country.name.common}'s flag"/>
               <div class="card-text">
                   <h2 class="card-title">${country.name.common}</h2>
                   <p><b>Capital: </b>${country.capital}</p> 
                   <p><b>Population:</b>${country.population.toLocaleString("en-IN")}</p>
                   <p><b>Region: </b>${country.region}</p>                                     
               </div></a>`
   });
   countryCard.innerHTML=answer;
})
})
const themechange=document.querySelector(".theme-change");
themechange.addEventListener("click",()=>{
    document.body.classList.toggle('dark');
}) 