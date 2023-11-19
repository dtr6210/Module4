function addCard(
  title = "Untitled",
  text = "Missing text",
  url = "missing image"
) {
  // clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

  // populate the template
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  template.querySelector(".card-url").innerHTML = url;

  //create image
  const image = document.createElement("img");
  image.src = url;
  image.alt = title;
  
// append image to the template
  template.querySelector(".card-url").appendChild(image);

  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);
}

// addCard("First title", "Cool Beans");
// addCard("Second title", "Cooler Beans");
// addCard("Third title", "Cooolest Beans");

const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
  { name: "carol", age: 41 },
  { name: "ted", age: 38 },
  { name: "sean", age: 40 },
];

// data.forEach((person) => {
//   const title = person.name;
//   const text = `Age: ${person.age}`;

//   addCard(title, text);
// });

const artist = [
  {
    name: "Van Gogh",
    portfolio: [
      {
        title: "portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
      },
      {
        title: "sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
      },
    ],
  },
  {
    name: "Da Vinci",
    portfolio: [
      {
        title: "Mona Lisa",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
      },
      {
        title: "The Last Supper",
        url: "https://smarthistory.org/leonardo-last-supper/",
      },
    ],
  },
];

artist.forEach((person) => {
  person.portfolio.forEach((item) => {
    const title = person.name;
    const text = item.title;
    const url = item.url;
    addCard(title, text, url);
  });
});
