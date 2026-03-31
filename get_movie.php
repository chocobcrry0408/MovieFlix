<?php
header('Content-Type: application/json');

$movies = array(
    array(
        'title' => 'The Shawshank Redemption',
        'year' => 1994,
        'genre' => 'Drama',
        'rating' => 9.3,
        'description' => 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    ),
    array(
        'title' => 'The Godfather',
        'year' => 1972,
        'genre' => 'Crime, Drama',
        'rating' => 9.2,
        'description' => 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his youngest son.'
    ),
    array(
        'title' => 'The Dark Knight',
        'year' => 2008,
        'genre' => 'Action, Crime, Drama',
        'rating' => 9.0,
        'description' => 'When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest tests.'
    ),
    array(
        'title' => 'Pulp Fiction',
        'year' => 1994,
        'genre' => 'Crime, Drama',
        'rating' => 8.9,
        'description' => 'The lives of four mobsters, two gangsters, a boxer, a gangster and his wife intertwine in four tales of violence.'
    ),
    array(
        'title' => 'Forrest Gump',
        'year' => 1994,
        'genre' => 'Drama, Romance',
        'rating' => 8.8,
        'description' => 'The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.'
    ),
    array(
        'title' => 'Inception',
        'year' => 2010,
        'genre' => 'Action, Sci-Fi, Thriller',
        'rating' => 8.8,
        'description' => 'A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.'
    ),
    array(
        'title' => 'The Matrix',
        'year' => 1999,
        'genre' => 'Action, Sci-Fi',
        'rating' => 8.7,
        'description' => 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
    ),
    array(
        'title' => 'Interstellar',
        'year' => 2014,
        'genre' => 'Adventure, Drama, Sci-Fi',
        'rating' => 8.6,
        'description' => 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
    ),
    array(
        'title' => 'The Lion King',
        'year' => 1994,
        'genre' => 'Animation, Adventure, Drama',
        'rating' => 8.5,
        'description' => 'Lion prince Simba flees his kingdom after the death of his father, only to discover the truth about his past.'
    ),
    array(
        'title' => 'Gladiator',
        'year' => 2000,
        'genre' => 'Action, Adventure, Drama',
        'rating' => 8.5,
        'description' => 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.'
    ),
    array(
        'title' => 'The Avengers',
        'year' => 2012,
        'genre' => 'Action, Adventure, Sci-Fi',
        'rating' => 8.0,
        'description' => 'Earth\'s mightiest heroes must come together and learn to fight as a team to save the world from an alien invasion.'
    ),
    array(
        'title' => 'Parasite',
        'year' => 2019,
        'genre' => 'Drama, Thriller',
        'rating' => 8.6,
        'description' => 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.'
    )
);

$randomIndex = array_rand($movies);
$randomMovie = $movies[$randomIndex];

echo json_encode(array(
    'success' => true,
    'movie' => $randomMovie
));
?>