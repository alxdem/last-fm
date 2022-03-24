const api = {};
const apiKey = process.env.VUE_APP_LAST_FM_API_KEY || '';

async function getTopArtists(limit = 10) {
  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&limit=${limit}&country=russian+federation&api_key=${apiKey}&format=json`);
  let data;

  if (res.ok) {
    data = await res.json();
  }

  return data;
}

async function getTopAlbums(name) {
  if (!name) return false;
  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${apiKey}&format=json`);
  let data;

  if (res.ok) {
    data = await res.json();
  }

  return data;
}

async function getArtistInfo(name) {
  if (!name) return false;
  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${apiKey}&lang=ru&format=json`);
  let data;

  if (res.ok) {
    data = await res.json();
  }

  return data;
}

async function getArtistAlbums(name) {
  if (!name) return false;

  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${apiKey}&lang=ru&format=json`);
  let data;

  if (res.ok) {
    data = await res.json();
  }

  return data;
}

async function getAlbum(artistName, album) {
  if (!artistName || !album) return false;

  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${artistName}&album=${album}&format=json`);
  let data;

  if (res.ok) {
    data = await res.json();
  }

  return data;
}

api.getTopArtists = getTopArtists;
api.getTopAlbums = getTopAlbums;
api.getArtistInfo = getArtistInfo;
api.getArtistAlbums = getArtistAlbums;
api.getAlbum = getAlbum;

export default api;
