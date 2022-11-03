const _localKey = "placesLocalStorage";

export function getPlacesLocalStorage() {
  return localStorage.getItem(_localKey) ? JSON.parse(localStorage.getItem(_localKey)) : [];
}

export function setPlacesLocalStorage(v) {
  localStorage.setItem(_localKey, JSON.stringify(v ? v : []));
}

export function removePlacesLocalStorage() {
  localStorage.removeItem(_localKey);
}
