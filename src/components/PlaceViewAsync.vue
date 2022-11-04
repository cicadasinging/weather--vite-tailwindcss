<template>
  <div class="flex flex-col items-center">
    <!-- Weather Overview -->
    <PlaceViewWeatherOverview
      :weather-data="weatherData"
      @add-place="addPlace(placesStore.place)"
      @remove-place="removePlace(placesStore.place)"
    />
    <!-- Weather Tip -->
    <PlaceViewWeatherTip />
  </div>
</template>

<script setup>
const placesStore = usePlacesStore();
const { lon, lat } = placesStore.place;
const weatherData = await getWeatherData(lon, lat);
const { addPlace, removePlace } = usePlaces();
</script>
