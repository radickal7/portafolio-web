import { FaWhatsapp } from "react-icons/fa"
import { contactConfig } from "../../lib/contactConfig"
export default function WhatsAppFloating() {
  if (!contactConfig.whatsappUrl) return null
  return (
    <a
      href={contactConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white grid place-items-center shadow-lg hover:scale-105 transition"
    >
      <FaWhatsapp size={22} />
    </a>
  )
}
