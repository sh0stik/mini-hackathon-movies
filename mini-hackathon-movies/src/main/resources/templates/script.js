const form = document.getElementById('movie-search-form');
const container = document.getElementById('movie-info-container');

form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const titleInput = document.getElementById('movie-title');
        const title = titleInput.value;

        const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=b79fdda2`);
        const data = await response.json();

        if (data.Response === 'False') {
            alert(data.Error);
            return;
        }

        const titleResult = document.getElementById('movie-title-result');
        const yearResult = document.getElementById('movie-year-result');
        const ratedResult = document.getElementById('movie-rated-result');
        const releasedResult = document.getElementById('movie-released-result');
        const runtimeResult = document.getElementById('movie-runtime-result');
        const genreResult = document.getElementById('movie-genre-result');
        const directorResult = document.getElementById('movie-director-result');
        const writerResult = document.getElementById('movie-writer-result');
        const actorsResult = document.getElementById('movie-actors-result');
        const plotResult = document.getElementById('movie-plot-result');
        const languageResult = document.getElementById('movie-language-result');
        const countryResult = document.getElementById('movie-country-result');
        const awardsResult = document.getElementById('movie-awards-result');
        const rottenTomatoesResult = document.getElementById('movie-rotten-tomatoes-result');

        // Extract the relevant fields from the response
        const {
            Title,
            Year,
            Rated,
            Released,
            Runtime,
            Genre,
            Director,
            Writer,
            Actors,
            Plot,
            Language,
            Country,
            Awards,
            Ratings,
            Poster,
        } = data;

        // Display the extracted fields on the page
        titleResult.textContent = Title;
        yearResult.textContent = Year;
        ratedResult.textContent = Rated;
        releasedResult.textContent = Released;
        runtimeResult.textContent = Runtime;
        genreResult.textContent = Genre;
        directorResult.textContent = Director;
        writerResult.textContent = Writer;
        actorsResult.textContent = Actors;
        plotResult.textContent = Plot;
        languageResult.textContent = Language;
        countryResult.textContent = Country;
        awardsResult.textContent = Awards;

        const rottenTomatoesRating = Ratings.find(rating => rating.Source === 'Rotten Tomatoes');
        rottenTomatoesResult.textContent = rottenTomatoesRating ? rottenTomatoesRating.Value : '';

        if (Poster) {
            const blob = await fetch(Poster).then(response => response.blob());
            const objectURL = URL.createObjectURL(blob);
            const poster = document.getElementById('movie-poster-result');
            poster.src = objectURL;
            poster.alt = Title;
        }

        container.style.display = `block`;

        // Send the data to the Spring Boot API endpoint
        const movieData = {
            title: Title,
            year: Year,
            rated: Rated,
            released: Released,
            runtime: Runtime,
            genre: Genre,
            director: Director,
            writer: Writer,
            actors: Actors,
            plot: Plot,
            language: Language,
            country: Country,
            awards: Awards,
            rottenTomatoesRating: rottenTomatoesRating ? rottenTomatoesRating.Value : '',
            poster: Poster,
        };
        const response2 = await fetch('http://localhost:8080/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieData),
        })
        const responseData = await response2.json();
    }
);

