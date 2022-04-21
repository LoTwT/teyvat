import L from "leaflet"

export default defineNuxtPlugin(() => ({
  provide: {
    L,
  },
}))
