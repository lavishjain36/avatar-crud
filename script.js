//Build an html elements Header part
document.body.innerHTML = `<div class="heading-container">
<h1>Brewerys List</h1>
<img src="https://static.thenounproject.com/png/1976045-200.png" alt="brew" class="icon" width="50px" height="50px" />
</div>
<div id="mainContainer" class="main-container"></div>`;

const getData = async () => {
  try {
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const breweries = await data.json();
    mainContainer.innerHTML = "";
    breweries.forEach((brewery) => {
      displayData(brewery);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();
const displayData = (obj) => {
  mainContainer.innerHTML += `
  <div class="container">
  <h3 class="blue">Breweries Name:<span>${obj.name}</span></h3>
  <p class="para blue">Breweries Type:<span>${obj.brewery_type}</span></p>
  <p class="para blue">Breweries Street:<span>${obj.street}</span></p>
  <p class="para blue">Breweries City:<span>${obj.city}</span></p>
  <p class="para blue">Breweries State:<span>${obj.state}</span></p>
  <p class="para blue">Breweries Phone:<span>${obj.phone}</span></p>
  <p class="para blue">Breweries Website:<span>${obj.website_url}</span></p>
  <p class="para blue">Breweries Country:<span>${obj.country}</span></p>
  </div>
  `;
};
