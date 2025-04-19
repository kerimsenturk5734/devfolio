document.addEventListener("DOMContentLoaded", function () {
    // Set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Medium RSS Feed URL
    const rssFeedUrl = "https://medium.com/feed/@kerimsenturk5734";
    const blogsContainer = document.getElementById("blogs-container");
    const loadingSpinner = document.getElementById("loading-spinner");

    // Use proxy server to get RSS data
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssFeedUrl)}`;

    // Fetch RSS data
    fetch(proxyUrl)
        .then((response) => response.json())
        .then((data) => {
            // Clear loading spinner
            if (loadingSpinner) loadingSpinner.remove();
            
            // Parse the XML response
            const parser = new DOMParser();
            const xml = parser.parseFromString(data.contents, "application/xml");
            const items = xml.querySelectorAll("item");

            // Check if any items exist
            if (items.length > 0) {
                items.forEach((item) => {
                    // Extract values from XML
                    const title = item.querySelector("title")?.textContent;
                    const link = item.querySelector("link")?.textContent;
                    const pubDate = item.querySelector("pubDate")?.textContent;

                    let thumbnailURL;
                    item.childNodes.forEach((node) => {
                        // Extract the thumbnail URL from content
                        if (node.nodeName === "content:encoded") {
                            thumbnailURL = node.textContent.match(/<img[^>]+src="([^">]+)"/)?.at(1);
                        }
                    });

                    // Create the blog card HTML element
                    const blogCard = `
                        <div class="col-md-4">
                            <a href="${link}" class="text-decoration-none" target="_blank">
                                <div class="card">
                                    <img src="${thumbnailURL}" class="card-img-top" alt="${title}">
                                    <div class="card-body">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="lite-text">${pubDate}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
                    blogsContainer.innerHTML += blogCard;
                });
            } else {
                blogsContainer.innerHTML = `<p class="text-center text-danger">No blogs found in the RSS feed.</p>`;
            }
        })
        .catch((error) => {
            console.error("RSS loading error:", error);
            blogsContainer.innerHTML = `<p class="text-center text-danger">An error occurred while fetching the RSS feed.</p>`;
        });

    // Contact Form Submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Collect form data
        const email = "email@example.com"; // Change this to the desired email address
        const name = document.getElementById("name").value;
        const subject = document.getElementById("subject").value;
        const message = `${document.getElementById("message").value}\n\n---------------\n${name}`;

        // Construct the mailto link
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        // Open the mailto link
        window.location.href = mailtoLink;
    });
});
