const URl = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_XwDuHYBcRZtxw2YZbMb0OXdyTxkBeq0PCwGKabvmTDM90E5SUaYyNGzddaPsunkB';

export function fetchBreeds() {
  return fetch(`${URl}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URl}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}