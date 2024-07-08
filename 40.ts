//Question 40:Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// Define a function make_album that returns an object describing a music album
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
  let album = {
      artist: artist,
      title: title,
      tracks: tracks
  };

  // Optionally add tracks to the album object if tracks parameter is provided
  if (tracks !== undefined) {
      album.tracks = tracks;
  }

  return album;
}

// Create albums using make_album function
let album1 = make_album('Artist1', 'Album Title 1');
let album2 = make_album('Artist2', 'Album Title 2', 12); // Example with tracks
let album3 = make_album('Artist3', 'Album Title 3');

// Print each album object to verify correctness
console.log(album1);
console.log(album2);
console.log(album3);



