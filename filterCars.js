const brandText = document.querySelector(".brandText");
const brandTemplate = Handlebars.compile(brandText.innerText);

const colorText = document.querySelector(".colorText");
const colorTemplate = Handlebars.compile(colorText.innerText);

const brands = document.querySelector(".brands");
const colors = document.querySelector(".colors");

// Immediately Invoked Function Expression
(async () => {
    const { data: colorss } = await axios.get("https://api-tutor.herokuapp.com/v1/colors");
    const { data: brandss } = await axios.get("https://api-tutor.herokuapp.com/v1/makes");

    brands.innerHTML = brandTemplate({
        brands: brandss
    });
    colors.innerHTML = colorTemplate({
        colors: colorss
    });

    document.querySelector(".loading").style.display = "none";
    document.querySelector(".container").style = "display: flex; justify-content: space-around;";
})();

// show the cars
const displayCars = document.querySelector(".display-cars");
const carsText = document.querySelector(".carsText");
const carsTemplate = Handlebars.compile(carsText.innerText);

document.querySelector(".show-cars").addEventListener("click", async () => {
    let dataURL = "https://api-tutor.herokuapp.com/v1/cars";
    if (brands.value) dataURL += "/make/" + brands.value;
    if (colors.value) dataURL += "/color/" + colors.value;
    const { data } = await axios.get(dataURL);
    displayCars.innerHTML = carsTemplate({
        cars: data.map((car, i) => {
            return {
                index: i+1, 
                ...car
            }
        })
    });
});

