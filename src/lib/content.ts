export const products = [
  {
    id: "iphone",
    eyebrow: "iPhone 17 Pro Max",
    title: "El nuevo estándar.",
    description:
      "Pantalla ProMotion, chip A19 Pro y un sistema de cámaras rediseñado. El iPhone más avanzado que Apple ha creado, disponible al mejor precio de Colombia.",
    image: "/products/iphone.png",
    width: 1000,
    height: 1000,
  },
  {
    id: "macbook",
    eyebrow: "MacBook",
    title: "Potencia silenciosa.",
    description:
      "Rendimiento profesional en un diseño ultraligero. Ideal para creativos, desarrolladores y quienes exigen lo mejor todos los días.",
    image: "/products/macbook.png",
    width: 447,
    height: 447,
  },
  {
    id: "watch",
    eyebrow: "Apple Watch",
    title: "Tu salud, en tu muñeca.",
    description:
      "Monitoreo avanzado, resistencia excepcional y una pantalla que se ve espectacular en cualquier luz. Disponible en múltiples acabados.",
    image: "/products/watch.png",
    width: 597,
    height: 335,
  },
  {
    id: "airpods",
    eyebrow: "AirPods",
    title: "Sonido que envuelve.",
    description:
      "Cancelación activa de ruido, audio espacial y una conexión instantánea con todo tu ecosistema Apple.",
    image: "/products/airpods.png",
    width: 554,
    height: 554,
  },
] as const;

export const reasons = [
  {
    number: "01",
    title: "Envío rápido nacional",
    description: "Entregas a toda Colombia con seguimiento en tiempo real.",
  },
  {
    number: "02",
    title: "Productos 100% originales",
    description: "Cada equipo es Apple genuino, sellado de fábrica.",
  },
  {
    number: "03",
    title: "Garantía incluida",
    description: "Respaldo real después de tu compra, sin letras pequeñas.",
  },
  {
    number: "04",
    title: "Pago seguro",
    description: "Múltiples métodos de pago protegidos y verificados.",
  },
  {
    number: "05",
    title: "Atención personalizada",
    description: "Un equipo humano listo para asesorarte por WhatsApp.",
  },
  {
    number: "06",
    title: "Los mejores precios",
    description: "Precios imbatibles en todo el catálogo Apple en Colombia.",
  },
] as const;

export const ecosystem = [
  {
    id: "iphone",
    title: "iPhone",
    description: "El centro de tu ecosistema.",
    image: "/products/iphone.png",
    width: 1000,
    height: 1000,
  },
  {
    id: "macbook",
    title: "MacBook",
    description: "Continúa tu trabajo sin interrupciones.",
    image: "/products/macbook.png",
    width: 447,
    height: 447,
  },
  {
    id: "watch",
    title: "Apple Watch",
    description: "Notificaciones y salud, siempre contigo.",
    image: "/products/watch.png",
    width: 597,
    height: 335,
  },
  {
    id: "airpods",
    title: "AirPods",
    description: "Cambia de dispositivo sin tocar un botón.",
    image: "/products/airpods.png",
    width: 554,
    height: 554,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Pedí mi MacBook un lunes y el miércoles ya la tenía en Medellín. Todo original, todo perfecto.",
    author: "Camila R.",
  },
  {
    quote:
      "El mejor precio que encontré para el iPhone 17 Pro Max en todo el país, sin comparación.",
    author: "Andrés M.",
  },
  {
    quote:
      "Compré mi Apple Watch y mis AirPods juntos. La atención por WhatsApp fue inmediata y clara.",
    author: "Valentina G.",
  },
] as const;
