const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
    image: "../images/toyota-camry.avif",
  },

  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
    image: "./images/honda-civic.jpg",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
    image: "./images/ford-fusion.jpg",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
    image: "./images/nissan-altima.avif",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
    image: "./images/chevy-malibu.jpg",
  },

  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
    image: "./images/volkswagen_passat.jpg",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
    image: "./images/hyundai-elantra.webp",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
    image: "./images/subaru_outback.jpg",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
    image: "./images/mazda-cx5.avif",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
    image: "./images/kia-sorento.png",
  },

  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
    image: "./images/dodge-challenger.avif",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
    image: "./images/cadillac-xt5.webp",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
    image: "./images/jaguar-fpace.jpg",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
    image: "./images/tesla-model.png",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
    image: "./images/porsche-cayenne.avif",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
    image: "./images/lexus-es.webp",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
    image: "./images/BMW-5.webp",
  },
];

// Function to create car cards and add them to the container
function createCarCards() {
  const carContainer = document.getElementById("cargrid");

  usedCars.forEach((car) => {
    car.price = car.price.toLocaleString();
    car.mileage = car.mileage.toLocaleString();
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
              <img src="${car.image}" alt="${car.make} ${car.model} Image">
              <hr>
              <h2>${car.make} ${car.model}</h2>
             
              <p>Price: $${car.price}</p>
              <hr>
               <p>Year: ${car.year}</p>
              <p> Color: ${car.color} </p>
              <p> Mileage: ${car.mileage} </p>
              <p> Miles to the gallon: ${car.gasMileage} </p>
              <button type="button" class="btn btn-outline-primary">More Details</button>
          `;
    carContainer.appendChild(card);
  });
}
createCarCards();

function updateCarCards(
  query,
  colorQuery,
  priceFilter,
  yearFilter,
  mileageFilter
) {
  const carCards = document.querySelectorAll(".car-card");
  carCards.forEach((card) => {
    const carInfo = card.textContent || card.innerText;
    const colorPattern = new RegExp(
      `Color:\\s*(${colorsToMatch.join("|")})`,
      "i"
    );

    const hasQuery = carInfo.toLowerCase().includes(query.toLowerCase());
    const hasColor =
      colorPattern.test(carInfo) &&
      carInfo.toLowerCase().includes(colorQuery.toLowerCase());

    // Extract  information from carInfo
    const priceMatch = carInfo.match(/Price: \$([\d,]+)/);
    const yearMatch = carInfo.match(/Year: (\d{4})/);
    const mileageMatch = carInfo.match(/Mileage: (\d+)/);

    // Check the filters
    const pricePass =
      !priceFilter ||
      (priceMatch && parseInt(priceMatch[1].replace(/,/g, "")) < priceFilter);
    const yearPass =
      !yearFilter || (yearMatch && parseInt(yearMatch[1]) === yearFilter); // Specific year
    const mileagePass =
      !mileageFilter ||
      (mileageMatch &&
        parseInt(mileageMatch[1].replace(/,/g, "")) < mileageFilter);

    // Show the card all criteria
    card.style.display =
      hasQuery && hasColor && pricePass && yearPass && mileagePass
        ? "block"
        : "none";
  });
}

const colorsToMatch = [
  "red",
  "blue",
  "green",
  "white",
  "silver",
  "black",
  "gray",
];

const searchInput = document.getElementById("searchInput");
const searchBox = document.getElementById("searchbox");
const priceFilterInput = document.getElementById("priceFilter");
const yearFilterInput = document.getElementById("yearFilter");
const mileageFilterInput = document.getElementById("mileageFilter");

searchInput.addEventListener("input", () => {
  updateCarCards(
    searchInput.value,
    searchBox.value,
    parseFloat(priceFilterInput.value) || 0,
    parseInt(yearFilterInput.value) || 0,
    parseInt(mileageFilterInput.value) || 0
  );
});

searchBox.addEventListener("input", () => {
  updateCarCards(
    searchInput.value,
    searchBox.value,
    parseFloat(priceFilterInput.value) || 0,
    parseInt(yearFilterInput.value) || 0,
    parseInt(mileageFilterInput.value) || 0
  );
});
priceFilterInput.addEventListener("input", () => {
  updateCarCards(
    searchInput.value,
    searchBox.value,
    parseFloat(priceFilterInput.value) || 0,
    parseInt(yearFilterInput.value) || 0,
    parseInt(mileageFilterInput.value) || 0
  );
});
yearFilterInput.addEventListener("input", () => {
  updateCarCards(
    searchInput.value,
    searchBox.value,
    parseFloat(priceFilterInput.value) || 0,
    parseInt(yearFilterInput.value) || 0,
    parseInt(mileageFilterInput.value) || 0
  );
});
mileageFilterInput.addEventListener("input", () => {
  updateCarCards(
    searchInput.value,
    searchBox.value,
    parseFloat(priceFilterInput.value) || 0,
    parseInt(yearFilterInput.value) || 0,
    parseInt(mileageFilterInput.value) || 0
  );
});
