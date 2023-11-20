let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

function getNews() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(news);
    }, 5000);
  });
}

function addCard(theNews) {
  const template = document .getElementById("news-template").content.cloneNode(true);

  template.querySelector(".card-title").innerText = theNews.title;
  template.querySelector(".card-text").innerText = theNews.content;

  document.querySelector("#news-list").appendChild(template);
}

function submitNews() {
    const newsTitle = document.getElementById("newsTitle").value;
    const newsContent = document.getElementById("newsContent").value;
  
    if (newsTitle && newsContent) {
      const newNewsItem = {
        id: news.length + 1,
        title: newsTitle,
        content: newsContent,
      };
  
      news.push(newNewsItem);
  
      // Clear form fields
      document.getElementById("newsTitle").value = "";
      document.getElementById("newsContent").value = "";
  
      // Add the new news item to the page
      addCard(newNewsItem);
    } else {
      alert("Please fill in both title and content fields.");
    }
  }


// get data asynchronously, then use it to populate a template

getNews().then((moreNews) => moreNews.forEach((theNews) => addCard(theNews)));
 