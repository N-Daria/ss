const serverRequestConfig = {
  // url: 'https://backend.mesto.nomoredomains.icu',
  url: 'http://localhost:3001',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

const checkResponse = (response) => {
  return response.ok ?
    response.json()
    : response.json()
      .then((res) => {
        return Promise.reject(res.message || res.validation.body.message);
      })
}

export function likeCard(card) {
  return fetch(`${serverRequestConfig.url}/movies`, {
    method: 'POST',
    headers: serverRequestConfig.headers,
    credentials: "include",
    body: JSON.stringify({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: card.image,
      trailerLink: card.trailerLink,
      thumbnail: card.thumbnail,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      movieId: card.id
    })
  })
    .then(checkResponse)
};

export function deleteLikeCard(id) {
  return fetch(`${serverRequestConfig.url}/movies/${id}`, {
    method: 'DELETE',
    credentials: "include",
    headers: serverRequestConfig.headers
  })
    .then(checkResponse)
};


export function register(data) {
  return fetch(`${serverRequestConfig.url}/signup`, {
    method: 'POST',
    headers: serverRequestConfig.headers,
    credentials: "include",
    body: JSON.stringify({
      password: data.password,
      email: data.email,
      name: data.name
    })
  })
    .then(checkResponse)
};

export function login(data) {
  return fetch(`${serverRequestConfig.url}/signin`, {
    method: 'POST',
    headers: serverRequestConfig.headers,
    credentials: "include",
    body: JSON.stringify({
      password: data.password,
      email: data.email,
    })
  })
    .then(checkResponse)
};

export function updateUserInfo(data) {
  return fetch(`${serverRequestConfig.url}/users/me`, {
    method: 'PATCH',
    headers: serverRequestConfig.headers,
    credentials: "include",
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    })
  })
    .then(checkResponse)
};