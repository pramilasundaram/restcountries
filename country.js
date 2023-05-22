const countryName = (new URLSearchParams(location.search).get('name'));

const countryDetails = document.querySelector(".country-details");
const borders=document.querySelector("#border-country")
var bordercountries = "";
let str = "";  
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(data => data.json())
    .then(res => {      
        // console.log(res[0])
        // console.log(Object.values(res[0].name.nativeName)[0].common)
        // console.log(Object.values(res[0].languages).map(currency=>currency.name).join(", "))
        str += `<img src=${res[0].flags.svg} alt="flag">
        <div class="details-text-container">
              <h1>${res[0].name.common}</h1>            
                <div class="details-text">
                    <div class="text1">
                       <p><b>Native Name: </b>${res[0].name.nativeName ? Object.values(res[0].name.nativeName)[0].common : res[0].name.common}</p>
                       <p><b>Capital: </b>${res[0].capital ? res[0].capital : ""}</p>
                       <p><b>Population: </b>${res[0].population}</p>
                       <p><b>Region: </b>${res[0].region}</p>
                       <p><b>Sub Region: </b>${res[0].subregion ? res[0].subregion : ""}</p>
                    </div>
                    <div class="text2">
                       <p><b>Top Level Domain: </b>${res[0].tld}</p>
                       <p><b>Currency: </b>${res[0].currencies ? Object.values(res[0].currencies).map(currency => currency.name).join(", ") : ""}</p>
                       <p><b>Language: </b>${res[0].languages ? Object.values(res[0].languages).join(", ") : ""}</p>
                    </div>                
                </div> 
                <div class="border-countries">
                    <div>
                        <p><b>Border Countries:</b></p>
                    </div>&nbsp;&nbsp;
                    <div>
                        <span id="bc"></span>
                    </div>
                </div>
        </div>`                     
        countryDetails.innerHTML = str; 
          let bc=document.getElementById("bc")    
        if (res[0].borders) {
            res[0].borders.forEach(element => {
                fetch(`https://restcountries.com/v3.1/alpha/${element}`)
                    .then(data => data.json())
                    .then(([res]) => {
                        // console.log(res.name.common)
                        bordercountries += `<a href="./country.html?name=${res.name.common}">${res.name.common}</a>`
                        bc.innerHTML=(bordercountries)
                    })
            });
        }

    })

