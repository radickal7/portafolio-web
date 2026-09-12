export const contactConfig = {
  email: "juanjmacchiarulo@gmail.com",
  whatsapp: "584247504552",
  get whatsappUrl() {
    return this.whatsapp ? `https://wa.me/${this.whatsapp}?text=${encodeURIComponent("Hola Juan, vi tu portfolio y quiero contarte mi idea: ")}` : ""
  },
  // Futuro: calendly / cal.com — dejar vacío hasta definir
  calendly: "",
}
