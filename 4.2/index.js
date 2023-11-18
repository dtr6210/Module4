function addCard(title = "Untitled", text = "Missing text", url = "missing image") {
  // clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);



  // populate the template
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  template.querySelector(".card-url").innerText = url;

  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);

  const image = document.createElement('img');
  image.src = item.url;
  image.alt = item.title;
  template.appendChild(image);

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


const artist = [{
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
            url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg"
        },
        {
            title: "The Last Supper",
            url: "https://smarthistory.org/leonardo-last-supper/"
        }
    ]
}
];


artist.forEach((person) => {
    const title = person.name;
    const text = person.portfolio[{}];
    const url = person.url;
      addCard(title, text, url);
  });