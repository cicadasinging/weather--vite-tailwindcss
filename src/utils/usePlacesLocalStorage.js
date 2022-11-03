const _localKey = "placesLocalStorage";

export function getPlacesLocalStorage() {
  return JSON.parse(localStorage.getItem(_localKey) ? localStorage.getItem(_localKey) : "[]");
}

export function setPlacesLocalStorage(v) {
  localStorage.setItem(_localKey, JSON.stringify(v ? v : []));
}

export function removePlacesLocalStorage() {
  localStorage.removeItem(_localKey);
}
