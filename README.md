# MovieList
# Input
The program accepts an array of movie objects as its main input. Each movie object comprises three essential attributes: `title`, `genre`, and `releaseYear`. User interaction via a dropdown menu serves as input to categorize movies by genre. Selecting a movie title yields more input through user interaction.

# Process
The application initializes the movie data and dynamically extracts distinct genres to populate the dropdown menu.
Upon selecting a genre, the computer refines the movie selection according to the chosen genre. Selecting "All Genres" results in the display of all movies.

The user clicks on a movie, triggering an event handler that shows an alert containing the movie's title.

The software employs React's state management using hooks to dynamically update the filtered list.

# Output
The application presents a list of films according to the genre selected by the user. Clicking on a film activates an alert displaying the film title.


