
async function getBooks() {

    try {

        const response = await fetch("https://upadhayay.github.io/db.json");

        const data = await response.json();

        const mybooks_div = document.querySelector(".paper-cards");

        const publishedBooks = data.books.filter(function(book) {
            return book.published === true;
        });

        mybooks_div.innerHTML = "";

        for (let book of publishedBooks) {

            const single_book_div = document.createElement("div");

            single_book_div.innerHTML = `
                <img src="images/paper.png" alt="Research Paper">
                <h3>Title: ${book.title}</h3>
                <p>Year: ${book.year}</p>
            `;

            single_book_div.classList.add("single_book");

            mybooks_div.append(single_book_div);

        }

    }

    catch(error) {

        console.log("Error in fetch");

        const mybooks_div = document.querySelector(".paper-cards");

        mybooks_div.textContent = "Unable to load published papers.";

    }

}

getBooks();



document.getElementById("hamburger").addEventListener("click", function() {

    document.getElementById("menu").classList.toggle("show");

});