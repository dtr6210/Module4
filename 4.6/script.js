document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content loaded");

    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((response) => {
        console.log(response.data);
        const posts = response.data;
        const postContainer = document.getElementById("post-container");

        posts.forEach((post) => {
            const card = document.createElement("div");
            card.className = "card";
            card.style = "width: 18rem";

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.textContent = post.title;
          

            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.textContent = post.body;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            card.appendChild(cardBody);

            postContainer.appendChild(card);
        })
    })

})