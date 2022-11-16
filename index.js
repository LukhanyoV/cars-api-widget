// show cars template
const carsTemplateText = document.querySelector(".carsText");
const carsTemplate = Handlebars.compile(carsTemplateText.innerText);

const carsTableBody = document.querySelector(".carsTableBody");

// Immediately Invoked Function Expression
(async () => {
    const {data} = await axios.get("https://api-tutor.herokuapp.com/v1/cars");
    carsTableBody.innerHTML = carsTemplate({
        cars: data.map((car, i) => {
            return {
                index: i+1, 
                ...car
            }
        })
    });
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".container").style = "display: block;";
    document.querySelector(".navbar").style = "display: block";
})();


// show colors template
const colorsTemplateText = document.querySelector(".colorsText");
const colorsTemplate = Handlebars.compile(colorsTemplateText.innerText);

const colorsTableBody = document.querySelector(".colorsTableBody");

// Immediately Invoked Function Expression
(async () => {
    const {data} = await axios.get("https://api-tutor.herokuapp.com/v1/colors");
    colorsTableBody.innerHTML = colorsTemplate({
        colors: data.map((color, i) => {
            return {
                id: i+1,
                color
            }
        })
    });
})();


// show brands template
const brandsTemplateText = document.querySelector(".brandsText");
const brandsTemplate = Handlebars.compile(brandsTemplateText.innerText);

const brandsTableBody = document.querySelector(".brandsTableBody");

// Immediately Invoked Function Expression
(async () => {
    const {data} = await axios.get("https://api-tutor.herokuapp.com/v1/makes");
    brandsTableBody.innerHTML = brandsTemplate({
        brands: data.map((brand, i) => {
            return {
                id: i+1,
                brand
            }
        })
    });
})();