import { callAPI } from "./fetchCall.js";

// const prevPageLink = document.getElementById('prevPage');
// const nextPageLink = document.getElementById('nextPage');
// const pageNumber = document.getElementById('pageNumber');

// let currentPage = 1;

// function callFetch(currentPage) {
//     const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ccca2ef36527439eba7075b9534e24a1&pagesize=10&page=${currentPage}`;
//     const options = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//     // const output = callAPI(url, options);
//     const data = 
//     output.then(function(data) {
//         console.log(data);
//         renderUI(data);
//     }).catch(function(error) {
//         console.error('Error fetching data:', error);
//     });
// }

// function updatePageNumber() {
//     pageNumber.textContent = currentPage;
// }

// function goToPreviousPage(event) {
//     event.preventDefault();
//     if (currentPage > 1) {
//         currentPage--;
//         callFetch(currentPage);
//         updatePageNumber();
//     }
// }

// function goToNextPage(event) {
//     event.preventDefault();
//     currentPage++;
//     callFetch(currentPage);
//     updatePageNumber();
// }

// prevPageLink.addEventListener('click', goToPreviousPage);
// nextPageLink.addEventListener('click', goToNextPage);

// callFetch(1);

const data = {
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Newsonair.gov.in"
            },
            "author": null,
            "title": "India receives 'Measles and Rubella Champion' award - News On AIR",
            "description": "New on Air : Regional News, Latest News, Top stories,  Mann Ki Baat, Breaking News, National and International News, Employment News, Sports, Business News.",
            "url": "https://newsonair.gov.in",
            "urlToImage": null,
            "publishedAt": "2024-03-08T12:14:33Z",
            "content": "Home Minister Amit Shah launches National Cooperative Database in Delhi\r\nGovt sanctions projects of over Rs 7,000 cr under PM Janjati Adivasi Nyaya Maha Abhiyan in last 3 months \r\nUnion Minister Nara… [+632 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "\"It Is Not Right At All\": Shubman Gill's Father Unhappy With India Star's New Role | Cricket News - NDTV Sports",
            "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com/rss/articles/CBMigwFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pbmRpYS12cy1lbmdsYW5kLTIwMjQvaXQtaXMtbm90LXJpZ2h0LWF0LWFsbC1zaHVibWFuLWdpbGxzLWZhdGhlci11bmhhcHB5LXdpdGgtaW5kaWEtc3RhcnMtbmV3LXJvbGUtNTE5OTUzNdIBAA",
            "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
            "publishedAt": "2024-03-08T11:51:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "Nandini Yadav",
            "title": "Nothing Phone 2a launched in India: Top specs, India price, bank offers, and key features - India Today",
            "description": "The Nothing Phone 2a was launched in India this week The smartphone comes with some power-packed specifications like Mediatek Dimensity 7200 Pro chipset up to 12 GB RAM and 5000 mAh battery",
            "url": "https://www.indiatoday.in/technology/news/story/nothing-phone-2a-launched-in-india-top-specs-india-price-bank-offers-and-key-features-2512330-2024-03-08",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/nothing-phone-2a-081724590-16x9_0.jpg?VersionId=lI601X48pB_7kA_XX9zLfH5q9dhX2cFA",
            "publishedAt": "2024-03-08T10:19:27Z",
            "content": "Nothing launched its third smartphone in the market this week –– the Nothing Phone 2a. Along with featuring the signature Nothing transparent design, a glyph interface and the minimalist Nothing OS U… [+2260 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "BJP's ‘minority' jibe amid Rahul Gandhi's LS re-election bid from Wayanad - Hindustan Times",
            "description": "There is speculation that Rahul Gandhi may also fight from Uttar Pradesh’s Amethi. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/bjps-minority-jibe-amid-rahul-gandhis-lok-sabha-re-election-bid-from-wayanad-101709890856580.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/08/1600x900/Rahul_Gandhi_1709892565913_1709892566117.JPG",
            "publishedAt": "2024-03-08T10:14:04Z",
            "content": "The Bharatiya Janata Party (BJP) on Friday reacted to Congress leader Rahul Gandhi's decision to re-contest from Kerala's Wayanad in the coming Lok Sabha elections.\r\nCongress leader Rahul Gandhi in G… [+1952 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "India vs England Live Score 5th Test, IND vs ENG: Padikkal falls after fifty - Hindustan Times",
            "description": "India vs England Live Score 5th Test Day 2, IND vs ENG: Sarfaraz Khan and Devdutt Padikkal were dismissed in quick succession after Tea",
            "url": "https://www.hindustantimes.com/cricket/india-vs-england-live-score-5th-test-cricket-match-today-8-march-ind-vs-eng-updates-scorecard-hpca-stadium-dharamsala-101709853250840.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/08/550x309/bashir_1709895028267_1709895038883.jpg",
            "publishedAt": "2024-03-08T09:56:13Z",
            "content": "India vs England Live Score 5th Test, IND vs ENG: Sarfaraz Khan and Devdutt Padikkal seem to have put India back in cruise mode after England made a dream start to the second session of Day 2. The vi… [+4811 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Khushi Pal",
            "title": "10 breathtaking images of space captured by NASA's James Webb Telescope - Hindustan Times",
            "description": "Here is a look at 10 stunning pics shared by NASA.",
            "url": "https://www.hindustantimes.com/web-stories/in-focus/10-breathtaking-images-of-space-captured-by-nasas-james-webb-telescope-101709885487490.html",
            "urlToImage": null,
            "publishedAt": "2024-03-08T09:55:47Z",
            "content": "By Khushi PalPublished Mar 08, 2024\r\nHindustan TimesIn FocusPhoto Credits: NASA"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Indians in war zone: Two Russia-based agents under CBI scanner - Hindustan Times",
            "description": "The agents – Christina and Moinuddin Chippa – facilitate the trafficking of Indian youth to Russia by offering them lucrative job opportunities. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/indians-in-war-zone-two-russia-based-agents-under-cbi-scanner-101709888292808.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/08/1600x900/INDIA-RUSSIA-UKRAINE-CONFLICT-ARMY-4_1709890088040_1709890117653.jpg",
            "publishedAt": "2024-03-08T09:44:47Z",
            "content": "Two Russia-based agents who are allegedly involved in the human trafficking network that sends Indian nationals into the Ukraine war zone are under the scanner of the Central Bureau of Investigation … [+3183 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "PM Modi’s savage response to Ranveer Allahbadia’s podcast query. Watch - Moneycontrol",
            "description": "'I am in the mood to do a podcast with you sir,' Ranveer Allahbadia told PM Narendra Modi. The prime minister's savage response drew laughter from the crowd.",
            "url": "https://www.moneycontrol.com/news/trends/pm-modis-savage-response-to-ranveer-allahbadias-podcast-query-watch-12425311.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/03/MixCollage-08-Mar-2024-02-45-PM-7705-770x433.jpg",
            "publishedAt": "2024-03-08T09:16:23Z",
            "content": "Prime Minister Narendra Modi presented the first-ever National Creators Award at the Bharat Mandapam in Delhi today. While the inaugural National Creators Award ceremony was full of Instagram-worthy … [+1782 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Telugu360.com"
            },
            "author": "Krishna",
            "title": "Gaami Movie Review: A Unique Film - Telugu360",
            "description": "Gaami Movie Review, Vishwak Sen's Gaami Movie Review and Rating, Gaami Movie Analysis, chandini chowdary an vishwak sen's Gaami movie.",
            "url": "https://www.telugu360.com/gaami-movie-review/",
            "urlToImage": "https://www.telugu360.com/wp-content/uploads/2024/03/Gaami-Movie-Review.jpg",
            "publishedAt": "2024-03-08T09:10:19Z",
            "content": "Telugu360 Rating 3/5\r\nIn the movie “Gaami,” the protagonist, portrayed by Vishwak Sen, is named Shankar and is afflicted with a dangerous condition. Physical contact with others causes his skin to bu… [+2607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Sudha Murty nominated to Rajya Sabha. Home Minister Amit Shah congratulates her - Mint",
            "description": "The 73-year-old, whose nomination comes on International Women's Day, was awarded the Padma Shri in 2006 and the Padma Bhushan in 2023",
            "url": "https://www.livemint.com/news/sudha-murty-nominated-to-rajya-sabha-home-minister-amit-shah-pm-modi-nari-shakti-international-womens-day-democarcy-11709884243301.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/03/08/1600x900/Sudha_Murty_Rajya_Sabha_1709885500253_1709885500395.JPG",
            "publishedAt": "2024-03-08T09:10:13Z",
            "content": "Philanthropist and author Sudha Murty was nominated to the Rajya Sabha on Friday. \r\n In a post on X, Prime Minister Narendra Modi asserted that her presence in the Upper House is a powerful testament… [+2755 chars]"
        }
    ]
}
function renderUI(data) {
    const articles = data.articles;
    const parent = document.querySelector(".parent");
    parent.innerHTML = ""; // Clear previous articles
    articles.forEach(article => {
        const articleCard = renderArticle(article);
        parent.appendChild(articleCard);
    });
}

function renderArticle(article) {
    const carding = document.createElement("div");
    const card = document.createElement("div");
    card.innerText = article.title;
    card.setAttribute("class", "card");
    card.addEventListener("click", function() {
        showPopup(article.title); 
    });

    const popup = document.createElement("div");
    const spanpop = document.createElement("span");
    spanpop.innerText = "close";
    popup.setAttribute("class", "popup"); 
    spanpop.addEventListener("click", closePopup);
    spanpop.setAttribute("class","close")
    const h2 = document.createElement("h2");
    h2.innerText = article.title;
    popup.appendChild(spanpop);
    popup.appendChild(h2);
    const p = document.createElement("p");
    p.innerText = article.content;
    popup.appendChild(p);
    carding.appendChild(popup);
    carding.appendChild(card);
    return carding;
}
renderUI(data);