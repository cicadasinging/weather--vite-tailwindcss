const _localKey = "placesLocalStorage";

export function getPlacesLocalStorage() {
  return localStorage.getItem(_localKey) ? JSON.parse(localStorage.getItem(_localKey)) : [];
}

export function setPlacesLocalStorage(value) {
  localStorage.setItem(_localKey, JSON.stringify(value ? value : []));
}

export function removePlacesLocalStorage() {
  localStorage.removeItem(_localKey);
}
