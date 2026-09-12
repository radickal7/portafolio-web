export const contactConfig = {
  email: "juanjmacchiarulo@gmail.com",
  // Introduce tu número en formato internacional sin + ni espacios, ej: "5491123456789"
  // Dejar vacío desactiva el CTA de WhatsApp sin romper la UI
  whatsapp: "",
  get whatsappUrl() {
    return this.whatsapp ? `https://wa.me/${this.whatsapp}?text=${encodeURIComponent("Hola Juan, vi tu portfolio y quiero contarte mi idea: ")}` : ""
  },
  // Futuro: calendly / cal.com — dejar vacío hasta definir
  calendly: "",
}
