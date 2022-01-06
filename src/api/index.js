const api = {};
const apiKey = process.env.VUE_APP_LAST_FM_API_KEY || '';

async function getTopArtists() {
  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=russian+federation&api_key=${apiKey}&format=json`);
  let data;

  if (res.ok) {
    data = await res.json();
  }

  return data;
}

async function getTopAlbums(name) {
  console.log('name', name);
  if (!name) return false;
  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${apiKey}&format=json`);
  let data;

  if (res.ok) {
    data = await res.json();
  }

  return data;
}

api.getTopArtists = getTopArtists;
api.getTopAlbums = getTopAlbums;

export default api;
