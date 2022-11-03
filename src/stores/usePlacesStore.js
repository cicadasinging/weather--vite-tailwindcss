import { getPlacesLocalStorage, setPlacesLocalStorage } from "@/utils/usePlacesLocalStorage";

export default defineStore("places", {
  state: () => ({
    place: {},
    preview: true,
    places: getPlacesLocalStorage(),
  }),
  actions: {
    setPlaces(v) {
      this.places = v;
      setPlacesLocalStorage(v);
    },
  },
});
