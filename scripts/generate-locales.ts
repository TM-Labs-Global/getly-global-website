import fs from "fs";
import path from "path";

const MESSAGES_DIR = path.join(__dirname, "../shared/i18n/messages");
const EN_DIR = path.join(MESSAGES_DIR, "en");

const LOCALES = ["es", "fr", "de", "pt", "zh", "ja", "ar"];

const translations: Record<string, Record<string, any>> = {
  // SPANISH
  es: {
    common: {
      brand: {
        name: "Getly",
        headline: "La Super App Para el Viajero Moderno",
        slogan: "Convirtiendo lugares desconocidos en experiencias inolvidables."
      },
      nav: {
        home: "Inicio",
        wallet: "Billetera",
        cards: "Tarjetas de Viaje",
        esim: "eSIM",
        flights: "Vuelos",
        hotels: "Hoteles",
        insurance: "Seguros",
        visa: "Visados",
        aiTripPlanner: "Planificador IA",
        coverage: "Cobertura",
        security: "Seguridad",
        pricing: "Tarifas",
        downloadApp: "Obtener App"
      },
      footer: {
        rights: "Todos los derechos reservados.",
        tagline: "Convirtiendo lugares desconocidos en experiencias inolvidables.",
        product: "Producto",
        company: "Compañía",
        legal: "Legal",
        support: "Soporte",
        aboutUs: "Sobre Nosotros",
        press: "Prensa y Medios",
        blog: "Blog y Noticias",
        faq: "Ayuda y Preguntas",
        privacy: "Política de Privacidad",
        terms: "Términos del Servicio",
        superAppSubtitle: "Super App Global de Viajes",
        downloadCTA: "Descubre una nueva forma de viajar"
      },
      buttons: {
        getApp: "Obtener Getly",
        exploreFeatures: "Explorar Funciones",
        learnMore: "Ver detalles",
        fundWallet: "Cargar Fondos",
        getCard: "Obtener Tarjeta",
        buyEsim: "Comprar eSIM Global",
        bookFlight: "Reservar Vuelo",
        bookHotel: "Reservar Hotel",
        getInsurance: "Protección de Viaje",
        applyVisa: "Solicitar Visado"
      }
    },
    home: {
      hero: {
        badge: "Super App Global de Viajes",
        headline: "La Super App Para el Viajero Moderno",
        headlineLine1: "La Super App Para el",
        headlineLine2: "Viajero Moderno",
        subhead: "Convirtiendo lugares desconocidos en experiencias inolvidables. Una billetera multidivisa global, tarjetas virtuales, eSIMs, reservas de vuelos, hoteles, seguros y visados en una sola app.",
        ctaPrimary: "Descargar App",
        ctaSecondary: "Explorar Funciones"
      },
      ticker: [
        "Billetera Global",
        "Tarjetas Virtuales",
        "eSIM Global",
        "Reserva de Vuelos",
        "Estancias en Hoteles",
        "Protección de Viaje",
        "Gestión de Visados",
        "Planificador IA",
        "Carga Instantánea",
        "Multidivisa"
      ],
      partners: {
        backedBy: "Con el respaldo y la confianza de líderes del sector"
      },
      pillars: {
        title: "Todo lo que necesitas en una sola app.",
        subtitle: "Viajar ya es suficientemente complicado. Getly reúne lo esencial para tus finanzas, conectividad, estancias y viajes en una experiencia fluida.",
        wallet: {
          eyebrow: "Billetera Global",
          headlineLine1: "Una sola billetera.",
          headlineLine2: "Funciona dondequiera que vayas.",
          desc: "Carga fondos, paga y retira dinero estés donde estés.",
          cta: "Explorar Billetera",
          badge: "Paga en Todo el Mundo"
        },
        cards: {
          eyebrow: "Tarjetas Virtuales",
          headlineLine1: "Una tarjeta virtual para",
          headlineLine2: "cada compra.",
          desc: "Tarjetas virtuales al instante, cargadas directamente desde tu billetera.",
          cta: "Explorar Tarjetas",
          badge: "Emisión Inmediata"
        },
        esim: {
          eyebrow: "eSIM Global",
          headlineLine1: "Aterriza conectado.",
          headlineLine2: "Mantente en línea.",
          desc: "Elige tu plan de datos y listo. Sin necesidad de tarjetas SIM físicas.",
          cta: "Explorar eSIM",
          badge: "Más de 180 Países"
        },
        flights: {
          eyebrow: "Vuelos y Reservas",
          headlineLine1: "Reserva vuelos",
          headlineLine2: "desde tu billetera.",
          desc: "Busca, reserva y gestiona todo sin salir de Getly.",
          cta: "Explorar Vuelos",
          badge: "MAD → CDG"
        },
        hotels: {
          eyebrow: "Estancias en Hoteles",
          headlineLine1: "Alojamientos a medida",
          headlineLine2: "para cada viaje.",
          desc: "Descubre y reserva hoteles exclusivos en todo el mundo pagando directamente con tu saldo.",
          cta: "Explorar Hoteles",
          badge: "+1M Propiedades"
        },
        insurance: {
          eyebrow: "Protección de Viaje",
          headlineLine1: "Cobertura completa",
          headlineLine2: "dondequiera que aterrices.",
          desc: "Asistencia médica global, emergencias y cobertura de equipaje en un solo toque.",
          cta: "Explorar Protección",
          badge: "Atención 24/7"
        },
        visa: {
          eyebrow: "Gestión de Visados",
          headlineLine1: "Visados rápidos",
          headlineLine2: "sin complicaciones.",
          desc: "Verifica requisitos de entrada, envía tus documentos digitales y sigue el estado en tiempo real.",
          cta: "Explorar Visados",
          badge: "120+ Destinos"
        }
      },
      ai: {
        badge: "Compañero IA Getly",
        title: "Itinerarios Personalizados y Consejos Inteligentes",
        subtitle: "Getly IA planifica tu presupuesto diario, sugiere rincones locales y gestiona tus preparativos.",
        cta: "Explorar Planificador IA",
        feature1Title: "Itinerarios Inteligentes",
        feature1Desc: "Planes diarios personalizados generados en segundos según tu estilo de viaje.",
        feature2Title: "Guía de Presupuesto",
        feature2Desc: "Calcula costes diarios de comida, transporte y actividades en moneda local.",
        hoverHint: "Pasa el cursor para ver Getly IA en acción"
      },
      howItWorks: {
        badge: "Proceso Sencillo",
        title: "Cómo Funciona Getly",
        subtitle: "Comienza en 4 sencillos pasos",
        step1Eyebrow: "Comenzar",
        step1Title: "Descarga Getly App",
        step1Desc: "Obtén Getly en App Store o Google Play y completa la verificación en segundos.",
        step2Eyebrow: "Multidivisa",
        step2Title: "Carga tu Billetera",
        step2Desc: "Añade dinero usando tarjetas de débito locales, opciones bancarias o vías globales.",
        step3Eyebrow: "Tarjetas y Datos",
        step3Title: "Crea tu Tarjeta y Activa eSIM",
        step3Desc: "Emite tarjetas virtuales al instante e instala datos móviles de alta velocidad.",
        step4Eyebrow: "Viaja sin Fronteras",
        step4Title: "Explora el Mundo con Libertad",
        step4Desc: "Paga en el extranjero, reserva vuelos y hoteles con total tranquilidad."
      },
      trust: {
        stat1Value: "Global",
        stat1Label: "experiencia pensada para viajar",
        stat2Value: "$0",
        stat2Label: "comisión de emisión de tarjeta*",
        stat3Value: "24/7",
        stat3Label: "soporte directo en la app",
        stat4Value: "1 app",
        stat4Label: "para todo tu viaje"
      },
      coverage: {
        badge: "Presencia Global",
        title: "Disponible en más de 180 Destinos",
        subtitle: "Ya sea que reserves vuelos, viajes con eSIM o pagues con tarjetas virtuales, Getly va contigo.",
        viewAll: "Explorar Todos los Países y Coberturas"
      },
      faq: {
        badge: "Preguntas Frecuentes",
        title: "Preguntas Frecuentes",
        subtitle: "¿Tienes preguntas sobre Getly? Aquí tienes las respuestas.",
        viewAll: "Ver Todas las Preguntas Frecuentes",
        q1: "¿Qué es Getly?",
        a1: "Getly es una super app financiera para viajeros modernos, profesionales e inmigrantes. Combina una billetera multidivisa con tarjetas virtuales, eSIM, reservas de vuelos, hoteles, seguros y visados.",
        q2: "¿Cómo cargo fondos en mi billetera Getly?",
        a2: "Puedes cargar tu billetera al instante usando tarjetas de débito locales, opciones de pago bancario o pasarelas globales.",
        q3: "¿Cómo funciona la eSIM global?",
        a3: "Getly ofrece perfiles eSIM digitales en más de 180 países. Escanea el código QR o pulsa instalación automática para conectarte en segundos.",
        q4: "¿Puedo reservar vuelos y hoteles con el saldo de mi billetera?",
        a4: "¡Sí! Getly te permite buscar, comparar y reservar vuelos y más de 1,000,000 de hoteles pagando directamente con tu saldo multidivisa sin comisiones ocultas."
      },
      download: {
        eyebrow: "Tu viaje comienza aquí",
        headlineLine1: "Una app.",
        headlineLine2: "Viajes infinitos.",
        subtitle: "Descarga Getly y lleva tu billetera, conectividad, reservas y compañero de viaje contigo."
      }
    },
    wallet: {
      badge: "Billetera de Viaje en USD",
      title: "Carga en tu moneda local. Paga en USD en todo el mundo.",
      subtitle: "Olvídate de tarjetas rechazadas en el extranjero y límites bancarios restrictivos. Carga tu billetera Getly USD al instante con tu tarjeta Visa o Mastercard local.",
      cta: "Obtener App y Cargar Saldo",
      hero: {
        cardBadge: "Carga Inmediata con Tarjeta",
        cardTitle: "Tarjeta Local a Billetera USD",
        cardSubtitle: "Autorización 3D-Secure Instantánea",
        payWith: "Paga con tarjeta local",
        receivedUSD: "Acreditado en Billetera USD",
        rateLabel: "Tipo de cambio garantizado",
        status: "Saldo Disponible"
      },
      calculator: {
        badge: "Calculadora de Carga en Tiempo Real",
        title: "Comprueba exactamente lo que pagas en tu moneda local",
        subtitle: "Sin márgenes de cambio ocultos ni recargos sorpresa. Lo que ves es exactamente lo que se acredita en tu saldo USD.",
        youPay: "Tú Pagas (Tarjeta Local)",
        youReceive: "Tú Recibes (Billetera USD)",
        exchangeRate: "Tipo de Cambio",
        fundingFee: "Procesamiento de Tarjeta",
        fundingFeeValue: "Transparente e Inmediato",
        instantSettle: "Acreditación Inmediata",
        instantSettleValue: "En menos de 5 segundos",
        cta: "Cargar este importe ahora"
      },
      howItWorks: {
        badge: "Proceso Sencillo en 3 Pasos",
        title: "Cómo cargar tu billetera Getly USD",
        subtitle: "Comienza a pagar en todo el mundo en menos de 2 minutos desde tu móvil.",
        step1Num: "01",
        step1Eyebrow: "Seleccionar Moneda",
        step1Title: "Elige tu moneda local y el importe",
        step1Desc: "Selecciona tu divisa nacional (NGN, GHS, KES, ZAR, EUR, GBP, CAD, etc.) e indica cuánto USD deseas cargar.",
        step2Num: "02",
        step2Eyebrow: "Pago Inmediato",
        step2Title: "Paga con cualquier Visa o Mastercard",
        step2Desc: "Utiliza tu tarjeta de débito o crédito habitual y confirma con la verificación segura 3D-Secure.",
        step3Num: "03",
        step3Eyebrow: "Viaja sin Límites",
        step3Title: "Saldo USD listo para usar en todo el mundo",
        step3Desc: "Tu saldo USD se acredita de inmediato para emitir tarjetas virtuales, reservar vuelos, hoteles y activar eSIMs."
      },
      benefits: {
        badge: "Por Qué Elegir la Billetera USD Getly",
        title: "Diseñada para eliminar los obstáculos de pago al viajar",
        subtitle: "Las tarjetas bancarias tradicionales fallan cuando viajas. Getly te brinda libertad y aceptación global.",
        card1Title: "Cero Rechazos de Tarjetas en el Extranjero",
        card1Desc: "Nunca te quedes sin poder pagar en comercios internacionales, aerolíneas o plataformas de reserva mundiales.",
        card2Title: "Sin Límites Restrictivos de Bancos Locales",
        card2Desc: "Supera los topes mensuales de gasto en moneda extranjera impuestos por la banca tradicional.",
        card3Title: "Potencia Todo el Ecosistema Getly",
        card3Desc: "Un único saldo USD alimenta tus tarjetas virtuales, vuelos, hoteles, internet eSIM y seguros de viaje.",
        card4Title: "Tipos de Cambio Transparentes",
        card4Desc: "Tarifas interbancarias competitivas y claras antes de confirmar el pago, sin cargos inesperados."
      },
      security: {
        badge: "Protección Institucional",
        title: "Tus fondos y tarjetas, protegidos en cada paso",
        subtitle: "Colaboramos con entidades financieras reguladas y pasarelas de pago certificadas para garantizar máxima seguridad.",
        item1Title: "Procesamiento Certificado PCI-DSS Nivel 1",
        item1Desc: "Todas las autorizaciones cumplen con los estándares más estrictos de seguridad de la industria de pagos.",
        item2Title: "Verificación Biométrica 3D Secure 2.0",
        item2Desc: "Cada recarga requiere autenticación segura de dos factores mediante tu banco emisor.",
        item3Title: "Fondos de Clientes Segregados",
        item3Desc: "Tus saldos USD se custodian en cuentas protegidas con instituciones financieras de primer nivel."
      },
      faq: {
        badge: "Preguntas Frecuentes",
        title: "Preguntas frecuentes sobre la Billetera USD",
        subtitle: "Todo lo que necesitas saber sobre la carga con tarjetas locales y el gasto internacional.",
        q1: "¿Puedo cargar mi billetera USD con cualquier Visa o Mastercard local?",
        a1: "¡Sí! Puedes utilizar cualquier tarjeta de débito o crédito emitida en tu país. Tu banco cobra en tu moneda local y Getly acredita al instante en USD.",
        q2: "¿Con qué rapidez se refleja el saldo en USD?",
        a2: "La recarga es inmediata. Una vez completada la verificación 3D Secure, tus fondos aparecen en segundos.",
        q3: "¿En qué puedo gastar mi saldo USD de Getly?",
        a3: "Puedes usar tu saldo USD para crear tarjetas virtuales, reservar vuelos y hoteles, comprar paquetes de datos eSIM y contratar seguros de viaje.",
        q4: "¿Existen límites de recarga?",
        a4: "Los límites se basan en tu nivel de verificación. La verificación digital estándar ofrece límites amplios para viajeros frecuentes.",
        q5: "¿Puedo retirar fondos si mis planes cambian?",
        a5: "Sí, Getly ofrece opciones flexibles de retiro hacia tus métodos de cobro conectados cuando lo desees."
      }
    },
    cards: {
      badge: "Tarjetas Virtuales de Viaje",
      title: "Una tarjeta para cada compra.",
      subtitle: "Genera tarjetas virtuales al instante para compras internacionales, suscripciones, vuelos y restaurantes.",
      cta: "Obtener Tarjeta Ahora",
      features: {
        title: "Emisión Inmediata y Control Total",
        desc: "Crea tarjetas virtuales en segundos desde tu móvil. Úsalas en cualquier comercio online con notificaciones en tiempo real.",
        item1: "Creación instantánea con límites de gasto personalizados",
        item2: "Bloqueo y desbloqueo en un solo toque para máxima seguridad",
        item3: "Aceptación global en comercios online y reservas aéreas"
      },
      faq: {
        title: "Preguntas sobre Tarjetas",
        q1: "¿Las tarjetas virtuales Getly se aceptan en todo el mundo?",
        a1: "Sí, funcionan en plataformas internacionales de compras, servicios de viaje y suscripciones digitales.",
        q2: "¿Puedo congelar mi tarjeta en caso de extravío?",
        a2: "Sí, puedes pausar y reactivar cualquier tarjeta con un toque en el panel de seguridad de Getly."
      }
    },
    esim: {
      badge: "Conectividad eSIM Global",
      title: "Planes de datos mundiales. Cero SIMs físicas.",
      subtitle: "Aterriza en cualquier país y conéctate a internet de alta velocidad de inmediato sin sorpresas de itinerancia.",
      cta: "Obtener Datos eSIM",
      features: {
        title: "Activación Instantánea en 180+ Destinos",
        desc: "Olvídate de buscar quioscos de SIM en el aeropuerto. Getly te permite elegir paquetes de datos regionales e instalar tu perfil al instante.",
        item1: "Instalación inmediata mediante código QR o activación en 1 toque",
        item2: "Paquetes flexibles locales, regionales y mundiales",
        item3: "Sin sobrecostes inesperados por itinerancia de datos"
      },
      faq: {
        title: "Preguntas sobre eSIM",
        q1: "¿Mi teléfono es compatible con la eSIM de Getly?",
        a1: "La mayoría de dispositivos modernos de Apple, Google y Samsung son compatibles. Puedes comprobarlo al instante en la app.",
        q2: "¿Pierdo mi número habitual al usar la eSIM de Getly?",
        a2: "No. La eSIM funciona en paralelo con tu SIM física, permitiéndote recibir llamadas y usar WhatsApp normalmente."
      }
    },
    flights: {
      badge: "Reserva de Vuelos Internacionales",
      title: "Reserva vuelos directamente desde tu billetera.",
      subtitle: "Compara más de 400 aerolíneas internacionales con precios transparentes y paga directo desde tu saldo multidivisa.",
      cta: "Reservar Vuelos en la App",
      features: {
        title: "Red Global de Rutas y Pago Directo",
        desc: "Evita comisiones por cambio de divisa y pasarelas de terceros. Reserva vuelos nacionales e internacionales al mejor precio.",
        item1: "Compara más de 400 aerolíneas globales y regionales",
        item2: "Paga directo con tu saldo sin costes por conversión de divisa",
        item3: "Billetes electrónicos inmediatos y alertas sobre franquicia de equipaje"
      },
      faq: {
        title: "Preguntas sobre Vuelos",
        q1: "¿Cómo recibo mis billetes de avión?",
        a1: "Tu billete electrónico y localizador se envían de inmediato a tu app Getly y a tu correo electrónico.",
        q2: "¿Puedo modificar o cancelar mi vuelo?",
        a2: "Sí, puedes gestionar cambios o cancelaciones desde la app según las condiciones de la aerolínea."
      }
    },
    hotels: {
      badge: "Alojamiento Mundial",
      title: "Alojamientos a medida para cada viaje.",
      subtitle: "Reserva hoteles boutique, apartamentos y resorts en más de 180 países directamente con tu billetera multidivisa.",
      cta: "Reservar Hoteles en la App",
      features: {
        title: "Reservas Transparentes en Tiempo Real",
        desc: "Sin sorpresas de tipo de cambio al pagar. Asegura tu estancia con tarifas locales claras y confirmación instantánea.",
        item1: "Acceso a más de 1,000,000 de alojamientos verificados",
        item2: "Paga directamente con saldo multidivisa sin sobrecostes de cambio",
        item3: "Cancelación flexible y soporte de reservas 24/7 en la app"
      },
      visual: {
        tag: "Estancias Seleccionadas",
        title: "Check-in Rápido y Llaves Digitales",
        badge: "180+ Países"
      },
      faq: {
        title: "Preguntas sobre Hoteles",
        q1: "¿Cómo pago las reservas de hotel en Getly?",
        a1: "Puedes pagar al instante usando el saldo de tu billetera Getly o tu tarjeta virtual sin tarifas internacionales.",
        q2: "¿Los precios son definitivos sin cargos ocultos?",
        a2: "Sí, el precio mostrado en la app es el importe exacto con todos los impuestos incluidos."
      }
    },
    insurance: {
      badge: "Protección Global de Viaje",
      title: "Cobertura completa dondequiera que aterrices.",
      subtitle: "Emergencias médicas, pérdida de equipaje, retrasos de vuelos y cobertura de aventura con un solo toque.",
      cta: "Obtener Protección de Viaje",
      features: {
        title: "Póliza Inmediata y Reclamaciones en la App",
        desc: "Activa tu seguro para un viaje o para todo el año. Envía informes médicos y facturas en la app con resolución rápida.",
        item1: "Hasta $1,000,000 en gastos médicos de urgencia y hospitalización",
        item2: "Compensación por cancelación, interrupción y retraso de equipaje",
        item3: "Línea de emergencia multilingüe 24/7 en cualquier lugar"
      },
      visual: {
        tag: "Aseguradoras Verificadas",
        title: "Protección Global Calificada A",
        badge: "Atención 24/7"
      },
      faq: {
        title: "Preguntas sobre Seguros",
        q1: "¿Cuándo debo activar la protección de viaje?",
        a1: "Puedes activarla antes de viajar o programarla para que inicie automáticamente cuando salga tu vuelo.",
        q2: "¿Cómo solicito una indemnización?",
        a2: "Sube tus facturas o informes médicos en la app Getly. Nuestro equipo revisa tu caso en menos de 48 horas."
      }
    },
    visa: {
      badge: "Gestión Digital de Visados",
      title: "Visados rápidos sin complicaciones.",
      subtitle: "Verifica requisitos de entrada, envía tus documentos con seguridad y sigue el estado de tu visado en tiempo real.",
      cta: "Consultar Requisitos de Visado",
      features: {
        title: "Comprobación Inteligente y Aprobación Rápida",
        desc: "Conoce los documentos exactos que necesitas antes de comprar vuelos. Getly agiliza formularios y emisión de visados.",
        item1: "Comprobación de requisitos y visados electrónicos para más de 120 países",
        item2: "Bóveda digital segura con escaneo automatizado de pasaporte",
        item3: "Seguimiento en directo con notificaciones push sobre el estado consular"
      },
      visual: {
        tag: "Inmigración Global",
        title: "120+ Destinos Admitidos",
        badge: "Vía Rápida"
      },
      faq: {
        title: "Preguntas sobre Visados",
        q1: "¿Con qué rapidez se procesan los visados?",
        a1: "El tiempo depende del país de destino, desde 24 horas para visados electrónicos hasta plazos consulares estándar.",
        q2: "¿Mis datos y documentos están protegidos?",
        a2: "Todos los documentos se cifran con los más altos estándares y se envían únicamente a entidades oficiales acreditadas."
      }
    },
    "ai-trip-planner": {
      badge: "Compañero IA Getly",
      title: "Itinerarios personalizados y consejos inteligentes.",
      subtitle: "Getly IA calcula tu presupuesto diario, sugiere lugares únicos y gestiona tus reservas automáticamente.",
      cta: "Probar Planificador IA",
      featuresTitle: "Inteligencia para tus Viajes",
      featuresDesc: "Ya sea que visites Tokio 3 días o vivas en Berlín 6 meses, Getly IA te guía con recomendaciones locales y control de gastos.",
      item1: "Itinerarios diarios a medida generados en segundos",
      item2: "Desglose de presupuesto local para comida, transporte y ocio",
      item3: "Recordatorios inteligentes de datos eSIM y seguridad de tarjetas"
    },
    coverage: {
      badge: "Cobertura Global",
      title: "Países y Destinos Admitidos",
      subtitle: "Explora más de 180 destinos para datos eSIM, saldo multidivisa y pagos con tarjeta.",
      searchPlaceholder: "Buscar país, región o código ISO..."
    },
    security: {
      badge: "Seguridad y Protección",
      title: "Protegemos cada paso de tu viaje.",
      subtitle: "Tus fondos y privacidad están respaldados por cifrado multicapa e infraestructura regulada de primer nivel.",
      card1Title: "Protección Biométrica",
      card1Desc: "Face ID y huella dactilar para autorizar cada compra y acceso.",
      card2Title: "Control Inmediato",
      card2Desc: "Pausa o reactiva tus tarjetas en un solo toque.",
      card3Title: "Datos Cifrados",
      card3Desc: "Cifrado de extremo a extremo para saldos, billetes e información personal."
    },
    about: {
      badge: "Nuestra Historia",
      title: "Creado para el viajero moderno.",
      subtitle: "Getly nació para eliminar la fricción financiera y de conectividad de los viajeros del mundo.",
      quote: "\"Convirtiendo lugares desconocidos en experiencias inolvidables.\"",
      whyTitle: "Por Qué Nació Getly",
      whyP1: "Viajar al extranjero o trabajar de forma remota no debería exigir lidiar con cinco aplicaciones distintas para cambiar moneda, comprar SIMs o reservar vuelos.",
      whyP2: "Getly une las herramientas esenciales en una experiencia unificada: billetera multidivisa, tarjetas virtuales, internet eSIM en más de 180 países y reservas aéreas directas."
    },
    faq: {
      badge: "Preguntas y Respuestas",
      title: "Centro de Ayuda y Preguntas Frecuentes",
      subtitle: "Encuentra respuestas rápidas sobre recargas, tarjetas virtuales, activación de eSIM y reservas de vuelos y hoteles."
    },
    blog: {
      badge: "Blog y Noticias",
      title: "Historias de Viajes y Novedades",
      subtitle: "Consejos, guías y novedades para viajeros modernos y nómadas digitales.",
      readStory: "Leer Artículo"
    },
    press: {
      badge: "Centro de Prensa",
      title: "Getly en los Medios",
      subtitle: "Comunicados oficiales, recursos para medios y noticias de la compañía.",
      cardTitle: "Contacto para Medios",
      cardDesc: "Para solicitudes de prensa, recursos de marca o entrevistas con el equipo de Getly, escríbenos a press@getly.app.",
      cardCta: "Contactar a Prensa"
    },
    legal: {
      badge: "Cumplimiento Legal y Normativo",
      lastUpdated: "Última actualización: Septiembre de 2026",
      privacy: {
        title: "Política de Privacidad",
        description: "Cómo Getly recopila, utiliza y protege tus datos personales y de viaje.",
        section1Title: "1. Información que Recopilamos",
        section1Desc: "Getly recopila la información personal necesaria para ofrecer servicios de viaje, gestión de billetera, provisión de eSIM, hoteles y reserva de vuelos. Esto incluye datos de perfil, registros de verificación de identidad, especificaciones técnicas del dispositivo y registros de transacciones.",
        section2Title: "2. Cómo Usamos tu Información",
        section2Desc: "Procesamos tu información estrictamente para operar la super app Getly, verificar la identidad, entregar perfiles eSIM, procesar transacciones de pago, prevenir fraudes y cumplir con las obligaciones regulatorias.",
        section3Title: "3. Seguridad y Almacenamiento de Datos",
        section3Desc: "Implementamos cifrado multicapa, autenticación biométrica y estrictos controles de acceso para proteger tus datos personales contra accesos no autorizados, pérdidas o usos indebidos."
      },
      terms: {
        title: "Términos del Servicio",
        description: "Términos generales del servicio y acuerdo de usuario para la app y plataforma Getly.",
        section1Title: "1. Aceptación de los Términos",
        section1Desc: "Al descargar, acceder o utilizar la aplicación móvil o el sitio web de Getly, aceptas quedar vinculado por estos Términos del Servicio.",
        section2Title: "2. Servicios Prestados",
        section2Desc: "Getly ofrece funcionalidades de billetera multidivisa, emisión de tarjetas virtuales de viaje, planes de datos móviles eSIM globales, reservas de vuelos, hoteles, seguros de viaje y soporte para visados digitales en colaboración con proveedores financieros y turísticos autorizados.",
        section3Title: "3. Responsabilidades del Usuario",
        section3Desc: "Aceptas proporcionar datos de identificación precisos, mantener la seguridad de las credenciales de tu dispositivo y utilizar los servicios de conformidad con las leyes locales e internacionales aplicables."
      },
      cookie: {
        title: "Política de Cookies",
        description: "Cómo utiliza Getly las cookies y el almacenamiento local para optimizar tu experiencia.",
        section1Title: "1. Qué son las Cookies",
        section1Desc: "Las cookies y tokens de almacenamiento local son pequeños archivos de datos alojados en tu navegador o dispositivo que nos permiten recordar tus preferencias y garantizar sesiones seguras.",
        section2Title: "2. Cómo Usamos las Cookies",
        section2Desc: "Getly utiliza cookies esenciales para la gestión segura de sesiones y autenticación, cookies funcionales para guardar tus preferencias de idioma y divisa, y cookies analíticas agregadas para monitorizar el rendimiento de la plataforma.",
        section3Title: "3. Gestión de Preferencias",
        section3Desc: "Puedes personalizar o deshabilitar las cookies no esenciales en cualquier momento a través de la configuración de tu navegador o directamente mediante nuestros controles de preferencias en el sitio web."
      },
      aml: {
        title: "Política contra el Blanqueo de Capitales (AML)",
        description: "Estándares de prevención del blanqueo de capitales, financiación del terrorismo y verificación de clientes (KYC).",
        section1Title: "1. Marco Normativo",
        section1Desc: "Getly mantiene estrictos procedimientos de prevención del blanqueo de capitales (AML) y de la financiación del terrorismo (CTF) en cumplimiento con las recomendaciones del GAFI y los organismos reguladores correspondientes.",
        section2Title: "2. Verificación de Identidad (KYC)",
        section2Desc: "Todos los usuarios se someten a una debida diligencia del cliente (CDD) escalonada antes de acceder a servicios de billetera de alto límite, emisión de tarjetas o herramientas de reserva, incluyendo verificación biométrica y de documentos oficiales.",
        section3Title: "3. Monitorización de Transacciones y Sanciones",
        section3Desc: "Sistemas automatizados de monitorización analizan la actividad en tiempo real contrastándola con listas globales de sanciones, bases de datos de personas con responsabilidad pública (PEP) y patrones sospechosos para prevenir delitos financieros."
      },
      complaints: {
        title: "Reclamaciones y Resolución de Disputas",
        description: "Cómo gestiona Getly las quejas de los clientes, las derivaciones y la resolución de disputas.",
        section1Title: "1. Nuestro Compromiso",
        section1Desc: "Nos esforzamos por ofrecer un servicio excepcional. Si experimentas algún problema con tu billetera, tarjeta, eSIM o reserva, nuestro equipo de soporte especializado está disponible 24/7 para resolver tu consulta con rapidez.",
        section2Title: "2. Cómo Presentar una Reclamación",
        section2Desc: "Puedes presentar una queja formal directamente a través del Centro de Ayuda en la app o enviando un correo a complaints@getly.app con la referencia de la transacción y los detalles del caso.",
        section3Title: "3. Plazos de Resolución y Derivación",
        section3Desc: "Acusamos recibo de todas las quejas formales en un plazo de 24 horas y nuestro objetivo es ofrecer una resolución completa en un máximo de 15 días hábiles. Si no quedas satisfecho, tienes derecho a derivar el asunto a organismos independientes de resolución de disputas."
      }
    }
  },

  // FRENCH
  fr: {
    common: {
      brand: {
        name: "Getly",
        headline: "La Super App du Voyageur Moderne",
        slogan: "Transformer des lieux inconnus en expériences inoubliables."
      },
      nav: {
        home: "Accueil",
        wallet: "Portefeuille",
        cards: "Cartes de Voyage",
        esim: "eSIM",
        flights: "Vols",
        hotels: "Hôtels",
        insurance: "Assurance",
        visa: "Visas",
        aiTripPlanner: "Planificateur IA",
        coverage: "Couverture",
        security: "Sécurité",
        pricing: "Tarifs",
        downloadApp: "Télécharger l'App"
      },
      footer: {
        rights: "Tous droits réservés.",
        tagline: "Transformer des lieux inconnus en expériences inoubliables.",
        product: "Produit",
        company: "Entreprise",
        legal: "Mentions légales",
        support: "Assistance",
        aboutUs: "À propos",
        press: "Presse & Médias",
        blog: "Blog & Actualités",
        faq: "Aide & FAQ",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        superAppSubtitle: "Super App Mondiale de Voyage",
        downloadCTA: "Vivez l'expérience du voyage mondial"
      },
      buttons: {
        getApp: "Obtenir l'App Getly",
        exploreFeatures: "Découvrir les fonctionnalités",
        learnMore: "En savoir plus",
        fundWallet: "Approvisionner",
        getCard: "Obtenir une Carte",
        buyEsim: "Acheter une eSIM",
        bookFlight: "Réserver un Vol",
        bookHotel: "Réserver un Hôtel",
        getInsurance: "Assurance Voyage",
        applyVisa: "Demander un Visa"
      }
    },
    home: {
      hero: {
        badge: "Super App Mondiale de Voyage",
        headline: "La Super App du Voyageur Moderne",
        headlineLine1: "La Super App du",
        headlineLine2: "Voyageur Moderne",
        subhead: "Transformer des lieux inconnus en expériences inoubliables. Un portefeuille multi-devises mondial, cartes virtuelles, eSIM, réservations de vols, hôtels, assurances et visas.",
        ctaPrimary: "Télécharger l'App",
        ctaSecondary: "Découvrir les fonctionnalités"
      },
      ticker: [
        "Portefeuille Mondial",
        "Cartes Virtuelles",
        "eSIM Mondiale",
        "Réservation de Vols",
        "Réservations d'Hôtels",
        "Assurance Voyage",
        "Traitement des Visas",
        "Planificateur IA",
        "Approvisionnement Immédiat",
        "Multi-Devises"
      ],
      partners: {
        backedBy: "Soutenu et approuvé par les leaders de l'industrie"
      },
      pillars: {
        title: "Tout ce dont vous avez besoin dans une seule app.",
        subtitle: "Voyager est déjà assez complexe. Getly rassemble tous vos essentiels financiers, hébergements et voyages.",
        wallet: {
          eyebrow: "Portefeuille Mondial",
          headlineLine1: "Un seul portefeuille.",
          headlineLine2: "Valable partout où vous allez.",
          desc: "Approvisionnez, payez et retirez des fonds où que vous soyez.",
          cta: "Explorer le Portefeuille",
          badge: "Payez partout"
        },
        cards: {
          eyebrow: "Cartes Virtuelles",
          headlineLine1: "Une carte virtuelle pour",
          headlineLine2: "chaque achat.",
          desc: "Cartes virtuelles instantanées, financées directement par votre portefeuille.",
          cta: "Explorer les Cartes",
          badge: "Émission Immédiate"
        },
        esim: {
          eyebrow: "eSIM Mondiale",
          headlineLine1: "Atterrissez connecté.",
          headlineLine2: "Restez en ligne.",
          desc: "Activez votre forfait data en quelques secondes. Aucune carte SIM physique.",
          cta: "Explorer l'eSIM",
          badge: "180+ Pays"
        },
        flights: {
          eyebrow: "Vols et Réservations",
          headlineLine1: "Réservez vos vols",
          headlineLine2: "depuis votre portefeuille.",
          desc: "Recherchez, réservez et gérez vos trajets sans quitter Getly.",
          cta: "Explorer les Vols",
          badge: "PAR → NYC"
        },
        hotels: {
          eyebrow: "Séjours à l'Hôtel",
          headlineLine1: "Des hébergements adaptés",
          headlineLine2: "à chaque voyage.",
          desc: "Réservez des hôtels et appartements d'exception dans le monde entier avec votre solde.",
          cta: "Explorer les Hôtels",
          badge: "1M+ Établissements"
        },
        insurance: {
          eyebrow: "Assurance Voyage",
          headlineLine1: "Une protection complète",
          headlineLine2: "dès votre atterrissage.",
          desc: "Frais médicaux d'urgence, annulation et perte de bagages couverts en un geste.",
          cta: "Explorer l'Assurance",
          badge: "Assistance 24/7"
        },
        visa: {
          eyebrow: "Demande de Visas",
          headlineLine1: "Des visas rapides",
          headlineLine2: "en toute simplicité.",
          desc: "Vérifiez les formalités d'entrée, soumettez vos documents et suivez l'avancement en direct.",
          cta: "Explorer les Visas",
          badge: "120+ Destinations"
        }
      },
      ai: {
        badge: "Compagnon IA Getly",
        title: "Itinéraires Personnalisés & Conseils Intelligents",
        subtitle: "Getly IA planifie votre budget journalier, suggère des lieux uniques et gère vos voyages.",
        cta: "Découvrir le Planificateur IA",
        feature1Title: "Itinéraires Intelligents",
        feature1Desc: "Programmes journaliers sur mesure générés en quelques secondes selon vos envies.",
        feature2Title: "Gestion du Budget",
        feature2Desc: "Estimation des dépenses quotidiennes en devises locales pour les repas et transports.",
        hoverHint: "Survolez pour voir Getly IA à l'œuvre"
      },
      howItWorks: {
        badge: "Processus Simple",
        title: "Comment Fonctionne Getly",
        subtitle: "Commencez en 4 étapes simples",
        step1Eyebrow: "Pour Commencer",
        step1Title: "Téléchargez l'App Getly",
        step1Desc: "Installez Getly depuis l'App Store ou Google Play et validez votre profil en quelques instants.",
        step2Eyebrow: "Multi-Devises",
        step2Title: "Approvisionnez votre Portefeuille",
        step2Desc: "Ajoutez des fonds via carte bancaire, virement local ou réseau international.",
        step3Eyebrow: "Cartes & Data",
        step3Title: "Créez une Carte et Activez l'eSIM",
        step3Desc: "Générez vos cartes virtuelles et activez votre forfait internet mondial instantanément.",
        step4Eyebrow: "Voyagez Sans Frontières",
        step4Title: "Explorez le Monde en Toute Sérénité",
        step4Desc: "Payez à l'étranger, réservez vos vols et hôtels l'esprit tranquille."
      },
      trust: {
        stat1Value: "Mondial",
        stat1Label: "expérience pensée pour voyager",
        stat2Value: "0 €",
        stat2Label: "frais d'émission de carte*",
        stat3Value: "24/7",
        stat3Label: "assistance directe dans l'app",
        stat4Value: "1 app",
        stat4Label: "pour l'ensemble du voyage"
      },
      coverage: {
        badge: "Présence Mondiale",
        title: "Disponible dans plus de 180 Destinations",
        subtitle: "Que vous réserviez des vols, naviguiez avec l'eSIM ou payiez avec vos cartes virtuelles, Getly voyage avec vous.",
        viewAll: "Découvrir tous les pays et la couverture"
      },
      faq: {
        badge: "Questions & Réponses",
        title: "Foire Aux Questions",
        subtitle: "Des questions sur Getly ? Nous avons toutes les réponses.",
        viewAll: "Voir toutes les questions fréquentes",
        q1: "Qu'est-ce que Getly ?",
        a1: "Getly est la super application tout-en-un pour les voyageurs modernes, les professionnels et les expatriés, regroupant portefeuille multi-devises, cartes virtuelles, eSIM, vols, hôtels, assurances et visas.",
        q2: "Comment approvisionner mon portefeuille Getly ?",
        a2: "Vous pouvez recharger instantanément par carte bancaire locale, options de paiement bancaire ou réseaux de paiement internationaux.",
        q3: "Comment fonctionne l'eSIM internationale ?",
        a3: "Getly propose des profils eSIM numériques pour plus de 180 pays. Scannez le code QR ou appuyez sur installation automatique pour surfer sur les réseaux locaux.",
        q4: "Puis-je réserver mes vols et hôtels avec mon solde ?",
        a4: "Oui ! Getly vous permet de comparer et réserver des vols et plus d'un million d'hôtels directement depuis votre solde multi-devises."
      },
      download: {
        eyebrow: "Votre aventure commence ici",
        headlineLine1: "Une seule app.",
        headlineLine2: "Des voyages infinis.",
        subtitle: "Téléchargez Getly et emportez portefeuille, data, réservations et compagnon de route avec vous."
      }
    },
    wallet: {
      badge: "Portefeuille Multi-Devises Mondial",
      title: "Un portefeuille. Toutes les devises du monde.",
      subtitle: "Approvisionnez facilement, détenez des soldes multi-devises, payez partout et retirez vos fonds en toute liberté.",
      cta: "Obtenir le Portefeuille",
      features: {
        title: "Recharge Instantanée & Dépenses Internationales",
        desc: "Que vous régliez un dîner à Tokyo, commandiez un transport à Paris ou prépariez un futur départ, le portefeuille Getly fonctionne de manière fluide.",
        item1: "Recharge instantanée par carte bancaire et options bancaires locales",
        item2: "Gestion multi-devises transparente sans frais cachés",
        item3: "Retraits flexibles vers vos comptes bancaires dès que nécessaire"
      },
      faq: {
        title: "FAQ Portefeuille",
        q1: "Quelles devises puis-je détenir dans Getly ?",
        a1: "Vous pouvez conserver et échanger les principales devises comme USD, EUR, GBP, NGN, CAD et AED au sein d'un solde unique.",
        q2: "Combien de temps prend un approvisionnement ?",
        a2: "Les recharges par carte bancaire ou lien de paiement direct sont créditées immédiatement sur votre solde."
      }
    },
    cards: {
      badge: "Cartes de Voyage Virtuelles",
      title: "Une carte pour chaque achat.",
      subtitle: "Générez des cartes virtuelles instantanées pour vos achats en ligne, abonnements, vols et restaurants.",
      cta: "Obtenir une Carte",
      features: {
        title: "Génération Instantanée & Contrôle Total",
        desc: "Créez vos cartes virtuelles en quelques secondes depuis votre smartphone. Utilisez-les sur tous les sites marchands avec notifications d'achat en temps réel.",
        item1: "Création instantanée avec plafonds de dépenses personnalisés",
        item2: "Verrouillage et déverrouillage d'un simple geste pour une sécurité totale",
        item3: "Acceptation mondiale sur les boutiques en ligne et compagnies aériennes"
      },
      faq: {
        title: "FAQ Cartes",
        q1: "Les cartes virtuelles Getly sont-elles acceptées dans le monde entier ?",
        a1: "Oui, elles fonctionnent sur les plateformes de commerce en ligne internationales, sites de voyage et abonnements.",
        q2: "Puis-je bloquer ma carte en cas d'imprévu ?",
        a2: "Oui, vous pouvez geler et réactiver n'importe quelle carte d'un simple clic dans votre tableau de bord."
      }
    },
    esim: {
      badge: "Connectivité eSIM Mondiale",
      title: "Forfaits data mondiaux. Zéro carte SIM physique.",
      subtitle: "Atterrissez dans n'importe quel pays et connectez-vous immédiatement à l'internet haut débit sans frais d'itinérance excessifs.",
      cta: "Obtenir un Forfait eSIM",
      features: {
        title: "Activation Immédiate dans 180+ Pays",
        desc: "Ne perdez plus de temps aux comptoirs d'aéroports. Choisissez votre forfait de données régional et installez votre profil dès l'atterrissage.",
        item1: "Installation instantanée via QR code ou en 1 clic dans l'application",
        item2: "Forfaits locaux, régionaux et mondiaux flexibles",
        item3: "Aucune surprise sur votre facture de téléphonie à l'étranger"
      },
      faq: {
        title: "FAQ eSIM",
        q1: "Mon téléphone est-il compatible avec l'eSIM Getly ?",
        a1: "La plupart des téléphones récents Apple, Google et Samsung sont compatibles. Vérifiez en un instant dans l'application.",
        q2: "Est-ce que je conserve mon numéro habituel ?",
        a2: "Oui, l'eSIM fonctionne en parallèle de votre carte SIM physique, vous permettant de conserver WhatsApp et vos appels entrants."
      }
    },
    flights: {
      badge: "Réservation de Vols Internationaux",
      title: "Réservez vos vols directement depuis votre portefeuille.",
      subtitle: "Comparez plus de 400 compagnies aériennes internationales avec des tarifs transparents et réglez directement depuis votre solde multi-devises.",
      cta: "Réserver des Vols",
      features: {
        title: "Réseau Mondial de Vols & Paiement Direct",
        desc: "Évitez les frais de conversion bancaires et les étapes de paiement complexes. Réservez vos trajets au meilleur prix.",
        item1: "Comparez plus de 400 compagnies aériennes internationales et régionales",
        item2: "Paiement direct depuis votre solde sans surcoût de change",
        item3: "Billets électroniques instantanés et alertes bagages automatiques"
      },
      faq: {
        title: "FAQ Vols",
        q1: "Comment recevoir mes billets d'avion ?",
        a1: "Votre e-billet et votre référence de vol sont envoyés immédiatement dans l'application Getly et par email.",
        q2: "Puis-je modifier ou annuler mon vol ?",
        a2: "Oui, la gestion des modifications ou annulations s'effectue directement dans l'application selon les règles de la compagnie."
      }
    },
    hotels: {
      badge: "Hébergements Mondiaux",
      title: "Des hébergements adaptés à chaque voyage.",
      subtitle: "Réservez des hôtels de charme, appartements urbains et complexes de luxe dans plus de 180 pays directement depuis votre portefeuille.",
      cta: "Réserver des Hôtels dans l'App",
      features: {
        title: "Réservations Fluides et Tarifs en Temps Réel",
        desc: "Aucune mauvaise surprise de change au moment de régler. Bloquez votre hébergement avec des tarifs locaux clairs.",
        item1: "Accès à plus d'un million d'établissements vérifiés",
        item2: "Paiement direct depuis votre solde sans frais de change cachés",
        item3: "Annulation flexible et support dédié 24h/24 dans l'application"
      },
      visual: {
        tag: "Séjours d'Exception",
        title: "Enregistrement Rapide & Clés Digitales",
        badge: "180+ Pays"
      },
      faq: {
        title: "Questions sur les Hôtels",
        q1: "Comment régler mes réservations d'hôtel sur Getly ?",
        a1: "Vous pouvez payer instantanément depuis votre solde Getly ou avec votre carte virtuelle sans frais internationaux.",
        q2: "Les prix affichés sont-ils garantis sans frais cachés ?",
        a2: "Oui, le prix affiché dans l'application est le montant exact débité, toutes taxes incluses."
      }
    },
    insurance: {
      badge: "Protection Voyage Internationale",
      title: "Une protection complète dès votre atterrissage.",
      subtitle: "Frais médicaux d'urgence, perte de bagages, retards de vol et couverture aventure activables en un clic.",
      cta: "Souscrire à l'Assurance",
      features: {
        title: "Attestation Immédiate et Déclaration en Ligne",
        desc: "Assurez un voyage ponctuel ou l'ensemble de vos déplacements à l'année. Transmettez vos justificatifs directement dans l'application.",
        item1: "Jusqu'à 1 000 000 $ de prise en charge médicale et hospitalière d'urgence",
        item2: "Indemnisation en cas d'annulation de vol ou retard de bagages",
        item3: "Plateforme d'assistance multilingue joignable 24/7 partout dans le monde"
      },
      visual: {
        tag: "Assureurs Reconnus",
        title: "Protection Mondiale de Premier Rang",
        badge: "Assistance 24/7"
      },
      faq: {
        title: "Questions sur l'Assurance",
        q1: "Quand activer ma protection de voyage ?",
        a1: "Vous pouvez souscrire avant votre départ ou programmer l'activation automatique au moment du décollage.",
        q2: "Comment déclarer un sinistre ?",
        a2: "Téléchargez vos factures ou rapports médicaux dans l'application Getly. Nos équipes traitent votre dossier sous 48 heures."
      }
    },
    visa: {
      badge: "Traitement Digital des Visas",
      title: "Des visas rapides en toute simplicité.",
      subtitle: "Consultez les formalités d'entrée, soumettez vos documents de manière sécurisée et suivez votre demande en temps réel.",
      cta: "Vérifier les Formalités",
      features: {
        title: "Vérification Automatique et Approbation Rapide",
        desc: "Sachez exactement quels documents fournir avant de prendre vos billets. Getly simplifie vos démarches administratives.",
        item1: "Vérification des conditions d'entrée et e-visas pour plus de 120 pays",
        item2: "Coffre-fort numérique sécurisé avec scan intelligent du passeport",
        item3: "Suivi en direct avec alertes sur l'avancement consulaire"
      },
      visual: {
        tag: "Immigration Mondiale",
        title: "120+ Destinations Prises en Charge",
        badge: "Voie Rapide"
      },
      faq: {
        title: "Questions sur les Visas",
        q1: "Quels sont les délais d'obtention d'un e-visa ?",
        a1: "Les délais varient selon le pays, allant de 24h pour les e-visas instantanés aux délais consulaires habituels.",
        q2: "Mes données et documents sont-ils en sécurité ?",
        a2: "Vos pièces d'identité sont chiffrées selon les normes de sécurité les plus strictes et transmises uniquement aux autorités compétentes."
      }
    },
    "ai-trip-planner": {
      badge: "Compagnon IA Getly",
      title: "Itinéraires personnalisés et conseils intelligents.",
      subtitle: "Getly IA estime vos dépenses journalières, déniche des pépites locales et synchronise votre matériel de voyage.",
      cta: "Tester le Planificateur IA",
      featuresTitle: "L'Intelligence au Service du Voyage",
      featuresDesc: "Que vous partiez 3 jours à Tokyo ou 6 mois à Berlin, Getly IA vous guide avec des conseils personnalisés et un suivi budgétaire en temps réel.",
      item1: "Plans de voyage quotidiens sur mesure en un clin d'œil",
      item2: "Estimation précise des coûts de transport, repas et sorties en devise locale",
      item3: "Rappels proactifs pour vos recharges eSIM et la sécurité de vos cartes"
    },
    coverage: {
      badge: "Couverture Mondiale",
      title: "Pays et Destinations Disponibles",
      subtitle: "Découvrez plus de 180 destinations pour la data eSIM, vos soldes multi-devises et vos paiements par carte.",
      searchPlaceholder: "Rechercher un pays, une région ou un code ISO..."
    },
    security: {
      badge: "Sécurité & Protection",
      title: "Protéger chaque étape de votre voyage.",
      subtitle: "Vos fonds et vos données personnelles sont protégés par un chiffrement multicouche et une infrastructure partenaire certifiée.",
      card1Title: "Authentification Biométrique",
      card1Desc: "Face ID et reconnaissance d'empreinte pour chaque paiement et ouverture de l'application.",
      card2Title: "Contrôle Immédiat",
      card2Desc: "Bloquez ou débloquez vos cartes instantanément d'un simple geste.",
      card3Title: "Données Sécurisées",
      card3Desc: "Chiffrement intégral de vos soldes, réservations et données personnelles."
    },
    about: {
      badge: "Notre Histoire",
      title: "Conçu pour le voyageur moderne.",
      subtitle: "Getly a été créé pour éliminer les frictions financières et de connectivité pour les voyageurs du monde entier.",
      quote: "\"Transformer des lieux inconnus en expériences inoubliables.\"",
      whyTitle: "Pourquoi Nous Avons Créé Getly",
      whyP1: "Voyager à l'international ou travailler à distance ne devrait pas nécessiter de jongler entre cinq applications distinctes pour changer des devises, acheter une SIM ou réserver un vol.",
      whyP2: "Getly rassemble les essentiels du voyage en une seule plateforme : portefeuille multi-devises, cartes virtuelles, forfaits eSIM dans plus de 180 pays et réservation de vols directe."
    },
    faq: {
      badge: "Questions & Réponses",
      title: "Centre d'Aide & Questions Fréquentes",
      subtitle: "Trouvez des réponses rapides sur les recharges, les cartes virtuelles, l'activation eSIM, les hôtels et les réservations de vols."
    },
    blog: {
      badge: "Blog & Actualités",
      title: "Récits de Voyage & Nouveautés",
      subtitle: "Guides, conseils et actualités pour les voyageurs modernes et nomades numériques.",
      readStory: "Lire l'Article"
    },
    press: {
      badge: "Espace Presse",
      title: "Getly dans les Médias",
      subtitle: "Communiqués officiels, kits médias et parutions presse.",
      cardTitle: "Contact Presse & Relations Médias",
      cardDesc: "Pour toute demande presse, kit graphique ou interview avec l'équipe Getly, écrivez-nous à press@getly.app.",
      cardCta: "Contacter l'Équipe Presse"
    },
    legal: {
      badge: "Conformité Légale & Réglementaire",
      lastUpdated: "Dernière mise à jour : Septembre 2026",
      privacy: {
        title: "Politique de Confidentialité",
        description: "Comment Getly collecte, utilise et protège vos données personnelles et vos informations de voyage.",
        section1Title: "1. Informations Collectées",
        section1Desc: "Getly collecte les données personnelles indispensables à la fourniture des services de voyage, à la gestion du portefeuille, à l'activation des forfaits eSIM, aux hôtels et aux réservations de vols.",
        section2Title: "2. Utilisation de vos Données",
        section2Desc: "Nous traitons vos données exclusivement pour faire fonctionner l'application Getly, vérifier votre identité, activer vos profils eSIM, exécuter vos paiements et prévenir toute activité frauduleuse.",
        section3Title: "3. Sécurité et Conservation",
        section3Desc: "Nous appliquons un chiffrement multicouche, une authentification biométrique et des protocoles d'accès rigoureux pour préserver l'intégrité de vos données."
      },
      terms: {
        title: "Conditions Générales d'Utilisation",
        description: "Conditions générales d'utilisation et contrat d'utilisateur pour l'application et la plateforme Getly.",
        section1Title: "1. Acceptation des Conditions",
        section1Desc: "En téléchargeant, consultant ou utilisant l'application mobile ou le site Getly, vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation.",
        section2Title: "2. Services Fournis",
        section2Desc: "Getly propose des fonctionnalités de portefeuille multi-devises, l'émission de cartes virtuelles, des forfaits de données mobiles eSIM, des réservations de vols, d'hôtels, des assurances et des visas digitaux avec des partenaires agréés.",
        section3Title: "3. Responsabilités de l'Utilisateur",
        section3Desc: "Vous vous engagez à fournir des informations d'identité exactes, à préserver la confidentialité de vos identifiants et à utiliser nos services dans le respect des lois en vigueur."
      },
      cookie: {
        title: "Politique des Cookies",
        description: "Comment Getly utilise les cookies et le stockage local pour optimiser votre navigation.",
        section1Title: "1. Qu'est-ce qu'un Cookie",
        section1Desc: "Les cookies et éléments de stockage local sont de petits fichiers déposés sur votre navigateur permettant de mémoriser vos préférences et de sécuriser vos sessions.",
        section2Title: "2. Utilisation des Cookies",
        section2Desc: "Getly utilise des cookies essentiels pour la sécurité et l'authentification, des cookies fonctionnels pour enregistrer vos préférences de langue et de devises, et des cookies analytiques agrégés.",
        section3Title: "3. Gestion de vos Préférences",
        section3Desc: "Vous pouvez à tout moment personnaliser ou désactiver les cookies non essentiels depuis les paramètres de votre navigateur ou via notre outil de préférences."
      },
      aml: {
        title: "Politique Anti-Blanchiment (AML)",
        description: "Normes Getly en matière de lutte contre le blanchiment d'argent et vérification d'identité (KYC).",
        section1Title: "1. Cadre Réglementaire",
        section1Desc: "Getly applique des procédures strictes de lutte contre le blanchiment d'argent (AML) et le financement du terrorisme (CTF) conformément aux recommandations du GAFI.",
        section2Title: "2. Vérification d'Identité (KYC)",
        section2Desc: "Tous les utilisateurs font l'objet d'une procédure de vigilance (CDD) adaptée avant d'accéder aux plafonds élevés de portefeuille ou à l'émission de cartes.",
        section3Title: "3. Surveillance & Sanctions",
        section3Desc: "Des systèmes automatisés analysent les transactions en temps réel et vérifient les listes de sanctions internationales pour prévenir la criminalité financière."
      },
      complaints: {
        title: "Réclamations & Résolution des Litiges",
        description: "Comment Getly traite les réclamations clients et la médiation.",
        section1Title: "1. Notre Engagement",
        section1Desc: "Nous accordons une priorité absolue à la satisfaction client. Notre équipe d'assistance dédiée est joignable 24/7 pour répondre à vos questions.",
        section2Title: "2. Soumettre une Réclamation",
        section2Desc: "Vous pouvez formuler une réclamation officielle depuis le centre d'aide de l'application ou par courriel à complaints@getly.app.",
        section3Title: "3. Délais de Traitement",
        section3Desc: "Nous accusons réception de toute réclamation sous 24 heures et apportons une réponse circonstanciée dans un délai maximum de 15 jours ouvrés."
      }
    }
  },

  // GERMAN
  de: {
    common: {
      brand: {
        name: "Getly",
        headline: "Die Super-App für moderne Reisende",
        slogan: "Unbekannte Orte in unvergessliche Erlebnisse verwandeln."
      },
      nav: {
        home: "Startseite",
        wallet: "Wallet",
        cards: "Reisekarten",
        esim: "eSIM",
        flights: "Flüge",
        hotels: "Hotels",
        insurance: "Versicherung",
        visa: "Visa",
        aiTripPlanner: "KI-Reiseplaner",
        coverage: "Abdeckung",
        security: "Sicherheit",
        pricing: "Gebühren",
        downloadApp: "App holen"
      },
      footer: {
        rights: "Alle Rechte vorbehalten.",
        tagline: "Unbekannte Orte in unvergessliche Erlebnisse verwandeln.",
        product: "Produkt",
        company: "Unternehmen",
        legal: "Rechtliches",
        support: "Support",
        aboutUs: "Über uns",
        press: "Presse & Medien",
        blog: "Blog & News",
        faq: "Hilfe & FAQ",
        privacy: "Datenschutzerklärung",
        terms: "Nutzungsbedingungen",
        superAppSubtitle: "Globale Reise-Super-App",
        downloadCTA: "Erleben Sie modernes globales Reisen"
      },
      buttons: {
        getApp: "Getly App holen",
        exploreFeatures: "Funktionen entdecken",
        learnMore: "Mehr erfahren",
        fundWallet: "Wallet aufladen",
        getCard: "Karte erhalten",
        buyEsim: "Globale eSIM kaufen",
        bookFlight: "Flug buchen",
        bookHotel: "Hotel buchen",
        getInsurance: "Reiseschutz holen",
        applyVisa: "Visum beantragen"
      }
    },
    home: {
      hero: {
        badge: "Globale Reise-Super-App",
        headline: "Die Super-App für moderne Reisende",
        headlineLine1: "Die Super-App für",
        headlineLine2: "moderne Reisende",
        subhead: "Unbekannte Orte in unvergessliche Erlebnisse verwandeln. Ein globales Multi-Währungs-Wallet, virtuelle Karten, eSIMs, Flug- und Hotelbuchungen, Reiseschutz und Visa in einer App.",
        ctaPrimary: "App herunterladen",
        ctaSecondary: "Funktionen entdecken"
      },
      ticker: [
        "Globales Wallet",
        "Virtuelle Karten",
        "Globale eSIM",
        "Flugbuchung",
        "Hotelübernachtungen",
        "Reiseschutz",
        "Visumsantrag",
        "KI-Reiseplaner",
        "Sofortiges Aufladen",
        "Multi-Währung"
      ],
      partners: {
        backedBy: "Unterstützt und geschätzt von führenden Branchenpartnern"
      },
      pillars: {
        title: "Alles, was Sie brauchen, in einer einzigen App.",
        subtitle: "Reisen ist schon kompliziert genug. Getly vereint Finanzen, Konnektivität, Unterkünfte und Flüge in einem nahtlosen Erlebnis.",
        wallet: {
          eyebrow: "Globales Wallet",
          headlineLine1: "Ein Wallet.",
          headlineLine2: "Funktioniert überall.",
          desc: "Aufladen, weltweit bezahlen und jederzeit Geld abheben.",
          cta: "Wallet entdecken",
          badge: "Weltweit bezahlen"
        },
        cards: {
          eyebrow: "Virtuelle Karten",
          headlineLine1: "Eine virtuelle Karte für",
          headlineLine2: "jeden Einkauf.",
          desc: "Sofortige virtuelle Karten, direkt aus Ihrem Wallet finanziert.",
          cta: "Karten entdecken",
          badge: "Sofortige Ausgabe"
        },
        esim: {
          eyebrow: "Globale eSIM",
          headlineLine1: "Verbunden landen.",
          headlineLine2: "Online bleiben.",
          desc: "Datenpaket wählen und sofort surfen. Keine physische SIM nötig.",
          cta: "eSIM entdecken",
          badge: "180+ Länder"
        },
        flights: {
          eyebrow: "Flugbuchungen",
          headlineLine1: "Flüge buchen",
          headlineLine2: "direkt aus dem Wallet.",
          desc: "Suchen, vergleichen und buchen ohne Getly zu verlassen.",
          cta: "Flüge entdecken",
          badge: "BER → DXB"
        },
        hotels: {
          eyebrow: "Hotelaufenthalte",
          headlineLine1: "Unterkünfte maßgeschneidert",
          headlineLine2: "für jede Reise.",
          desc: "Boutique-Hotels und Luxusresorts weltweit direkt mit Ihrem Guthaben buchen.",
          cta: "Hotels entdecken",
          badge: "1M+ Unterkünfte"
        },
        insurance: {
          eyebrow: "Reiseschutz",
          headlineLine1: "Rundum-Schutz",
          headlineLine2: "egal wo Sie landen.",
          desc: "Medizinische Notfälle, Flugverspätungen und Gepäckverlust mit einem Fingertipp absichern.",
          cta: "Schutz entdecken",
          badge: "24/7 Notrufservice"
        },
        visa: {
          eyebrow: "Visumsabwicklung",
          headlineLine1: "Schnelle Visa",
          headlineLine2: "ohne bürokratischen Stress.",
          desc: "Einreisebestimmungen prüfen, digitale Dokumente einreichen und Status live verfolgen.",
          cta: "Visa entdecken",
          badge: "120+ Destinationen"
        }
      },
      ai: {
        badge: "Getly KI-Begleiter",
        title: "Personalisierte Routen & Smarte Reisetipps",
        subtitle: "Getly KI plant Ihr Tagesbudget, empfiehlt Geheimtipps und verwaltet Ihre Reisevorbereitungen.",
        cta: "KI-Reiseplaner testen",
        feature1Title: "Smarte Tagespläne",
        feature1Desc: "Maßgeschneiderte Reisepläne in Sekundenschnelle erstellt.",
        feature2Title: "Budget-Übersicht",
        feature2Desc: "Berechnet tägliche Ausgaben für Verpflegung und Transport in Landeswährung.",
        hoverHint: "Bewegen Sie den Mauszeiger, um Getly KI in Aktion zu sehen"
      },
      howItWorks: {
        badge: "Einfacher Ablauf",
        title: "So funktioniert Getly",
        subtitle: "In 4 einfachen Schritten startklar",
        step1Eyebrow: "Starten",
        step1Title: "Getly App herunterladen",
        step1Desc: "App Store oder Google Play öffnen und Verifizierung in Minuten abschließen.",
        step2Eyebrow: "Multi-Währung",
        step2Title: "Wallet aufladen",
        step2Desc: "Guthaben mit Debitkarte, Banküberweisung oder globalen Zahlungsarten hinzufügen.",
        step3Eyebrow: "Karten & Daten",
        step3Title: "Virtuelle Karte & eSIM aktivieren",
        step3Desc: "Karten sofort erstellen und Highspeed-eSIM-Datenpaket installieren.",
        step4Eyebrow: "Grenzenlos Reisen",
        step4Title: "Die Welt entspannt entdecken",
        step4Desc: "Weltweit bezahlen, Flüge buchen und sorgenfrei reisen."
      },
      trust: {
        stat1Value: "Global",
        stat1Label: "für Reisende optimiert",
        stat2Value: "0 €",
        stat2Label: "Kartenausgabegebühr*",
        stat3Value: "24/7",
        stat3Label: "In-App-Support",
        stat4Value: "1 App",
        stat4Label: "für die gesamte Reise"
      },
      coverage: {
        badge: "Globale Reichweite",
        title: "In über 180 Destinationen verfügbar",
        subtitle: "Egal ob Flugbuchung, eSIM-Internet oder Kartenzahlung – Getly begleitet Sie überall.",
        viewAll: "Alle Länder und Abdeckungsgebiete anzeigen"
      },
      faq: {
        badge: "Fragen & Antworten",
        title: "Häufig gestellte Fragen",
        subtitle: "Haben Sie Fragen zu Getly? Hier finden Sie alle Antworten.",
        viewAll: "Alle FAQs ansehen",
        q1: "Was ist Getly?",
        a1: "Getly ist die Finanz- und Reise-Super-App für moderne Reisende, Expats und digitale Nomaden. Sie vereint ein Multi-Währungs-Wallet mit virtuellen Karten, eSIM, Flügen, Hotels, Versicherung und Visa.",
        q2: "Wie lade ich mein Getly Wallet auf?",
        a2: "Sie können Ihr Wallet sofort per Debitkarte, Banküberweisungsoptionen oder internationalen Zahlungswegen aufladen.",
        q3: "Wie funktioniert die globale eSIM?",
        a3: "Getly stellt digitale eSIM-Profile für 180+ Länder bereit. QR-Code scannen oder 1-Klick-Installation nutzen und sofort im lokalen Netz surfen.",
        q4: "Kann ich Flüge und Hotels mit meinem Guthaben buchen?",
        a4: "Ja! Getly ermöglicht es Ihnen, Flüge bei über 400 Fluggesellschaften und über 1 Million Hotels direkt mit Ihrem Währungsguthaben zu buchen."
      },
      download: {
        eyebrow: "Ihre Reise beginnt hier",
        headlineLine1: "Eine App.",
        headlineLine2: "Endlose Reisen.",
        subtitle: "Laden Sie Getly herunter und nehmen Sie Wallet, Konnektivität, Buchungen und Ihren Reisebegleiter überallhin mit."
      }
    },
    wallet: {
      badge: "Globales Multi-Währungs-Wallet",
      title: "Ein Wallet. Jede Währung griffbereit.",
      subtitle: "Einfach aufladen, mehrere Währungen halten, weltweit bezahlen und jederzeit unkompliziert abheben.",
      cta: "Wallet holen",
      features: {
        title: "Sofortiges Aufladen & Weltweite Zahlungen",
        desc: "Ob Abendessen in Tokio, Taxifahrt in Paris oder Rücklagen für die nächste Reise – das Getly Wallet arbeitet unauffällig im Hintergrund.",
        item1: "Sofortige Aufladung per Debitkarte und lokaler Bankzahlungsoptionen",
        item2: "Nahtlose Multi-Währungs-Verwaltung ohne versteckte Kosten",
        item3: "Flexible Auszahlungen auf externe Konten bei Bedarf"
      },
      faq: {
        title: "Wallet FAQs",
        q1: "Welche Währungen kann ich in Getly halten?",
        a1: "Sie können Hauptwährungen wie USD, EUR, GBP, NGN, CAD und AED in einem einzigen Multi-Währungssaldo halten und wechseln.",
        q2: "Wie schnell werden Wallet-Aufladungen gutgeschrieben?",
        a2: "Aufladungen per Debitkarte oder Direktzahlungslink werden Ihrem Guthaben sofort gutgeschrieben."
      }
    },
    cards: {
      badge: "Virtuelle Reisekarten",
      title: "Eine Karte für jeden Einkauf.",
      subtitle: "Erstellen Sie sofort virtuelle Karten für globale Online-Einkäufe, Abonnements, Flüge und Restaurants.",
      cta: "Karte jetzt holen",
      features: {
        title: "Sofortige Ausgabe & Volle Kontrolle",
        desc: "Erstellen Sie virtuelle Karten in Sekundenschnelle auf Ihrem Smartphone. Nutzen Sie sie weltweit mit Echtzeit-Benachrichtigungen.",
        item1: "Sofortige Kartenerstellung mit individuellem Ausgabenlimit",
        item2: "1-Klick-Kartensperrung für maximale Sicherheit",
        item3: "Weltweite Akzeptanz bei Online-Händlern und Fluggesellschaften"
      },
      faq: {
        title: "Karten FAQs",
        q1: "Werden Getly-Karten weltweit akzeptiert?",
        a1: "Ja, sie funktionieren bei internationalen Online-Händlern, Reiseportalen und digitalen Abonnementdiensten.",
        q2: "Kann ich meine Karte bei Verlust sperren?",
        a2: "Ja, Sie können jede Karte mit einem Fingertipp im Sicherheits-Dashboard sperren und wieder freigeben."
      }
    },
    esim: {
      badge: "Globale eSIM-Konnektivität",
      title: "Weltweite Datentarife. Keine physische SIM-Karte.",
      subtitle: "In jedem Land landen und sofort mit Highspeed-Internet verbinden – ganz ohne teure Roaming-Kosten.",
      cta: "eSIM-Daten holen",
      features: {
        title: "Sofortige Aktivierung in 180+ Reisezielen",
        desc: "Kein langes Suchen nach SIM-Schaltern am Flughafen. Wählen Sie regionale Datenpakete und installieren Sie Ihr Profil direkt nach der Landung.",
        item1: "Sofortige Installation per QR-Code oder 1-Klick-In-App-Aktivierung",
        item2: "Flexible lokale, regionale und weltweite Datenpakete",
        item3: "Keine unerwarteten Roaming-Rechnungen im Ausland"
      },
      faq: {
        title: "eSIM FAQs",
        q1: "Ist mein Smartphone mit Getly eSIM kompatibel?",
        a1: "Die meisten modernen Geräte von Apple, Google und Samsung unterstützen eSIM. Sie können dies in der App prüfen.",
        q2: "Behalte ich meine normale Handynummer?",
        a2: "Ja, die eSIM arbeitet parallel zu Ihrer physischen SIM, sodass Ihre WhatsApp-Nummer und Anrufe aktiv bleiben."
      }
    },
    flights: {
      badge: "Weltweite Flugbuchungen",
      title: "Flüge direkt aus Ihrem Wallet buchen.",
      subtitle: "Über 400 internationale Airlines vergleichen, transparente Preise sehen und direkt aus Ihrem Währungsguthaben buchen.",
      cta: "Flüge in der App buchen",
      features: {
        title: "Globales Streckennetz & Direkte Bezahlung",
        desc: "Sparen Sie sich Wechselkursgebühren und umständliche Zahlungsseiten von Drittanbietern. Buchen Sie Flüge einfach und direkt.",
        item1: "Über 400 globale und regionale Airlines im direkten Vergleich",
        item2: "Direkt aus dem Wallet ohne Wechselgebühren bezahlen",
        item3: "Sofortiges digitales E-Ticket und Gepäckhinweise"
      },
      faq: {
        title: "Flugbuchung FAQs",
        q1: "Wie erhalte ich meine Flugtickets?",
        a1: "Ihr E-Ticket und die Buchungsreferenz werden sofort in der App angezeigt und per E-Mail zugestellt.",
        q2: "Kann ich Flüge umbuchen oder stornieren?",
        a2: "Ja, Umbuchungen und Stornierungen können direkt in der App gemäß den Tarifregeln der Airline vorgenommen werden."
      }
    },
    hotels: {
      badge: "Weltweite Unterkünfte",
      title: "Unterkünfte maßgeschneidert für jede Reise.",
      subtitle: "Boutique-Hotels, Luxusresorts und Apartments in über 180 Ländern direkt aus Ihrem Währungsguthaben buchen.",
      cta: "Hotels in der App buchen",
      features: {
        title: "Transparente Preise & Sofortige Buchung",
        desc: "Keine Währungsumrechnungsaufschläge beim Checkout. Sichern Sie sich Ihr Zimmer mit klaren Preisen und flexibler Stornierung.",
        item1: "Zugang zu über 1.000.000 verifizierten Hotels und Apartments",
        item2: "Direkt aus dem Wallet ohne versteckte Wechselgebühren zahlen",
        item3: "Flexible Stornierungsbedingungen und 24/7 Buchungssupport in der App"
      },
      visual: {
        tag: "Handverlesene Hotels",
        title: "Schneller Check-in & Digitale Schlüssel",
        badge: "180+ Länder"
      },
      faq: {
        title: "Hotelbuchung FAQs",
        q1: "Wie bezahle ich Hotelbuchungen in Getly?",
        a1: "Sie können sofort mit Ihrem Getly-Guthaben oder Ihrer virtuellen Karte ohne internationale Zusatzgebühren bezahlen.",
        q2: "Sind die Preise transparent ohne versteckte Gebühren?",
        a2: "Ja, der in der App angezeigte Preis ist der Gesamtbetrag inklusive aller Steuern."
      }
    },
    insurance: {
      badge: "Globaler Reiseschutz",
      title: "Rundum-Schutz, egal wo Sie landen.",
      subtitle: "Medizinische Notfallversorgung, Flugverspätungen, Gepäckverlust und Abenteuersport mit einem Klick in der App absichern.",
      cta: "Reiseschutz abschließen",
      features: {
        title: "Sofortige Police & Digitale Schadensmeldung",
        desc: "Einzelne Reisen oder das ganze Reisejahr absichern. Reichen Sie Rechnungen und Berichte direkt in der App ein.",
        item1: "Bis zu 1.000.000 $ für medizinische Notfallbehandlungen und Krankenhausaufenthalte",
        item2: "Entschädigung bei Reiserücktritt, Reiseabbruch und Flugverspätung",
        item3: "24/7 mehrsprachige Notfall-Hotline weltweit erreichbar"
      },
      visual: {
        tag: "Verifizierte Versicherer",
        title: "Erstklassiger Weltweiter Schutz",
        badge: "24/7 Notfallservice"
      },
      faq: {
        title: "Versicherungs-FAQs",
        q1: "Wann sollte ich den Reiseschutz aktivieren?",
        a1: "Sie können ihn vor Reiseantritt buchen oder so einstellen, dass er automatisch bei Flugstart aktiviert wird.",
        q2: "Wie reiche ich einen Schaden ein?",
        a2: "Laden Sie Belege und Arztberichte in der Getly App hoch. Unsere Partner bearbeiten Fälle meist innerhalb von 48 Stunden."
      }
    },
    visa: {
      badge: "Digitale Visumsabwicklung",
      title: "Schnelle Visa ohne bürokratischen Stress.",
      subtitle: "Einreisebestimmungen prüfen, Reisedokumente sicher hochladen und Visumsanträge mit lizenzierten Experten verfolgen.",
      cta: "Visumsbestimmungen prüfen",
      features: {
        title: "Smarte Eignungsprüfung & Schnelle Bearbeitung",
        desc: "Wissen Sie genau, welche Dokumente Sie vor der Flugbuchung benötigen. Getly erleichtert eVisa- und Botschaftsanträge.",
        item1: "Prüfung von Einreisebestimmungen und eVisas für über 120 Länder",
        item2: "Verschlüsselter Dokumentensafe mit automatischem Pass-Scan",
        item3: "Live-Statusverfolgung mit Push-Nachrichten bei Genehmigung"
      },
      visual: {
        tag: "Globale Einreise",
        title: "120+ Unterstützte Länder",
        badge: "Express-Verfahren"
      },
      faq: {
        title: "Visums-FAQs",
        q1: "Wie schnell werden eVisas bearbeitet?",
        a1: "Die Dauer variiert je nach Land, von 24 Stunden bei automatisierten eVisas bis hin zu Standardfristen bei Konsulaten.",
        q2: "Sind meine Passdaten geschützt?",
        a2: "Alle Dokumente werden nach höchsten Sicherheitsstandards verschlüsselt und nur an offizielle Behörden übermittelt."
      }
    },
    "ai-trip-planner": {
      badge: "Getly KI-Begleiter",
      title: "Personalisierte Routen und smarte Reisetipps.",
      subtitle: "Getly KI plant Ihr Tagesbudget, empfiehlt lokale Geheimtipps und organisiert Ihre Reiseausrüstung.",
      cta: "KI-Planer in der App testen",
      featuresTitle: "Smarte Reiseintelligenz",
      featuresDesc: "Ob 3 Tage Tokio oder 6 Monate Berlin – Getly KI unterstützt Sie mit lokalen Empfehlungen und Budgetkontrolle.",
      item1: "Individuelle Tagesreiserouten in Sekundenschnelle",
      item2: "Budgetaufteilung für Mahlzeiten, Verkehr und Aktivitäten in Landeswährung",
      item3: "Smarte Erinnerungen für eSIM-Datenvolumen und Kartensicherheit"
    },
    coverage: {
      badge: "Globale Abdeckung",
      title: "Unterstützte Länder & Regionen",
      subtitle: "Über 180 Länder für eSIM-Daten, Multi-Währungs-Zahlungen und Kartennutzung durchsuchen.",
      searchPlaceholder: "Land, Region oder ISO-Code suchen..."
    },
    security: {
      badge: "Sicherheit & Schutz",
      title: "Ihre Reise optimal geschützt.",
      subtitle: "Ihr Guthaben und Ihre Daten werden durch mehrschichtige Verschlüsselung und regulierte Infrastruktur geschützt.",
      card1Title: "Biometrische Absicherung",
      card1Desc: "Face ID und Fingerabdruck bei jeder Zahlung und jedem App-Start.",
      card2Title: "Sofortige Kontrolle",
      card2Desc: "Karten mit einem Fingertipp sperren und entsperren.",
      card3Title: "Verschlüsselte Daten",
      card3Desc: "Ende-zu-Ende-Verschlüsselung für alle Transaktionen und Reisedaten."
    },
    about: {
      badge: "Unsere Geschichte",
      title: "Entwickelt für moderne Reisende.",
      subtitle: "Getly wurde geschaffen, um finanzielle und verbindende Hürden für Weltreisende zu beseitigen.",
      quote: "\"Unbekannte Orte in unvergessliche Erlebnisse verwandeln.\"",
      whyTitle: "Warum wir Getly gegründet haben",
      whyP1: "Internationale Reisen oder remote Arbeiten sollten nicht fünf verschiedene Apps für Geldwechsel, SIM-Karten und Flüge erfordern.",
      whyP2: "Getly vereint alle wichtigen Reise-Tools in einer App: Multi-Währungs-Wallet, virtuelle Karten, eSIM-Daten in 180+ Ländern und Direktflugbuchung."
    },
    faq: {
      badge: "Fragen & Antworten",
      title: "Hilfe-Center & FAQ",
      subtitle: "Schnelle Antworten zu Wallet-Aufladung, virtuellen Karten, eSIM-Aktivierung, Hotels und Flügen finden."
    },
    blog: {
      badge: "Blog & News",
      title: "Reisegeschichten & Produkt-Updates",
      subtitle: "Tipps, Guides und Neuigkeiten für moderne Reisende und digitale Nomaden.",
      readStory: "Artikel lesen"
    },
    press: {
      badge: "Pressezentrum",
      title: "Getly in den Medien",
      subtitle: "Pressemitteilungen, Medien-Kits und aktuelle Berichterstattung.",
      cardTitle: "Medienanfragen & Pressekontakt",
      cardDesc: "Für Presseanfragen, Markenressourcen oder Interviewanfragen wenden Sie sich an press@getly.app.",
      cardCta: "Presse-Team kontaktieren"
    },
    legal: {
      badge: "Rechtliche Hinweise & Compliance",
      lastUpdated: "Zuletzt aktualisiert: September 2026",
      privacy: {
        title: "Datenschutzerklärung",
        description: "Wie Getly Ihre personenbezogenen Daten und Reisedaten erhebt, verarbeitet und schützt.",
        section1Title: "1. Erhobene Informationen",
        section1Desc: "Getly erhebt personenbezogene Daten, die für die Bereitstellung von Reisedienstleistungen, Wallet-Verwaltung, eSIM-Bereitstellung, Hotels und Flugbuchungen erforderlich sind.",
        section2Title: "2. Nutzung Ihrer Daten",
        section2Desc: "Wir verarbeiten Ihre Daten ausschließlich für den Betrieb der Getly App, zur Identitätsprüfung, Bereitstellung von eSIM-Profilen, Zahlungsabwicklung und Betrugsprävention.",
        section3Title: "3. Datensicherheit & Speicherung",
        section3Desc: "Wir setzen auf mehrschichtige Verschlüsselung, biometrische Authentifizierung und strenge Zugriffskontrollen zum Schutz Ihrer Daten."
      },
      terms: {
        title: "Nutzungsbedingungen",
        description: "Allgemeine Geschäftsbedingungen und Nutzervereinbarung für die Getly Plattform und App.",
        section1Title: "1. Annahme der Bedingungen",
        section1Desc: "Durch das Herunterladen, Zugreifen auf oder die Nutzung der Getly App stimmen Sie diesen Nutzungsbedingungen verbindlich zu.",
        section2Title: "2. Leistungsangebot",
        section2Desc: "Getly bietet Multi-Währungs-Wallet-Funktionen, virtuelle Reisekarten, globale eSIM-Datenpakete, Flug- und Hotelbuchungen, Reiseschutz und digitale Visa in Zusammenarbeit mit lizenzierten Partnern.",
        section3Title: "3. Pflichten der Nutzer",
        section3Desc: "Sie verpflichten sich, wahrheitsgemäße Angaben zu machen, Ihre Zugangsdaten sicher zu verwahren und die Dienste gesetzeskonform zu nutzen."
      },
      cookie: {
        title: "Cookie-Richtlinie",
        description: "Wie Getly Cookies und lokalen Speicher zur Optimierung Ihres Nutzungserlebnisses einsetzt.",
        section1Title: "1. Was sind Cookies",
        section1Desc: "Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, um Einstellungen zu sichern und geschützte Sitzungen zu gewährleisten.",
        section2Title: "2. Verwendung von Cookies",
        section2Desc: "Getly nutzt essenzielle Cookies für Sicherheit und Authentifizierung, funktionale Cookies für Sprach- und Währungseinstellungen sowie aggregierte Analyse-Cookies.",
        section3Title: "3. Einstellungen verwalten",
        section3Desc: "Sie können nicht-essenzielle Cookies jederzeit in Ihren Browsereinstellungen oder über unsere Cookie-Verwaltung anpassen oder deaktivieren."
      },
      aml: {
        title: "Geldwäscheprävention (AML)",
        description: "Getlys Standards zur Verhinderung von Geldwäsche und Terrorismusfinanzierung sowie Identitätsprüfung (KYC).",
        section1Title: "1. Compliance-Rahmenwerk",
        section1Desc: "Getly hält sich strikt an internationale FATF-Empfehlungen und regulatorische Vorgaben zur Geldwäschebekämpfung (AML).",
        section2Title: "2. Identitätsprüfung (KYC)",
        section2Desc: "Nutzer durchlaufen eine risikobasierte Legitimationsprüfung (CDD) inklusive Prüfung amtlicher Ausweisdokumente vor Freischaltung höherer Limits.",
        section3Title: "3. Transaktionsüberwachung & Sanktionslisten",
        section3Desc: "Automatisierte Überwachungssysteme prüfen Aktivitäten in Echtzeit gegen weltweite Sanktionslisten zur Bekämpfung von Finanzkriminalität."
      },
      complaints: {
        title: "Beschwerdemanagement & Streitbeilegung",
        description: "Wie Getly Kundenbeschwerden bearbeitet und faire Lösungen findet.",
        section1Title: "1. Unser Engagement",
        section1Desc: "Kundenzufriedenheit steht bei uns an erster Stelle. Unser Support-Team steht Ihnen 24/7 zur Verfügung, um Anliegen rasch zu klären.",
        section2Title: "2. Beschwerde einreichen",
        section2Desc: "Offizielle Beschwerden können direkt im In-App-Hilfebereich oder per E-Mail an complaints@getly.app eingereicht werden.",
        section3Title: "3. Bearbeitungsfristen",
        section3Desc: "Wir bestätigen den Eingang innerhalb von 24 Stunden und streben eine abschließende Klärung innerhalb von 15 Werktagen an."
      }
    }
  },

  // PORTUGUESE
  pt: {
    common: {
      brand: {
        name: "Getly",
        headline: "A Super App do Viajante Moderno",
        slogan: "Transformando lugares desconhecidos em experiências inesquecíveis."
      },
      nav: {
        home: "Início",
        wallet: "Carteira",
        cards: "Cartões de Viagem",
        esim: "eSIM",
        flights: "Voos",
        hotels: "Hotéis",
        insurance: "Seguros",
        visa: "Vistos",
        aiTripPlanner: "Planejador IA",
        coverage: "Cobertura",
        security: "Segurança",
        pricing: "Tarifas",
        downloadApp: "Baixar App"
      },
      footer: {
        rights: "Todos os direitos reservados.",
        tagline: "Transformando lugares desconhecidos em experiências inesquecíveis.",
        product: "Produto",
        company: "Empresa",
        legal: "Jurídico",
        support: "Suporte",
        aboutUs: "Sobre Nós",
        press: "Imprensa e Mídia",
        blog: "Blog e Notícias",
        faq: "Ajuda e FAQ",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço",
        superAppSubtitle: "Super App Global de Viagens",
        downloadCTA: "Experimente o futuro das viagens globais"
      },
      buttons: {
        getApp: "Baixar App Getly",
        exploreFeatures: "Explorar Recursos",
        learnMore: "Saiba mais",
        fundWallet: "Adicionar Saldo",
        getCard: "Obter Cartão",
        buyEsim: "Comprar eSIM Global",
        bookFlight: "Reservar Voo",
        bookHotel: "Reservar Hotel",
        getInsurance: "Proteção de Viagem",
        applyVisa: "Solicitar Visto"
      }
    },
    home: {
      hero: {
        badge: "Super App Global de Viagens",
        headline: "A Super App do Viajante Moderno",
        headlineLine1: "A Super App do",
        headlineLine2: "Viajante Moderno",
        subhead: "Transformando lugares desconhecidos em experiências inesquecíveis. Carteira multimoedas global, cartões virtuais, eSIMs, voos, hotéis, seguros e vistos em um único app.",
        ctaPrimary: "Baixar App",
        ctaSecondary: "Explorar Recursos"
      },
      ticker: [
        "Carteira Global",
        "Cartões Virtuais",
        "eSIM Global",
        "Reserva de Voos",
        "Estadias em Hotéis",
        "Proteção de Viagem",
        "Solicitação de Vistos",
        "Planejador IA",
        "Recarga Imediata",
        "Multimoeda"
      ],
      partners: {
        backedBy: "Apoiado e com a confiança de líderes do setor"
      },
      pillars: {
        title: "Tudo o que você precisa em um único app.",
        subtitle: "Viajar já é complexo o suficiente. O Getly reúne finanças, conectividade, estadias e voos em uma experiência integrada.",
        wallet: {
          eyebrow: "Carteira Global",
          headlineLine1: "Uma única carteira.",
          headlineLine2: "Funciona onde você for.",
          desc: "Adicione saldo, pague e saque quando e onde quiser.",
          cta: "Explorar Carteira",
          badge: "Pague no Mundo Todo"
        },
        cards: {
          eyebrow: "Cartões Virtuais",
          headlineLine1: "Um cartão virtual para",
          headlineLine2: "cada compra.",
          desc: "Cartões virtuais instantâneos, vinculados diretamente ao seu saldo.",
          cta: "Explorar Cartões",
          badge: "Emissão Instantânea"
        },
        esim: {
          eyebrow: "eSIM Global",
          headlineLine1: "Pouse conectado.",
          headlineLine2: "Fique online.",
          desc: "Ative seu plano de dados sem necessidade de chip físico.",
          cta: "Explorar eSIM",
          badge: "180+ Países"
        },
        flights: {
          eyebrow: "Voos e Reservas",
          headlineLine1: "Reserve voos",
          headlineLine2: "direto da sua carteira.",
          desc: "Pesquise, compare e gerencie suas viagens sem sair do Getly.",
          cta: "Explorar Voos",
          badge: "LIS → GRU"
        },
        hotels: {
          eyebrow: "Estadias em Hotéis",
          headlineLine1: "Hospedagens sob medida",
          headlineLine2: "para cada destino.",
          desc: "Reserve hotéis e resorts exclusivos em todo o mundo pagando com seu saldo.",
          cta: "Explorar Hotéis",
          badge: "1M+ Propriedades"
        },
        insurance: {
          eyebrow: "Proteção de Viagem",
          headlineLine1: "Cobertura completa",
          headlineLine2: "onde quer que você pouse.",
          desc: "Emergências médicas, extravio de bagagem e atrasos cobertos com um toque.",
          cta: "Explorar Proteção",
          badge: "Atendimento 24/7"
        },
        visa: {
          eyebrow: "Processamento de Vistos",
          headlineLine1: "Vistos rápidos",
          headlineLine2: "sem dor de cabeça.",
          desc: "Verifique exigências, envie seus documentos digitais e acompanhe o status em tempo real.",
          cta: "Explorar Vistos",
          badge: "120+ Destinos"
        }
      },
      ai: {
        badge: "Assistente IA Getly",
        title: "Roteiros Personalizados e Dicas Inteligentes",
        subtitle: "A IA do Getly planeja seu orçamento diário, indica locais imperdíveis e cuida dos preparativos.",
        cta: "Explorar Planejador IA",
        feature1Title: "Roteiros Inteligentes",
        feature1Desc: "Planejamentos diários gerados em segundos de acordo com o seu perfil.",
        feature2Title: "Gestão Orçamentária",
        feature2Desc: "Estimativa de custos diários com refeições e transporte na moeda local.",
        hoverHint: "Passe o cursor para ver o Getly IA em ação"
      },
      howItWorks: {
        badge: "Processo Simples",
        title: "Como Funciona o Getly",
        subtitle: "Comece em 4 passos simples",
        step1Eyebrow: "Começar",
        step1Title: "Baixe o Getly App",
        step1Desc: "Disponível na App Store e Google Play com verificação em poucos minutos.",
        step2Eyebrow: "Multimoeda",
        step2Title: "Adicione Saldo à Carteira",
        step2Desc: "Deposite fundos usando cartões de débito, pagamentos bancários ou métodos globais.",
        step3Eyebrow: "Cartões e Dados",
        step3Title: "Crie seu Cartão e Ative a eSIM",
        step3Desc: "Gere cartões virtuais e instale planos de dados móveis de alta velocidade.",
        step4Eyebrow: "Viagens Sem Fronteiras",
        step4Title: "Descubra o Mundo com Liberdade",
        step4Desc: "Faça pagamentos globais, reserve voos e hotéis com total segurança."
      },
      trust: {
        stat1Value: "Global",
        stat1Label: "otimizado para viajantes",
        stat2Value: "R$ 0",
        stat2Label: "taxa de emissão do cartão*",
        stat3Value: "24/7",
        stat3Label: "suporte direto no app",
        stat4Value: "1 app",
        stat4Label: "para toda a jornada"
      },
      coverage: {
        badge: "Presença Global",
        title: "Disponível em mais de 180 Destinos",
        subtitle: "Seja para voos, dados eSIM ou pagamentos com cartão, o Getly viaja ao seu lado.",
        viewAll: "Ver todos os países e cobertura"
      },
      faq: {
        badge: "Perguntas Frequentes",
        title: "Perguntas Frequentes",
        subtitle: "Dúvidas sobre o Getly? Encontre as respostas aqui.",
        viewAll: "Ver todas as perguntas frequentes",
        q1: "O que é o Getly?",
        a1: "O Getly é a super app para viajantes modernos, profissionais e nômades digitais. Combina carteira multimoeda com cartões virtuais, eSIM, voos, hotéis, seguros e vistos.",
        q2: "Como adiciono saldo à minha carteira Getly?",
        a2: "Você pode recarregar instantaneamente via cartão de débito, opções bancárias locais ou métodos de pagamento internacionais.",
        q3: "Como funciona a eSIM global?",
        a3: "O Getly oferece perfis eSIM digitais em mais de 180 países. Escaneie o QR code ou clique na instalação automática para se conectar.",
        q4: "Posso reservar voos e hotéis usando meu saldo?",
        a4: "Sim! Você pode comparar e reservar voos em mais de 400 companhias aéreas e 1 milhão de hotéis usando seu saldo multimoeda."
      },
      download: {
        eyebrow: "Sua viagem começa agora",
        headlineLine1: "Um só app.",
        headlineLine2: "Infinitas viagens.",
        subtitle: "Baixe o Getly e leve sua carteira, conectividade, reservas e companheiro de viagem com você."
      }
    },
    wallet: {
      badge: "Carteira Global Multimoedas",
      title: "Uma carteira. Todas as moedas que você precisa.",
      subtitle: "Adicione saldo facilmente, mantenha várias moedas, pague no exterior e realize saques com liberdade.",
      cta: "Obter Carteira",
      features: {
        title: "Recarga Imediata & Gastos Globais",
        desc: "Seja para pagar um jantar em Tóquio, pedir um carro em Paris ou guardar recursos para sua viagem, a carteira Getly funciona sem complicações.",
        item1: "Recarga imediata com cartões de débito e opções bancárias locais",
        item2: "Gestão multimoeda simples e sem taxas escondidas",
        item3: "Opções flexíveis de saque para contas externas sempre que precisar"
      },
      faq: {
        title: "Perguntas sobre a Carteira",
        q1: "Quais moedas posso guardar no Getly?",
        a1: "Você pode manter e converter as principais moedas como USD, EUR, GBP, NGN, CAD e AED em um único saldo.",
        q2: "Quanto tempo leva a recarga do saldo?",
        a2: "As recargas por cartão de débito ou link de pagamento são creditadas instantaneamente na sua conta."
      }
    },
    cards: {
      badge: "Cartões Virtuais de Viagem",
      title: "Um cartão para cada compra.",
      subtitle: "Gere cartões virtuais instantâneos para compras internacionais, assinaturas, passagens e restaurantes.",
      cta: "Obter Cartão Agora",
      features: {
        title: "Emissão Rápida & Controle Total",
        desc: "Crie cartões virtuais em segundos pelo celular. Use em qualquer site com notificações em tempo real.",
        item1: "Criação imediata de cartões com limites personalizados",
        item2: "Bloqueio e desbloqueio em um toque para maior segurança",
        item3: "Aceitação internacional em lojas online e sites de passagens"
      },
      faq: {
        title: "Perguntas sobre Cartões",
        q1: "Os cartões Getly são aceitos globalmente?",
        a1: "Sim, funcionam em lojas virtuais internacionais, serviços de viagens e plataformas de assinatura.",
        q2: "Posso bloquear meu cartão se perder o celular?",
        a2: "Sim, você pode pausar e reativar qualquer cartão com um clique no painel de segurança."
      }
    },
    esim: {
      badge: "Conectividade eSIM Global",
      title: "Planos de dados globais. Zero chip físico.",
      subtitle: "Pouse em qualquer país e acesse a internet de alta velocidade sem tarifas abusivas de roaming.",
      cta: "Comprar Dados eSIM",
      features: {
        title: "Ativação Imediata em 180+ Destinos",
        desc: "Diga adeus às filas de chips no aeroporto. Escolha seu pacote regional e conecte-se logo após o pouso.",
        item1: "Instalação instantânea via QR code ou 1 toque no app",
        item2: "Planos flexíveis locais, regionais e globais",
        item3: "Sem surpresas na fatura de roaming no exterior"
      },
      faq: {
        title: "Perguntas sobre eSIM",
        q1: "Meu smartphone é compatível com a eSIM do Getly?",
        a1: "A maioria dos aparelhos modernos da Apple, Google e Samsung é compatível. Você pode checar no app.",
        q2: "Eu perco meu número de WhatsApp?",
        a2: "Não. A eSIM funciona paralelamente ao seu chip físico, mantendo seu número e WhatsApp normais."
      }
    },
    flights: {
      badge: "Reserva de Voos Mundiais",
      title: "Reserve passagens aéreas direto da sua carteira.",
      subtitle: "Compare mais de 400 companhias aéreas internacionais com preços claros e pague direto do seu saldo multimoeda.",
      cta: "Reservar Voos no App",
      features: {
        title: "Malha Aérea Global & Pagamento Direto",
        desc: "Evite taxas de conversão de moeda e intermediários. Reserve voos nacionais e internacionais com economia.",
        item1: "Compare mais de 400 companhias aéreas mundiais e regionais",
        item2: "Pague com seu saldo multimoeda sem tarifas adicionais de câmbio",
        item3: "Bilhetes eletrônicos imediatos e avisos de franquia de bagagem"
      },
      faq: {
        title: "Perguntas sobre Voos",
        q1: "Como recebo minhas passagens?",
        a1: "Seu bilhete eletrônico e código de reserva são disponibilizados no app Getly e enviados por e-mail.",
        q2: "Posso alterar ou cancelar meu voo?",
        a2: "Sim, alterações e cancelamentos podem ser solicitados no app de acordo com as regras da companhia aérea."
      }
    },
    hotels: {
      badge: "Hospedagens no Mundo Todo",
      title: "Hospedagens sob medida para cada viagem.",
      subtitle: "Descubra e reserve hotéis boutique, resorts e apartamentos em mais de 180 países pagando com seu saldo multimoeda.",
      cta: "Reservar Hotéis no App",
      features: {
        title: "Preços Claros & Confirmação Imediata",
        desc: "Sem surpresas no câmbio ao finalizar o pagamento. Garanta sua estadia com tarifas transparentes e cancelamento flexível.",
        item1: "Mais de 1.000.000 de hotéis, resorts e apartamentos verificados",
        item2: "Pague direto do saldo sem sobretaxas de conversão",
        item3: "Cancelamento flexível e atendimento 24/7 dedicado a reservas"
      },
      visual: {
        tag: "Estadias Selecionadas",
        title: "Check-in Ágil & Chaves Digitais",
        badge: "180+ Países"
      },
      faq: {
        title: "Perguntas sobre Hotéis",
        q1: "Como pago minhas diárias no Getly?",
        a1: "Você pode pagar na hora com o saldo da sua carteira Getly ou cartão virtual sem taxas internacionais adicionais.",
        q2: "Os valores incluem todas as taxas?",
        a2: "Sim, o valor exibido no aplicativo é o preço final com todos os impostos obrigatórios incluídos."
      }
    },
    insurance: {
      badge: "Proteção Global de Viagem",
      title: "Cobertura completa onde quer que você pouse.",
      subtitle: "Emergências médicas, atrasos de voo, extravio de bagagem e esportes radicais protegidos em um toque no app.",
      cta: "Contratar Proteção",
      features: {
        title: "Apólice Instantânea & Reembolso Digital",
        desc: "Proteja uma viagem específica ou viagens ilimitadas no ano. Envie comprovantes médicos pelo app para análise rápida.",
        item1: "Até US$ 1.000.000 para despesas médicas hospitalares e emergências",
        item2: "Compensação por cancelamento de voo, interrupção e bagagem atrasada",
        item3: "Central de atendimento de emergência multilíngue 24/7 no mundo todo"
      },
      visual: {
        tag: "Seguradoras Homologadas",
        title: "Proteção Global com Nota Máxima",
        badge: "Suporte 24/7"
      },
      faq: {
        title: "Perguntas sobre Seguros",
        q1: "Quando devo contratar o seguro de viagem?",
        a1: "Você pode contratar antes do embarque ou programar a ativação automática para a decolagem do seu voo.",
        q2: "Como solicitar reembolso ou acionar a assistência?",
        a2: "Basta anexar seus laudos ou recibos no app Getly. Nossa equipe parceira analisa a maioria dos casos em 48 horas."
      }
    },
    visa: {
      badge: "Vistos Digitais Descomplicados",
      title: "Vistos rápidos sem dor de cabeça.",
      subtitle: "Consulte regras de entrada, envie seus documentos com segurança e acompanhe a aprovação do visto em tempo real.",
      cta: "Consultar Requisitos de Visto",
      features: {
        title: "Análise Inteligente & Emissão Ágil",
        desc: "Saiba com exatidão quais documentos precisa antes de emitir as passagens. O Getly simplifica formulários consulares.",
        item1: "Verificação de requisitos e emissão de eVisas para mais de 120 países",
        item2: "Cofre digital com escaneamento automatizado do passaporte",
        item3: "Acompanhamento em tempo real com notificações push de aprovação"
      },
      visual: {
        tag: "Imigração Global",
        title: "120+ Destinos Atendidos",
        badge: "Processo Expresso"
      },
      faq: {
        title: "Perguntas sobre Vistos",
        q1: "Qual o prazo para emissão de um visto eletrônico?",
        a1: "O prazo varia conforme o destino, indo de 24 horas para vistos eletrônicos automatizados a prazos consulares padrão.",
        q2: "Meus dados de passaporte estão protegidos?",
        a2: "Todos os documentos são protegidos por criptografia de ponta e compartilhados somente com órgãos consulares oficiais."
      }
    },
    "ai-trip-planner": {
      badge: "Assistente IA Getly",
      title: "Roteiros personalizados e dicas inteligentes.",
      subtitle: "A IA do Getly organiza seu orçamento diário, descobre segredos locais e sincroniza suas reservas automaticamente.",
      cta: "Experimentar Planejador IA",
      featuresTitle: "Inteligência para Suas Viagens",
      featuresDesc: "Seja para curtir 3 dias em Tóquio ou viver 6 meses em Berlim, a IA do Getly oferece conselhos práticos e controle financeiro.",
      item1: "Roteiros diários sob medida gerados em instantes",
      item2: "Projeção de gastos com transporte, alimentação e passeios na moeda local",
      item3: "Lembretes inteligentes sobre pacote de dados eSIM e limites de cartão"
    },
    coverage: {
      badge: "Cobertura Mundial",
      title: "Países e Regiões com Suporte",
      subtitle: "Consulte mais de 180 destinos para internet eSIM, saldo multimoeda e cartões de viagem.",
      searchPlaceholder: "Buscar país, região ou código ISO..."
    },
    security: {
      badge: "Segurança e Proteção",
      title: "Protegendo cada etapa da sua jornada.",
      subtitle: "Seus recursos e dados pessoais são protegidos por criptografia multicamadas e parceiros regulamentados.",
      card1Title: "Proteção Biométrica",
      card1Desc: "Face ID e leitor biométrico em todas as transações e acessos.",
      card2Title: "Controle Imediato",
      card2Desc: "Bloqueie e desbloqueie seus cartões em um toque no app.",
      card3Title: "Dados Protegidos",
      card3Desc: "Criptografia de ponta a ponta para seu saldo, viagens e informações privadas."
    },
    about: {
      badge: "Nossa História",
      title: "Criado para o viajante moderno.",
      subtitle: "O Getly foi criado para eliminar o atrito financeiro e de conectividade para viajantes globais.",
      quote: "\"Transformando lugares desconhecidos em experiências inesquecíveis.\"",
      whyTitle: "Por Que Criamos o Getly",
      whyP1: "Viajar para fora ou trabalhar como nômade digital não deveria exigir alternar entre cinco aplicativos diferentes para câmbio, chip e voos.",
      whyP2: "O Getly reúne tudo em um único lugar: carteira multimoeda, cartões virtuais, internet eSIM em 180+ países e reservas diretas de passagens."
    },
    faq: {
      badge: "Dúvidas Frequentes",
      title: "Central de Ajuda e FAQ",
      subtitle: "Respostas diretas sobre depósitos, cartões virtuais, ativação de eSIM, hotéis e passagens aéreas."
    },
    blog: {
      badge: "Blog & Notícias",
      title: "Histórias de Viagem & Atualizações",
      subtitle: "Dicas, guias e novidades para viajantes modernos e nômades digitais.",
      readStory: "Ler Artigo"
    },
    press: {
      badge: "Sala de Imprensa",
      title: "Getly na Mídia",
      subtitle: "Comunicados de imprensa, kits de marca e notícias institucionais.",
      cardTitle: "Assessoria de Imprensa",
      cardDesc: "Para solicitações de mídia, materiais de imprensa ou entrevistas com os fundadores, escreva para press@getly.app.",
      cardCta: "Falar com a Imprensa"
    },
    legal: {
      badge: "Conformidade Legal e Regulatória",
      lastUpdated: "Última atualização: Setembro de 2026",
      privacy: {
        title: "Política de Privacidade",
        description: "Como o Getly coleta, utiliza e protege seus dados pessoais e informações de viagem.",
        section1Title: "1. Informações que Coletamos",
        section1Desc: "O Getly coleta os dados pessoais necessários para fornecer serviços de viagem, gestão de carteira, planos eSIM, hotéis e reservas aéreas.",
        section2Title: "2. Como Usamos seus Dados",
        section2Desc: "Processamos seus dados estritamente para operar o aplicativo Getly, verificar sua identidade, ativar eSIMs, processar pagamentos e prevenir fraudes.",
        section3Title: "3. Segurança e Armazenamento",
        section3Desc: "Utilizamos criptografia multicamadas, autenticação biométrica e controles rigorosos de acesso para proteger suas informações."
      },
      terms: {
        title: "Termos de Serviço",
        description: "Termos gerais de serviço e contrato do usuário para a plataforma e aplicativo Getly.",
        section1Title: "1. Aceitação dos Termos",
        section1Desc: "Ao baixar, acessar ou utilizar o aplicativo ou site do Getly, você concorda com estes Termos de Serviço.",
        section2Title: "2. Serviços Prestados",
        section2Desc: "O Getly oferece carteira multimoeda, cartões virtuais, dados eSIM globais, passagens aéreas, hotéis, seguros e vistos digitais com parceiros licenciados.",
        section3Title: "3. Responsabilidades do Usuário",
        section3Desc: "Você se compromete a fornecer dados corretos, manter suas credenciais seguras e utilizar os serviços em conformidade com as leis vigentes."
      },
      cookie: {
        title: "Política de Cookies",
        description: "Como o Getly utiliza cookies e armazenamento local para otimizar sua navegação.",
        section1Title: "1. O que são Cookies",
        section1Desc: "Cookies são pequenos arquivos salvos no seu dispositivo que permitem lembrar preferências e garantir sessões protegidas.",
        section2Title: "2. Uso de Cookies",
        section2Desc: "O Getly utiliza cookies essenciais para segurança, cookies funcionais para lembrar preferências de idioma e cookies de análise agregada.",
        section3Title: "3. Gerenciamento de Preferências",
        section3Desc: "Você pode desativar cookies não essenciais a qualquer momento nas configurações do seu navegador ou pelo nosso painel de controle."
      },
      aml: {
        title: "Prevenção à Lavagem de Dinheiro (AML)",
        description: "Diretrizes do Getly de combate à lavagem de dinheiro, financiamento ao terrorismo e verificação de identidade (KYC).",
        section1Title: "1. Estrutura de Conformidade",
        section1Desc: "O Getly cumpre rigorosamente as recomendações internacionais do GAFI/FATF e dos órgãos reguladores de combate a crimes financeiros.",
        section2Title: "2. Verificação de Identidade (KYC)",
        section2Desc: "Todos os clientes passam por processos de devida diligência (CDD) antes de acessar limites elevados ou emitir cartões.",
        section3Title: "3. Monitoramento de Transações",
        section3Desc: "Sistemas automatizados monitoram movimentações em tempo real contra listas de sanções globais e padrões suspeitos."
      },
      complaints: {
        title: "Reclamações e Resolução de Disputas",
        description: "Como o Getly analisa reclamações de clientes e soluciona divergências.",
        section1Title: "1. Nosso Compromisso",
        section1Desc: "Priorizamos a excelência e transparência. Nosso time de atendimento está disponível 24 horas por dia para ajudar.",
        section2Title: "2. Como Enviar uma Reclamação",
        section2Desc: "Você pode registrar sua manifestação no suporte do aplicativo ou enviar um e-mail para complaints@getly.app.",
        section3Title: "3. Prazos de Resposta",
        section3Desc: "Confirmamos o recebimento em até 24 horas e buscamos apresentar a solução definitiva em até 15 dias úteis."
      }
    }
  },

  // CHINESE (SIMPLIFIED)
  zh: {
    common: {
      brand: {
        name: "Getly",
        headline: "专为现代旅行者打造的超级应用",
        slogan: "让每一次探索都成为难忘的精彩体验。"
      },
      nav: {
        home: "首页",
        wallet: "多币种钱包",
        cards: "旅行卡",
        esim: "全球 eSIM",
        flights: "机票预订",
        hotels: "全球酒店",
        insurance: "旅行保障",
        visa: "签证办理",
        aiTripPlanner: "AI 行程助手",
        coverage: "覆盖国家",
        security: "安全保障",
        pricing: "资费说明",
        downloadApp: "下载应用"
      },
      footer: {
        rights: "版权所有。",
        tagline: "让每一次探索都成为难忘的精彩体验。",
        product: "产品功能",
        company: "关于我们",
        legal: "法律条款",
        support: "帮助支持",
        aboutUs: "公司介绍",
        press: "媒体中心",
        blog: "官方博客",
        faq: "常见问题",
        privacy: "隐私政策",
        terms: "服务条款",
        superAppSubtitle: "全球旅行超级应用",
        downloadCTA: "开启属于您的全球现代旅行"
      },
      buttons: {
        getApp: "获取 Getly 应用",
        exploreFeatures: "探索全部功能",
        learnMore: "了解详情",
        fundWallet: "钱包充值",
        getCard: "立即开卡",
        buyEsim: "购买全球 eSIM",
        bookFlight: "预订机票",
        bookHotel: "预订酒店",
        getInsurance: "获取旅行保障",
        applyVisa: "申请签证"
      }
    },
    home: {
      hero: {
        badge: "全球旅行超级应用",
        headline: "专为现代旅行者打造的超级应用",
        headlineLine1: "专为现代旅行者打造的",
        headlineLine2: "超级应用",
        subhead: "让每一次探索都成为难忘的精彩体验。一个应用集成全球多币种钱包、虚拟旅行卡、全球 eSIM 流量、机票与酒店预订、境外保险与签证服务。",
        ctaPrimary: "立即下载",
        ctaSecondary: "探索功能"
      },
      ticker: [
        "全球多币种钱包",
        "即时虚拟卡",
        "全球 eSIM",
        "机票预订",
        "酒店住宿",
        "旅行保险保障",
        "电子签证办理",
        "AI 智能行程规划",
        "即时充值",
        "多币种支持"
      ],
      partners: {
        backedBy: "深获全球行业领袖的信赖与支持"
      },
      pillars: {
        title: "一站式满足出境旅行所需。",
        subtitle: "旅行本就不该繁琐。Getly 将跨境金融、网络连接、住宿及机票预订完美融合在极简体验中。",
        wallet: {
          eyebrow: "全球多币种钱包",
          headlineLine1: "一个钱包，",
          headlineLine2: "随行全球无界支付。",
          desc: "轻松充值、多币种管理、全球消费与随时提现。",
          cta: "了解多币种钱包",
          badge: "全球通用"
        },
        cards: {
          eyebrow: "即时虚拟卡",
          headlineLine1: "随时随地生成，",
          headlineLine2: "畅享安全支付。",
          desc: "即刻签发虚拟卡，直接使用钱包余额进行全球线上线下消费。",
          cta: "了解旅行卡",
          badge: "即时发卡"
        },
        esim: {
          eyebrow: "全球 eSIM",
          headlineLine1: "落地即连，",
          headlineLine2: "时刻畅享高速网络。",
          desc: "一键激活全球流量套餐，无需更换实体 SIM 卡。",
          cta: "了解 eSIM",
          badge: "覆盖 180+ 国家"
        },
        flights: {
          eyebrow: "全球机票预订",
          headlineLine1: "直接从钱包余额，",
          headlineLine2: "预订全球航线。",
          desc: "快速比价并预订全球 400+ 家航空公司机票，免除额外汇率损失。",
          cta: "了解机票预订",
          badge: "PVG → CDG"
        },
        hotels: {
          eyebrow: "精选酒店住宿",
          headlineLine1: "量身定制住宿，",
          headlineLine2: "伴您舒适出行。",
          desc: "直接使用多币种余额预订全球精品酒店、度假村及特色公寓。",
          cta: "了解酒店预订",
          badge: "100万+ 精选房源"
        },
        insurance: {
          eyebrow: "全球旅行保障",
          headlineLine1: "全面贴心保障，",
          headlineLine2: "落地无忧出行。",
          desc: "紧急医疗救助、行李延误、行程变动一键投保，全天候守护。",
          cta: "了解旅行保障",
          badge: "24/7 全球紧急救援"
        },
        visa: {
          eyebrow: "电子签证办理",
          headlineLine1: "高效快捷办签，",
          headlineLine2: "告别繁琐流程。",
          desc: "智能核验入境要求，在线提交数字化材料，实时掌握办签进度。",
          cta: "了解签证服务",
          badge: "支持 120+ 目的地"
        }
      },
      ai: {
        badge: "Getly AI 智能助手",
        title: "个性化行程与智能旅行指南",
        subtitle: "Getly AI 实时规划每日预算、推荐地道特色去处并智能管理您的旅行装备。",
        cta: "体验 AI 行程助手",
        feature1Title: "智能定制行程",
        feature1Desc: "根据您的旅行喜好，数秒内生成专属的每日行程规划。",
        feature2Title: "实时预算建议",
        feature2Desc: "自动按当地货币折算每日餐饮、交通及游玩消费预算。",
        hoverHint: "悬停体验 Getly AI 交互"
      },
      howItWorks: {
        badge: "极简流程",
        title: "Getly 如何运作",
        subtitle: "只需 4 步，即刻启程",
        step1Eyebrow: "第一步",
        step1Title: "下载 Getly 应用程序",
        step1Desc: "在 App Store 或 Google Play 下载应用，极速完成身份验证。",
        step2Eyebrow: "第二步",
        step2Title: "为多币种钱包充值",
        step2Desc: "支持借记卡、银行付款或全球通用渠道轻松充值。",
        step3Eyebrow: "第三步",
        step3Title: "生成虚拟卡并激活 eSIM",
        step3Desc: "秒级签发虚拟旅行卡，并一键安装高速移动网络 eSIM。",
        step4Eyebrow: "第四步",
        step4Title: "自在畅游全球",
        step4Desc: "无论境外支付、机票预订还是酒店入住，均可从容应对。"
      },
      trust: {
        stat1Value: "全球体验",
        stat1Label: "专为出境旅行量身打造",
        stat2Value: "$0",
        stat2Label: "虚拟卡开卡费*",
        stat3Value: "24/7",
        stat3Label: "全天候客服支持",
        stat4Value: "1 个应用",
        stat4Label: "搞定出境全程所需"
      },
      coverage: {
        badge: "全球足迹",
        title: "覆盖全球 180+ 国家与地区",
        subtitle: "不论是预订航班、eSIM 上网还是使用虚拟卡消费，Getly 时刻伴您同行。",
        viewAll: "查看支持的全部国家与网络覆盖"
      },
      faq: {
        badge: "疑问解答",
        title: "常见问题解答",
        subtitle: "关于 Getly 的使用疑问？在此为您一一解答。",
        viewAll: "查看全部常见问题",
        q1: "什么是 Getly？",
        a1: "Getly 是一款专为全球旅行者、商务人士及海外留学生设计的超级应用，集成了多币种钱包、虚拟旅行卡、全球 eSIM 上网、机票预订、酒店住宿、境外保险与电子签证等功能。",
        q2: "如何为我的 Getly 钱包充值？",
        a2: "您可以使用本地借记卡、银行付款渠道或主流国际支付通道即时完成充值。",
        q3: "全球 eSIM 是如何工作的？",
        a3: "Getly 支持 180+ 国家的数字化 eSIM 配置文件。在应用内选择套餐后，只需扫码或点击一键安装，即可连接当地高速网络。",
        q4: "我可以直接用钱包余额预订机票和酒店吗？",
        a4: "当然可以！您可以直接使用多币种余额搜索并预订全球 400+ 家航空公司的航班及 100 多万家严选酒店，无需支付隐性汇率加价。"
      },
      download: {
        eyebrow: "您的精彩旅程由此启航",
        headlineLine1: "一个应用，",
        headlineLine2: "开启无限探索。",
        subtitle: "立即下载 Getly，将钱包、网络、预订与专属旅行伴侣随身携带。"
      }
    },
    wallet: {
      badge: "全球多币种钱包",
      title: "一个钱包，掌控您触及的所有货币。",
      subtitle: "轻松充值、持有多种主流货币余额、全球消费畅通无阻，并可随心提现。",
      cta: "立即开通钱包",
      features: {
        title: "即时充值 & 全球无忧消费",
        desc: "无论是在东京品尝美食、在巴黎搭乘交通，还是为即将到来的假期储备资金，Getly 多币种钱包都能在后台为您默默提供顺畅支持。",
        item1: "通过借记卡与银行渠道即刻到账",
        item2: "多币种余额无缝管理，杜绝隐形加价",
        item3: "支持按需随时提现至外部账户"
      },
      faq: {
        title: "钱包常见问题",
        q1: "我可以在 Getly 中持有并管理哪些货币？",
        a1: "您可以在一个统一账户中管理 USD、EUR、GBP、NGN、CAD、AED 等主流全球与区域货币。",
        q2: "钱包充值一般需要多长时间到账？",
        a2: "通过借记卡或直连支付方式的充值通常即时到账。"
      }
    },
    cards: {
      badge: "虚拟旅行卡",
      title: "随时生成，满足每一笔消费需求。",
      subtitle: "即刻签发虚拟卡，用于境外网购、在线订阅、机票预订与餐厅消费。",
      cta: "立即申领卡片",
      features: {
        title: "秒级发卡 & 全面自主掌控",
        desc: "直接通过手机在几秒内生成虚拟卡。在全球支持在线支付的商户处畅行无阻，每笔消费均有实时通知提醒。",
        item1: "即时生成卡片并可自定义设置消费限额",
        item2: "一键冻结与解冻，保障资金安全无忧",
        item3: "全球各大电商平台与航空公司广泛支持"
      },
      faq: {
        title: "旅行卡常见问题",
        q1: "Getly 虚拟卡是否在全球范围内通用？",
        a1: "是的，Getly 虚拟卡可在全球主流在线商户、旅行预订平台及数字订阅服务中使用。",
        q2: "如果更换设备，我可以冻结卡片吗？",
        a2: "可以，您可以在 Getly 安全控制台中一键随时冻结或恢复卡片。"
      }
    },
    esim: {
      badge: "全球 eSIM 网络连接",
      title: "全球高速流量，告别繁琐实体 SIM 卡。",
      subtitle: "落地任意国家即刻连上高速网络，告别高昂的传统漫游资费账单。",
      cta: "获取 eSIM 流量",
      features: {
        title: "支持 180+ 目的地即时激活",
        desc: "无需在机场排队寻找 SIM 卡柜台。通过 Getly 浏览目的地流量包，扫码即装，飞机落地瞬间即可连网。",
        item1: "支持 QR 码扫描或应用内一键自动安装",
        item2: "提供灵活的本地、区域及全球流量套餐",
        item3: "境外出行告别意外漫游扣费账单"
      },
      faq: {
        title: "eSIM 常见问题",
        q1: "我的手机是否支持 Getly eSIM 功能？",
        a1: "苹果、谷歌和三星等主流品牌近几年的多数机型均支持 eSIM。您可以在应用内快速自测兼容性。",
        q2: "使用 eSIM 时我的国内原手机号还能用吗？",
        a2: "可以。eSIM 与实体 SIM 卡并行工作，您的原手机号仍可正常接听电话或接收微信验证码。"
      }
    },
    flights: {
      badge: "全球机票预订",
      title: "直接从钱包余额预订全球航班。",
      subtitle: "轻松查询全球 400+ 家航空公司，享受清晰透明的价格，直接使用多币种余额支付出票。",
      cta: "在应用中预订机票",
      features: {
        title: "覆盖全球航线网络 & 余额直付",
        desc: "告别二次汇率折算与繁琐的第三方跳转。直接通过多币种钱包快捷预订全球及国内航线。",
        item1: "实时比价全球 400+ 家主流及区域航空公司",
        item2: "直接使用多币种钱包余额支付，省去换汇手续费",
        item3: "出票即时生成电子客票并提供智能行李额度提醒"
      },
      faq: {
        title: "机票预订常见问题",
        q1: "预订成功后如何获取我的机票行程单？",
        a1: "电子客票与航司确认码将即时同步至 Getly 应用，并同步发送至您的注册邮箱。",
        q2: "我可以在应用内改签或退票吗？",
        a2: "可以，您可在应用内根据航空公司的客票规则直接发起退改签申请。"
      }
    },
    hotels: {
      badge: "全球精选住宿",
      title: "量身定制住宿，伴您舒适出行。",
      subtitle: "直接使用多币种余额，预订 180+ 个国家的精品酒店、度假酒店与特色公寓。",
      cta: "在应用中预订酒店",
      features: {
        title: "价格透明 & 实时确认房态",
        desc: "结算时绝无意外汇率损失。以清晰明了的当地价格锁定心仪房源，支持灵活取消与即时确认。",
        item1: "甄选全球 100 多万家高品质酒店与度假公寓",
        item2: "多币种余额直接扣款，告别隐性汇率差价",
        item3: "支持灵活取消政策，并享有全天候专属预订客服支持"
      },
      visual: {
        tag: "精选房源",
        title: "极速入住 & 智能数字房卡",
        badge: "覆盖 180+ 国家"
      },
      faq: {
        title: "酒店预订常见问题",
        q1: "在 Getly 上如何支付酒店房费？",
        a1: "您可直接使用 Getly 多币种余额或虚拟卡付款，免除任何跨境交易附加费。",
        q2: "房费价格是否包含所有税费？",
        a2: "是的，Getly 页面展示的结算价格即为含税总价，绝无隐藏消费。"
      }
    },
    insurance: {
      badge: "全球旅行保障",
      title: "全面贴心保障，落地无忧出行。",
      subtitle: "一键投保紧急医疗就医、航班延误、行李遗失及户外运动保障，全方位护航每一次远行。",
      cta: "立即购买旅行保障",
      features: {
        title: "即时出单 & 线上极速理赔",
        desc: "无论单次出行还是全年多次往返均可灵活承保。直接在应用内上传就医发票或延误证明即可快速理赔。",
        item1: "最高可达 100 万美元的海外突发疾病就医及住院保障",
        item2: "航班延误、行程中断与行李损失多重补偿",
        item3: "24 小时多语言全球紧急医疗援助热线"
      },
      visual: {
        tag: "权威承保机构",
        title: "国际 A 级评级高品质保障",
        badge: "24/7 全天候关怀"
      },
      faq: {
        title: "旅行保障常见问题",
        q1: "我应该在什么时候购买旅行保障？",
        a1: "您可在出发前随时投保，或设置为在航班起飞时自动生效。",
        q2: "出险后如何申请理赔？",
        a2: "只需在 Getly 应用中上传收据或就医病历，合作保险机构通常在 48 小时内完成理赔审核。"
      }
    },
    visa: {
      badge: "数字化签证服务",
      title: "高效快捷办签，告别繁琐流程。",
      subtitle: "精准查询入境要求，安全上传旅行材料，由权威专家全程跟进，实时掌握签证办理状态。",
      cta: "查询签证要求",
      features: {
        title: "智能条件评估 & 加急递交",
        desc: "在预订机票前清楚知晓所需文件。Getly 简化领馆表格与电子签申办步骤，省时省力。",
        item1: "支持 120+ 热门目的地的入境规定查询与电子签极速办理",
        item2: "配备高安全级别数字文档保险箱，支持护照智能识别",
        item3: "实时状态追踪，出签结果即时推送通知"
      },
      visual: {
        tag: "全球出入境服务",
        title: "支持 120+ 国家及地区",
        badge: "绿色通道"
      },
      faq: {
        title: "签证常见问题",
        q1: "电子签证通常需要多久出签？",
        a1: "办理周期视目的地而定，极速电子签通常仅需 24 小时，传统贴纸签证则依照使领馆标准流程办理。",
        q2: "我上传的护照信息安全吗？",
        a2: "所有文档与生物信息均采用多重加密存储，仅在获得授权后提交给官方认可的领事审批机构。"
      }
    },
    "ai-trip-planner": {
      badge: "Getly AI 智能助手",
      title: "个性化定制行程与智能旅行攻略。",
      subtitle: "Getly AI 自动评估每日开销、推荐地道打卡地并智能规划出行清单。",
      cta: "在应用中体验 AI 助手",
      featuresTitle: "智慧旅行新体验",
      featuresDesc: "不论是在东京深度游玩 3 天，还是移居柏林生活 6 个月，Getly AI 都能为您提供安全建议与预算规划。",
      item1: "数秒内生成专属的每日行程路线",
      item2: "基于当地币种精确拆解餐饮、交通及景点预算",
      item3: "智能提醒流量充值与卡片安全设置"
    },
    coverage: {
      badge: "全球网络覆盖",
      title: "支持的国家与地区",
      subtitle: "检索 180+ 目的地的 eSIM 流量、多币种余额及旅行卡刷卡支持情况。",
      searchPlaceholder: "搜索国家名称、地区或 ISO 代码..."
    },
    security: {
      badge: "安全与资金保护",
      title: "为您的每一次出行保驾护航。",
      subtitle: "您的资金与个人隐私均受到多层高强度加密保护与合规金融设施监管。",
      card1Title: "生物识别验证",
      card1Desc: "面容与指纹识别，严格保障每笔交易与应用访问安全。",
      card2Title: "即时卡片管控",
      card2Desc: "随时一键冻结或恢复卡片，杜绝盗刷风险。",
      card3Title: "全链路加密传输",
      card3Desc: "个人数据、余额与行程信息全程端到端加密保护。"
    },
    about: {
      badge: "品牌故事",
      title: "专为现代探索者而生。",
      subtitle: "Getly 旨在消除全球旅行者、数字游民和商务人士在跨境金融与网络连接方面的繁琐痛点。",
      quote: "\"让每一次探索都成为难忘的精彩体验。\"",
      whyTitle: "为什么创建 Getly",
      whyP1: "在跨国旅行或远程办公时，人们不应该被迫在五个不同的软件之间来回切换——一个用来换汇、一个买 SIM 卡、一个预订机票。",
      whyP2: "Getly 将旅行必备工具凝聚于一体：多币种钱包、虚拟旅行卡、覆盖 180+ 国的高速 eSIM 与一键机票预订。"
    },
    faq: {
      badge: "帮助与解答",
      title: "帮助中心与常见问题",
      subtitle: "快速了解钱包充值、虚拟卡使用、eSIM 激活、酒店入住及机票预订相关信息。"
    },
    blog: {
      badge: "博客与新闻",
      title: "旅行探索故事与产品动态",
      subtitle: "为现代旅行者与数字游民提供实用的出境指南与产品资讯。",
      readStory: "阅读全文"
    },
    press: {
      badge: "新闻发布室",
      title: "Getly 媒体报道",
      subtitle: "官方新闻通稿、品牌资源包与媒体动态。",
      cardTitle: "媒体联络与素材",
      cardDesc: "如需媒体采访、品牌素材或了解团队动态，请发送邮件至 press@getly.app 与我们联系。",
      cardCta: "联系媒体团队"
    },
    legal: {
      badge: "法律条款与合规声明",
      lastUpdated: "最近更新时间：2026年9月",
      privacy: {
        title: "隐私保护政策",
        description: "Getly 如何收集、使用和保护您的个人数据及出行信息。",
        section1Title: "1. 我们收集的信息",
        section1Desc: "Getly 收集提供跨境旅行、多币种钱包、eSIM 流量、酒店住宿及机票预订所需的基本个人信息，包括身份资料、设备信息及交易记录。",
        section2Title: "2. 信息的使用方式",
        section2Desc: "我们严格将您的信息用于运营 Getly 应用、核验身份、激活 eSIM、处理支付交易及防范欺诈风险，严守合规标准。",
        section3Title: "3. 数据安全与存储",
        section3Desc: "我们采用多层高强度加密存储与生物识别验证技术，确保您的隐私数据不受未经授权的访问或泄露。"
      },
      terms: {
        title: "用户服务协议",
        description: "Getly 移动应用及官方平台的用户服务条款与通用协议。",
        section1Title: "1. 条款的接受",
        section1Desc: "下载、访问或使用 Getly 应用程序即表示您同意受本用户服务协议的约束。",
        section2Title: "2. 提供的服务",
        section2Desc: "Getly 携手持牌金融与旅游合作伙伴，提供多币种钱包、虚拟旅行卡、全球 eSIM、机票酒店预订、境外保险及电子签证服务。",
        section3Title: "3. 用户责任与义务",
        section3Desc: "您同意提供真实有效的个人身份信息，妥善保管设备凭据，并在遵守各项适用法律的前提下使用本服务。"
      },
      cookie: {
        title: "Cookie 与隐私政策",
        description: "Getly 如何使用 Cookie 和本地存储技术优化您的使用体验。",
        section1Title: "1. 什么是 Cookie",
        section1Desc: "Cookie 是保存在您浏览器或设备上的小型数据文件，用于记录偏好设置并保障账户会话安全。",
        section2Title: "2. Cookie 的用途",
        section2Desc: "Getly 使用必要型 Cookie 维护登录会话安全，使用功能型 Cookie 保存语言与货币偏好，并使用汇总分析 Cookie 监测系统性能。",
        section3Title: "3. 管理您的偏好",
        section3Desc: "您可以随时在浏览器设置中或通过我们网站的偏好控制面板禁用非必要 Cookie。"
      },
      aml: {
        title: "反洗钱合规政策 (AML)",
        description: "Getly 反洗钱、反恐怖融资及客户身份识别 (KYC) 政策标准。",
        section1Title: "1. 合规管理框架",
        section1Desc: "Getly 严格遵循国际金融行动特别工作组 (FATF) 建议及各地金融监管机构的反洗钱 (AML) 规定。",
        section2Title: "2. 客户身份验证 (KYC)",
        section2Desc: "所有用户在获取高额度钱包或虚拟卡之前，均需完成分级尽职调查 (CDD) 及官方身份证件核验。",
        section3Title: "3. 交易监控与制裁筛查",
        section3Desc: "智能化监控系统对交易进行实时风险评估，并比对全球制裁名单以预防金融违法行为。"
      },
      complaints: {
        title: "客户申诉与争议解决",
        description: "Getly 客户投诉受理流程及争议调解机制。",
        section1Title: "1. 我们的服务承诺",
        section1Desc: "我们始终致力于提供高品质服务。若您遇到任何产品或服务问题，全天候专属客服团队将竭诚为您解决。",
        section2Title: "2. 如何提交申诉",
        section2Desc: "您可通过应用内帮助中心直接发起投诉，或发送邮件至 complaints@getly.app 并附上相关订单编号与详情。",
        section3Title: "3. 处理时效与调解",
        section3Desc: "我们将在 24 小时内确认受理，并在 15 个工作日内提供最终处理方案。"
      }
    }
  },

  // JAPANESE
  ja: {
    common: {
      brand: {
        name: "Getly",
        headline: "現代の旅行者のためのスーパーアプリ",
        slogan: "見知らぬ場所を、忘れられない特別な体験に。"
      },
      nav: {
        home: "ホーム",
        wallet: "ウォレット",
        cards: "トラベルカード",
        esim: "eSIM",
        flights: "航空券予約",
        hotels: "ホテル予約",
        insurance: "旅行保険",
        visa: "ビザ申請",
        aiTripPlanner: "AIプランナー",
        coverage: "対応エリア",
        security: "セキュリティ",
        pricing: "料金プラン",
        downloadApp: "アプリを入手"
      },
      footer: {
        rights: "無断転載を禁じます。",
        tagline: "見知らぬ場所を、忘れられない特別な体験に。",
        product: "プロダクト",
        company: "企業情報",
        legal: "法的情報",
        support: "サポート",
        aboutUs: "私たちについて",
        press: "プレス＆メディア",
        blog: "ブログ＆最新情報",
        faq: "ヘルプ＆よくある質問",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        superAppSubtitle: "グローバルトラベルスーパーアプリ",
        downloadCTA: "最先端のグローバルトラベルを体験"
      },
      buttons: {
        getApp: "Getlyアプリを入手",
        exploreFeatures: "機能を見る",
        learnMore: "詳細を見る",
        fundWallet: "残高をチャージ",
        getCard: "カードを発行",
        buyEsim: "グローバルeSIMを購入",
        bookFlight: "航空券を予約",
        bookHotel: "ホテルを予約",
        getInsurance: "旅行保険に加入",
        applyVisa: "ビザを申請"
      }
    },
    home: {
      hero: {
        badge: "グローバルトラベルスーパーアプリ",
        headline: "現代の旅行者のためのスーパーアプリ",
        headlineLine1: "現代の旅行者のための",
        headlineLine2: "スーパーアプリ",
        subhead: "見知らぬ場所を、忘れられない特別な体験に。世界中で使えるマルチ通貨ウォレット、バーチャルカード、eSIM、航空券・ホテル予約、旅行保険、ビザ申請がひとつに。",
        ctaPrimary: "アプリをダウンロード",
        ctaSecondary: "機能を見る"
      },
      ticker: [
        "グローバルウォレット",
        "バーチャルカード",
        "グローバルeSIM",
        "航空券予約",
        "ホテル宿泊",
        "旅行保険",
        "ビザ申請",
        "AI旅行プランナー",
        "即時チャージ",
        "マルチ通貨対応"
      ],
      partners: {
        backedBy: "世界中の業界リーダーから信頼されています"
      },
      pillars: {
        title: "旅に必要なすべてを、ひとつのアプリに。",
        subtitle: "旅行の準備に煩わされる必要はありません。Getlyはお金、通信、宿泊、航空券をスマートに統合します。",
        wallet: {
          eyebrow: "グローバルウォレット",
          headlineLine1: "ひとつのウォレットで、",
          headlineLine2: "世界中どこでも使える。",
          desc: "チャージ、世界中での決済、引き出しも自由自在。",
          cta: "ウォレットを見る",
          badge: "世界中で決済可能"
        },
        cards: {
          eyebrow: "バーチャルカード",
          headlineLine1: "あらゆる支払いに、",
          headlineLine2: "即時発行カードを。",
          desc: "ウォレット残高から即座にバーチャルカードを発行して利用可能。",
          cta: "カードを見る",
          badge: "即時発行"
        },
        esim: {
          eyebrow: "グローバルeSIM",
          headlineLine1: "着陸と同時に、",
          headlineLine2: "すぐにつながる。",
          desc: "物理SIM不要。データプランを選んで数秒で接続。",
          cta: "eSIMを見る",
          badge: "180カ国以上対応"
        },
        flights: {
          eyebrow: "航空券予約",
          headlineLine1: "ウォレットから、",
          headlineLine2: "直接フライトを予約。",
          desc: "アプリから離れずに400社以上の航空会社を検索・予約。",
          cta: "フライトを見る",
          badge: "HND → CDG"
        },
        hotels: {
          eyebrow: "ホテル宿泊",
          headlineLine1: "旅のスタイルに合わせた",
          headlineLine2: "最適な宿泊施設。",
          desc: "世界中の厳選ブティックホテルやリゾートを残高から直接予約。",
          cta: "ホテルを見る",
          badge: "100万軒以上"
        },
        insurance: {
          eyebrow: "旅行保険",
          headlineLine1: "着陸したその瞬間から、",
          headlineLine2: "安心の包括補償。",
          desc: "緊急医療費、手荷物紛失、フライト遅延をワンタップでカバー。",
          cta: "保険を見る",
          badge: "24時間年中無休対応"
        },
        visa: {
          eyebrow: "ビザ申請",
          headlineLine1: "手間なくスムーズな",
          headlineLine2: "ビザ手続き。",
          desc: "入国要件を確認し、デジタル書類を提出して進捗をリアルタイム追跡。",
          cta: "ビザを見る",
          badge: "120以上の目的地"
        }
      },
      ai: {
        badge: "Getly AI コンパニオン",
        title: "あなた専用の日程表とスマートな旅行ガイド",
        subtitle: "Getly AIが1日の予算を計画し、おすすめスポットを提案し、旅の準備をサポートします。",
        cta: "AIプランナーを体験",
        feature1Title: "スマートな旅程作成",
        feature1Desc: "旅行スタイルに合わせて、数秒で日ごとのスケジュールを自動生成。",
        feature2Title: "予算ガイド",
        feature2Desc: "現地通貨で食事や交通費などの1日の目安費用を自動算出。",
        hoverHint: "カーソルを合わせてGetly AIを体験"
      },
      howItWorks: {
        badge: "シンプルな手順",
        title: "Getlyの使い方",
        subtitle: "簡単4ステップでスタート",
        step1Eyebrow: "ステップ 1",
        step1Title: "Getlyアプリをダウンロード",
        step1Desc: "App StoreまたはGoogle Playから入手し、すぐに本人確認を完了。",
        step2Eyebrow: "ステップ 2",
        step2Title: "ウォレットに入金",
        step2Desc: "デビットカードや銀行決済などの手段で簡単に入金。",
        step3Eyebrow: "ステップ 3",
        step3Title: "カード作成＆eSIM開通",
        step3Desc: "バーチャルカードを発行し、高速eSIMデータを開通。",
        step4Eyebrow: "ステップ 4",
        step4Title: "世界中をスマートに旅する",
        step4Desc: "海外決済、フライト予約、ホテル宿泊まで安心して楽しめます。"
      },
      trust: {
        stat1Value: "世界対応",
        stat1Label: "旅行者のための専用設計",
        stat2Value: "0円",
        stat2Label: "カード発行手数料*",
        stat3Value: "24/7",
        stat3Label: "アプリ内サポート",
        stat4Value: "1アプリ",
        stat4Label: "旅のすべてをひとつに"
      },
      coverage: {
        badge: "グローバル対応",
        title: "180カ国以上の目的地に対応",
        subtitle: "航空券予約、eSIM接続、バーチャルカード決済まで、Getlyが常にあなたをサポート。",
        viewAll: "対応国と通信エリアをすべて見る"
      },
      faq: {
        badge: "よくある質問",
        title: "よくある質問",
        subtitle: "Getlyに関するご質問に分かりやすくお答えします。",
        viewAll: "すべてのよくある質問を見る",
        q1: "Getlyとは何ですか？",
        a1: "Getlyは現代の旅行者やビジネスパーソン向けのスーパーアプリです。マルチ通貨ウォレット、バーチャルカード、eSIM、フライト・ホテル予約、旅行保険、ビザ申請を統合しています。",
        q2: "ウォレットへの入金方法を教えてください。",
        a2: "デビットカードや銀行決済オプション、主要な国際決済手段から即座に入金できます。",
        q3: "グローバルeSIMはどのように機能しますか？",
        a3: "180カ国以上に対応したデジタルeSIMプロファイルを提供しています。QRコードまたはアプリ内からワンタップで即座に接続できます。",
        q4: "ウォレット残高で航空券やホテルを予約できますか？",
        a4: "はい！400社以上の航空券と100万軒以上のホテルを、不当な為替手数料なしに残高から直接予約できます。"
      },
      download: {
        eyebrow: "あなたの旅はここから始まる",
        headlineLine1: "ひとつのアプリで、",
        headlineLine2: "広がる世界へ。",
        subtitle: "Getlyをダウンロードして、ウォレット、ネット環境、予約、旅の相棒をいつでも手元に。"
      }
    },
    wallet: {
      badge: "マルチ通貨ウォレット",
      title: "ひとつのウォレットで、世界中の通貨を。",
      subtitle: "簡単に入金し、複数通貨を保有。世界中で決済し、いつでも自由に資金を引き出せます。",
      cta: "ウォレットを入手",
      features: {
        title: "即時チャージ＆世界中でのスマート決済",
        desc: "東京でのディナー、パリでのタクシー、次の旅行のための資金管理まで、Getlyウォレットがスムーズにサポートします。",
        item1: "デビットカードや銀行決済で即時チャージ可能",
        item2: "隠れた手数料のない透明なマルチ通貨管理",
        item3: "必要に応じて外部口座へフレキシブルに引き出し可能"
      },
      faq: {
        title: "ウォレットに関する質問",
        q1: "Getlyで保有できる通貨は何ですか？",
        a1: "USD、EUR、GBP、NGN、CAD、AEDなどの主要な国際・地域通貨をひとつの口座で保有・両替できます。",
        q2: "チャージした資金はどのくらいで反映されますか？",
        a2: "デビットカードや直接決済リンクからのチャージは、即座に残高へ反映されます。"
      }
    },
    cards: {
      badge: "トラベルバーチャルカード",
      title: "あらゆる支払いに対応するカード。",
      subtitle: "海外ショッピング、各種サブスク、航空券予約、レストラン決済のためのバーチャルカードを即座に作成。",
      cta: "今すぐカードを発行",
      features: {
        title: "即時発行と万全のコントロール",
        desc: "スマホから数秒でカードを発行。オンライン加盟店で利用でき、利用時はリアルタイムで通知されます。",
        item1: "限度額を自由に設定できる即時カード発行",
        item2: "安心のワンタップ一時停止＆再開機能",
        item3: "世界中のオンラインショップや航空会社で利用可能"
      },
      faq: {
        title: "カードに関する質問",
        q1: "Getlyのバーチャルカードは世界中で使えますか？",
        a1: "はい、世界中のオンライン加盟店、旅行予約サイト、サブスクリプションで利用可能です。",
        q2: "端末を紛失した場合にカードを停止できますか？",
        a2: "はい、ダッシュボードからワンタップで即座にカードを一時停止できます。"
      }
    },
    esim: {
      badge: "グローバルeSIM接続",
      title: "世界中で使えるデータプラン。物理SIMは不要。",
      subtitle: "世界各国に着陸後、高額なローミング料金を気にせずすぐに高速インターネットに接続。",
      cta: "eSIMプランを購入",
      features: {
        title: "180カ国以上で即時アクティベーション",
        desc: "空港でSIMカウンターを探す必要はありません。目的地のプランを選び、QRコードをスキャンしてすぐに接続できます。",
        item1: "QRコードまたはアプリからワンタップで簡単設定",
        item2: "国別・地域別・全世界対応の柔軟なプラン",
        item3: "海外旅行中の予期せぬローミング請求を防止"
      },
      faq: {
        title: "eSIMに関する質問",
        q1: "私のスマートフォンはGetly eSIMに対応していますか？",
        a1: "Apple、Google、Samsungなどの近年の主要スマートフォンに対応しています。アプリ内で確認可能です。",
        q2: "メインの電話番号はそのまま使えますか？",
        a2: "はい。eSIMは物理SIMと同時に使用できるため、日本の電話番号やLINEなどもそのまま利用できます。"
      }
    },
    flights: {
      badge: "世界各国の航空券予約",
      title: "ウォレット残高から直接フライトを予約。",
      subtitle: "世界400社以上の航空会社を比較し、明確な料金でマルチ通貨残高からスムーズに予約・決済。",
      cta: "アプリでフライトを予約",
      features: {
        title: "世界規模の航空ネットワーク＆直接決済",
        desc: "無駄な為替手数料や外部サイトへの遷移をスキップ。ウォレットから直接国内外のフライトを予約できます。",
        item1: "大手航空会社からLCCまで400社以上を比較",
        item2: "為替手数料なしでウォレット残高から直接決済",
        item3: "即時発行の電子航空券と手荷物許容量の通知機能"
      },
      faq: {
        title: "航空券予約に関する質問",
        q1: "予約完了後の航空券はどのように受け取りますか？",
        a1: "eチケットと予約番号が即座にアプリ内に表示され、登録メールアドレスにも送信されます。",
        q2: "予約の変更やキャンセルはできますか？",
        a2: "はい、航空会社の規定に従い、アプリ内から直接変更やキャンセル手続きが可能です。"
      }
    },
    hotels: {
      badge: "世界中のホテル宿泊",
      title: "旅のスタイルに合わせた最適な宿泊施設。",
      subtitle: "180カ国以上のブティックホテル、高級リゾート、アパートメントをマルチ通貨残高から直接予約。",
      cta: "アプリでホテルを予約",
      features: {
        title: "明確な料金表示とリアルタイム予約",
        desc: "決済時の予期せぬ為替上乗せなし。現地の明確な料金で宿泊を確保し、柔軟なキャンセルが可能です。",
        item1: "100万軒以上の厳選されたホテル・宿泊施設",
        item2: "為替手数料なしでマルチ通貨残高から直接決済",
        item3: "柔軟なキャンセルポリシーと24時間年中無休のサポート体制"
      },
      visual: {
        tag: "厳選された宿泊施設",
        title: "スマートチェックイン＆デジタルキー",
        badge: "180カ国以上"
      },
      faq: {
        title: "ホテル予約に関する質問",
        q1: "Getlyでのホテル代金の支払い方法を教えてください。",
        a1: "Getlyのマルチ通貨残高またはバーチャルカードで、余計な国際取引手数料なしに決済できます。",
        q2: "表示されている料金に隠れた手数料はありますか？",
        a2: "いいえ、アプリに表示される金額は税金等を含んだ最終確定金額です。"
      }
    },
    insurance: {
      badge: "グローバルトラベル保険",
      title: "着陸したその瞬間から、安心の包括補償。",
      subtitle: "緊急医療費、フライト遅延、手荷物紛失、アクティビティ補償まで、アプリからワンタップで加入。",
      cta: "旅行保険に加入する",
      features: {
        title: "即時保険証書発行＆オンライン請求",
        desc: "1回の旅行から年間の複数回旅行まで柔軟に対応。医療領収書などをアプリから提出してスムーズに請求できます。",
        item1: "最大100万ドルの緊急医療・入院補償",
        item2: "旅行キャンセル・中断・手荷物遅延に対する補償",
        item3: "世界中でつながる24時間多言語緊急アシスタンス"
      },
      visual: {
        tag: "認定保険会社",
        title: "最高評価のグローバルプロテクション",
        badge: "24時間365日対応"
      },
      faq: {
        title: "保険に関する質問",
        q1: "旅行保険にはいつ加入すべきですか？",
        a1: "出発前はもちろん、フライト離陸時に自動で補償が開始するよう設定することも可能です。",
        q2: "保険金の請求はどのように行いますか？",
        a2: "Getlyアプリ内に領収書や診断書をアップロードするだけで、通常48時間以内に審査が行われます。"
      }
    },
    visa: {
      badge: "デジタルビザ手続き",
      title: "手間なくスムーズなビザ手続き。",
      subtitle: "各国の入国要件を確認し、安全に書類を提出。専門家とともにリアルタイムで進捗を確認できます。",
      cta: "ビザ要件を確認する",
      features: {
        title: "スマートな適格性確認＆迅速な申請",
        desc: "航空券を購入する前に必要な書類を正確に把握。大使館フォームやeビザの申請を簡素化します。",
        item1: "120カ国以上の入国要件確認とeビザ迅速申請",
        item2: "パスポート自動読み取り対応のセキュアなドキュメント保管庫",
        item3: "リアルタイムの進捗追跡と承認時のプッシュ通知"
      },
      visual: {
        tag: "グローバル入国管理",
        title: "120以上の目的地に対応",
        badge: "ファストトラック"
      },
      faq: {
        title: "ビザに関する質問",
        q1: "eビザの取得にはどのくらい時間がかかりますか？",
        a1: "国によって異なり、最短24時間で発行されるeビザから、標準的な領事館審査期間を要するものまで様々です。",
        q2: "パスポート情報や個人情報の安全性は確保されていますか？",
        a2: "すべてのデータは高度な暗号化で保護され、認定された公式機関にのみ提出されます。"
      }
    },
    "ai-trip-planner": {
      badge: "Getly AI コンパニオン",
      title: "あなた専用の日程表とスマートな旅の知恵。",
      subtitle: "Getly AIが1日の予算を見積もり、隠れた名所を提案し、旅行の準備を自動で整えます。",
      cta: "AIプランナーを体験",
      featuresTitle: "スマートな旅のインテリジェンス",
      featuresDesc: "東京での3日間の滞在でも、ベルリンでの6カ月間の長期滞在でも、Getly AIが安全アドバイスと予算管理を提供します。",
      item1: "数秒で完成する日ごとのカスタム旅行プラン",
      item2: "食事・交通・アクティビティの現地通貨予算ガイド",
      item3: "eSIMデータ残量やカードのセキュリティに関するスマート通知"
    },
    coverage: {
      badge: "対応エリア",
      title: "対応国および地域一覧",
      subtitle: "180カ国以上のeSIMデータ、マルチ通貨決済、トラベルカード対応国を検索。",
      searchPlaceholder: "国名、地域、ISOコードを検索..."
    },
    security: {
      badge: "セキュリティと保護",
      title: "あなたの旅をあらゆる角度から保護。",
      subtitle: "お客様の資金と個人情報は、多層暗号化と厳格に規制されたパートナーインフラにより保護されています。",
      card1Title: "生体認証保護",
      card1Desc: "Face IDや指紋認証で、すべての決済とアクセスを確実に保護。",
      card2Title: "即時コントロール",
      card2Desc: "アプリからワンタップでカードの一時停止や再開が可能。",
      card3Title: "暗号化されたデータ通信",
      card3Desc: "すべての取引データや旅行情報をエンドツーエンドで暗号化。"
    },
    about: {
      badge: "私たちのストーリー",
      title: "現代の旅行者のために誕生しました。",
      subtitle: "Getlyは、国境を越えて活躍する旅行者やノマドの金融と通信の煩わしさを解消するために作られました。",
      quote: "\"見知らぬ場所を、忘れられない特別な体験に。\"",
      whyTitle: "Getlyを立ち上げた理由",
      whyP1: "海外旅行やリモートワークの際、両替、SIMカード、航空券予約のためにいくつものアプリを使い分ける必要はありません。",
      whyP2: "Getlyは必須のツールをひとつにまとめました。マルチ通貨ウォレット、バーチャルカード、180カ国以上で使えるeSIM、そして直接のフライト予約を提供します。"
    },
    faq: {
      badge: "よくある質問",
      title: "ヘルプセンター＆よくある質問",
      subtitle: "ウォレットへの入金、バーチャルカードの利用、eSIM開通、ホテルや航空券予約についての回答をご案内します。"
    },
    blog: {
      badge: "ブログ＆最新ニュース",
      title: "旅のストーリーとプロダクト最新情報",
      subtitle: "旅行者やデジタルノマドのための役立つガイドやニュースをお届けします。",
      readStory: "記事を読む"
    },
    press: {
      badge: "プレスキット",
      title: "Getly ニュースルーム",
      subtitle: "プレスリリース、ブランドアセット、メディア掲載情報。",
      cardTitle: "メディア関係者のお問い合わせ",
      cardDesc: "取材やブランド素材に関するお問い合わせは、press@getly.app までご連絡ください。",
      cardCta: "プレスチームに連絡"
    },
    legal: {
      badge: "法的情報とコンプライアンス",
      lastUpdated: "最終更新日：2026年9月",
      privacy: {
        title: "プライバシーポリシー",
        description: "Getlyがお客様の個人情報および渡航情報をどのように収集、利用、保護するかについて説明します。",
        section1Title: "1. 収集する情報",
        section1Desc: "Getlyは、旅行関連サービス、ウォレット管理、eSIMプロファイルの提供、ホテルや航空券の予約に必要な個人情報を収集します。",
        section2Title: "2. 情報の利用目的",
        section2Desc: "収集した情報は、Getlyアプリの運営、本人確認、eSIMの開通、決済処理、および不正防止の目的でのみ厳格に取り扱われます。",
        section3Title: "3. データの安全性と管理",
        section3Desc: "多層暗号化、生体認証、厳格なアクセス制御を導入し、お客様の個人情報を不正アクセスや紛失から確実に保護します。"
      },
      terms: {
        title: "利用規約",
        description: "Getlyアプリおよびプラットフォームのご利用条件に関する基本規約です。",
        section1Title: "1. 規約への同意",
        section1Desc: "Getlyアプリのダウンロードやウェブサイトの利用を開始した時点で、本利用規約に同意したものとみなされます。",
        section2Title: "2. 提供するサービス",
        section2Desc: "Getlyは認可された提携事業者とともに、マルチ通貨ウォレット、バーチャルカード、eSIM、フライト・ホテル予約、旅行保険、ビザ申請支援を提供します。",
        section3Title: "3. ユーザーの責任",
        section3Desc: "正確な本人情報を提供し、ログイン情報を安全に管理し、関連法令を遵守してサービスをご利用いただく必要があります。"
      },
      cookie: {
        title: "クッキーポリシー",
        description: "Getlyにおけるクッキーおよびローカルストレージの利用方法について。",
        section1Title: "1. クッキーとは",
        section1Desc: "クッキーとは、お客様の設定を保持し安全なセッションを確立するためにブラウザに保存される小さなデータファイルです。",
        section2Title: "2. クッキーの利用目的",
        section2Desc: "セッション維持に必要な必須クッキー、言語・通貨設定を保存する機能性クッキー、パフォーマンス測定用のアナリティクスクッキーを利用します。",
        section3Title: "3. 設定の変更と管理",
        section3Desc: "ブラウザの設定または当社の設定管理画面から、いつでも必須でないクッキーを無効化することができます。"
      },
      aml: {
        title: "アンチマネーロンダリング方針 (AML)",
        description: "マネーロンダリング防止、テロ資金供与対策および顧客確認 (KYC) に関する基本方針。",
        section1Title: "1. コンプライアンス体制",
        section1Desc: "Getlyは国際的なFATF基準および各国の金融規制に基づき、厳格なAML/CTF手続きを導入しています。",
        section2Title: "2. 本人確認 (KYC)",
        section2Desc: "高額なウォレット利用やカード発行に先立ち、身分証確認を含む本人確認（CDD）を厳格に実施しています。",
        section3Title: "3. 取引監視と制裁リスト照合",
        section3Desc: "自動監視システムにより、リアルタイムで国際制裁リストや不審な取引パターンを監視し不正を防ぎます。"
      },
      complaints: {
        title: "苦情処理および紛争解決方針",
        description: "お客様からのご意見・苦情の受付および解決手続きについて。",
        section1Title: "1. 基本姿勢",
        section1Desc: "お客様に安心してご利用いただけるよう誠実に対応いたします。お困りの際は年中無休のサポート窓口までご連絡ください。",
        section2Title: "2. 申し立て方法",
        section2Desc: "アプリ内のヘルプセンターまたは complaints@getly.app 宛てに詳細を記載の上ご連絡いただけます。",
        section3Title: "3. 対応スケジュール",
        section3Desc: "24時間以内に受付確認を行い、原則15営業日以内に最終的な解決案をご提示いたします。"
      }
    }
  },

  // ARABIC
  ar: {
    common: {
      brand: {
        name: "جيتلي",
        headline: "تطبيق السفر الشامل للمسافر العصري",
        slogan: "نحول الأماكن الجديدة إلى تجارب لا تُنسى."
      },
      nav: {
        home: "الرئيسية",
        wallet: "المحفظة",
        cards: "بطاقات السفر",
        esim: "شريحة eSIM",
        flights: "حجز الطيران",
        hotels: "الفنادق",
        insurance: "التأمين",
        visa: "التأشيرات",
        aiTripPlanner: "مخطط الرحلات الذكي",
        coverage: "التغطية",
        security: "الأمان",
        pricing: "الرسوم",
        downloadApp: "تحميل التطبيق"
      },
      footer: {
        rights: "جميع الحقوق محفوظة.",
        tagline: "نحول الأماكن الجديدة إلى تجارب لا تُنسى.",
        product: "المنتجات",
        company: "الشركة",
        legal: "الشروط القانونية",
        support: "الدعم والمساعدة",
        aboutUs: "من نحن",
        press: "الصحافة والإعلام",
        blog: "المدونة والأخبار",
        faq: "الأسئلة الشائعة",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        superAppSubtitle: "تطبيق السفر العالمي الشامل",
        downloadCTA: "ابدأ تجربة السفر العالمي الحديثة"
      },
      buttons: {
        getApp: "تحميل تطبيق جيتلي",
        exploreFeatures: "استكشف المزايا",
        learnMore: "معرفة المزيد",
        fundWallet: "شحن المحفظة",
        getCard: "إصدار البطاقة",
        buyEsim: "شراء شريحة eSIM",
        bookFlight: "حجز رحلة طيران",
        bookHotel: "حجز فندق",
        getInsurance: "الحصول على تأمين السفر",
        applyVisa: "تقديم طلب تأشيرة"
      }
    },
    home: {
      hero: {
        badge: "تطبيق السفر العالمي الشامل",
        headline: "تطبيق السفر الشامل للمسافر العصري",
        headlineLine1: "تطبيق السفر الشامل",
        headlineLine2: "للمسافر العصري",
        subhead: "نحول الأماكن الجديدة إلى تجارب لا تُنسى. محفظة متعددة العملات، بطاقات سفر افتراضية، إنترنت eSIM، حجز طيران وفنادق، تأمين وتأشيرات في تطبيق واحد.",
        ctaPrimary: "تحميل التطبيق",
        ctaSecondary: "استكشف المزايا"
      },
      ticker: [
        "محفظة عالمية",
        "بطاقات افتراضية",
        "شريحة eSIM عالمية",
        "حجز طيران",
        "إقامات فندقية",
        "تأمين السفر",
        "استخراج التأشيرات",
        "مخطط الرحلات بالذكاء الاصطناعي",
        "شحن فوري",
        "متعدد العملات"
      ],
      partners: {
        backedBy: "يحظى بثقة ودعم نخبة من كبرى المؤسسات العالمية"
      },
      pillars: {
        title: "كل ما تحتاجه في تطبيق واحد.",
        subtitle: "السفر بطبيعته مليء بالتفاصيل. جيتلي يجمع المال والاتصال والإقامة والتنقل في تجربة موحدة.",
        wallet: {
          eyebrow: "محفظة عالمية",
          headlineLine1: "محفظة واحدة.",
          headlineLine2: "تعمل معك أينما ذهبت.",
          desc: "اشحن رصيدك، ادفع بالعملة المحلية، واسحب أموالك بكل سهولة.",
          cta: "استكشف المحفظة",
          badge: "دفع في كل العالم"
        },
        cards: {
          eyebrow: "بطاقات افتراضية",
          headlineLine1: "بطاقة افتراضية",
          headlineLine2: "لكل عملية شراء.",
          desc: "أصدر بطاقات سفر رقمية فورية مدعومة برصيد محفظتك مباشرة.",
          cta: "استكشف البطاقات",
          badge: "إصدار فوري"
        },
        esim: {
          eyebrow: "شريحة eSIM عالمية",
          headlineLine1: "اتصال فوري",
          headlineLine2: "من لحظة هبوطك.",
          desc: "اختر باقة الإنترنت المناسبة وانطلق دون الحاجة لشرائح تقليدية.",
          cta: "استكشف باقات eSIM",
          badge: "+180 دولة"
        },
        flights: {
          eyebrow: "حجز الطيران",
          headlineLine1: "احجز رحلاتك",
          headlineLine2: "مباشرة من محفظتك.",
          desc: "ابحث وقارن واحجز تذاكر الطيران دون مغادرة تطبيق جيتلي.",
          cta: "استكشف رحلات الطيران",
          badge: "DXB → LHR"
        },
        hotels: {
          eyebrow: "إقامات فندقية",
          headlineLine1: "خيارات إقامة مثالية",
          headlineLine2: "تناسب كل وجهة.",
          desc: "اكتشف واحجز فنادق مميزة حول العالم وادفع مباشرة من رصيدك.",
          cta: "استكشف الفنادق",
          badge: "+1 مليون فندق"
        },
        insurance: {
          eyebrow: "تأمين السفر",
          headlineLine1: "حماية شاملة",
          headlineLine2: "أينما تحط رحالك.",
          desc: "تغطية طبية طارئة، تأخر الرحلات وفقدان الأمتعة بضغطة زر واحدة.",
          cta: "استكشف التأمين",
          badge: "رعاية 24/7"
        },
        visa: {
          eyebrow: "استخراج التأشيرات",
          headlineLine1: "تأشيرات سريعة",
          headlineLine2: "بدون أي تعقيدات.",
          desc: "تحقق من شروط الدخول وقدم مستنداتك وتابع حالة طلبك لحظياً.",
          cta: "استكشف التأشيرات",
          badge: "+120 وجهة"
        }
      },
      ai: {
        badge: "رفيق السفر الذكي جيتلي",
        title: "خطط مخصصة ونصائح سفر ذكية",
        subtitle: "يساعدك ذكاء جيتلي في إدارة ميزانيتك اليومية واكتشاف الوجهات المحلية وإعداد حقيبة سفرك.",
        cta: "استكشف المخطط الذكي",
        feature1Title: "خطط رحلات ذكية",
        feature1Desc: "جداول يومية مخصصة يتم إنشاؤها خلال ثوانٍ حسب أسلوبك في السفر.",
        feature2Title: "إرشاد الميزانية",
        feature2Desc: "حساب التكاليف اليومية للطعام والتنقل والأنشطة بالعملات المحلية.",
        hoverHint: "مرر المؤشر لمشاهدة ذكاء جيتلي أثناء العمل"
      },
      howItWorks: {
        badge: "خطوات سهلة",
        title: "كيف يعمل جيتلي",
        subtitle: "ابدأ في 4 خطوات بسيطة",
        step1Eyebrow: "البداية",
        step1Title: "حمّل تطبيق جيتلي",
        step1Desc: "احصل على التطبيق من متجر آبل أو جوجل بلاي وأتمم التحقق في دقائق.",
        step2Eyebrow: "متعدد العملات",
        step2Title: "اشحن رصيد محفظتك",
        step2Desc: "أضف الأموال باستخدام بطاقات الخصم المحلية أو خيارات الدفع البنكية.",
        step3Eyebrow: "البطاقات والإنترنت",
        step3Title: "أصدر بطاقتك وفعل شريحة eSIM",
        step3Desc: "أصدر بطاقات افتراضية وفعل باقات إنترنت فائقة السرعة فوراً.",
        step4Eyebrow: "سفر بلا حدود",
        step4Title: "انطلق حول العالم بكل راحة",
        step4Desc: "ادفع عالمياً، احجز طيرانك وفنادقك وسافر بثقة تامة."
      },
      trust: {
        stat1Value: "عالمي",
        stat1Label: "مصمم خصيصاً للمسافرين",
        stat2Value: "0$",
        stat2Label: "رسوم إصدار البطاقات*",
        stat3Value: "24/7",
        stat3Label: "دعم مباشر داخل التطبيق",
        stat4Value: "تطبيق 1",
        stat4Label: "لكل تفاصيل رحلتك"
      },
      coverage: {
        badge: "انتشار عالمي",
        title: "متوفر في أكثر من 180 وجهة",
        subtitle: "سواء كنت تحجز رحلات طيران، تتصل عبر eSIM، أو تدفع ببطاقاتك، جيتلي يرافقك أينما كنت.",
        viewAll: "استكشف جميع الدول والتغطية المتاحة"
      },
      faq: {
        badge: "الأسئلة الشائعة",
        title: "الأسئلة الأكثر تكراراً",
        subtitle: "لديك استفسار حول جيتلي؟ إليك كل ما تحتاج معرفته.",
        viewAll: "عرض كافة الأسئلة الشائعة",
        q1: "ما هو تطبيق جيتلي؟",
        a1: "جيتلي هو التطبيق الفائق الشامل للمسافرين والمغتربين، يجمع محفظة متعددة العملات وبطاقات افتراضية وإنترنت eSIM وحجوزات الطيران والفنادق وتأمين السفر والتأشيرات.",
        q2: "كيف يمكنني شحن رصيد محفظة جيتلي؟",
        a2: "يمكنك الشحن الفوري باستخدام بطاقات الخصم المباشر أو التحويل البنكي أو القنوات العالمية المعتمدة.",
        q3: "كيف تعمل شريحة eSIM الدولية؟",
        a3: "يوفر جيتلي شرائح إلكترونية رقمية لأكثر من 180 دولة. ما عليك سوى مسح رمز QR أو الضغط على التثبيت التلقائي للاتصال بالشبكات المحلية فور وصولك.",
        q4: "هل يمكنني حجز الطيران والفنادق من رصيد المحفظة؟",
        a4: "نعم! يتيح لك جيتلي حجز رحلات الطيران عبر أكثر من 400 شركة عالمية وأكثر من مليون فندق والدفع مباشرة من محفظتك بدون رسوم تحويل خفية."
      },
      download: {
        eyebrow: "رحلتك القادمة تبدأ هنا",
        headlineLine1: "تطبيق واحد.",
        headlineLine2: "رحلات لا تنتهي.",
        subtitle: "حمّل جيتلي واصطحب محفظتك، اتصالك، حجوزاتك، ورفيق سفرك الذكي أينما توجهت."
      }
    },
    wallet: {
      badge: "محفظة عالمية متعددة العملات",
      title: "محفظة واحدة. كل العملات في متناول يدك.",
      subtitle: "اشحن رصيدك بسهولة، احتفظ بأرصدة متعددة العملات، ادفع في أي مكان، واسحب أموالك بحرية تامة.",
      cta: "احصل على المحفظة",
      features: {
        title: "شحن فوري ودفع دولي مريح",
        desc: "سواء كنت تدفع ثمن العشاء في طوكيو، أو تطلب سيارة في باريس، أو تدخر لرحلتك القادمة، تعمل محفظة جيتلي بسلاسة في الخلفية.",
        item1: "شحن فوري عبر بطاقات الخصم وخيارات الدفع البنكية المحلية",
        item2: "إدارة سلسة للأرصدة متعددة العملات دون أي رسوم خفية",
        item3: "خيارات سحب مرنة إلى الحسابات الخارجية عند الحاجة"
      },
      faq: {
        title: "أسئلة شائعة حول المحفظة",
        q1: "ما هي العملات التي يمكنني الاحتفاظ بها في جيتلي؟",
        a1: "يمكنك الاحتفاظ بالعملات العالمية والإقليمية الرئيسية وتبديلها بما في ذلك USD و EUR و GBP و NGN و CAD و AED ضمن رصيد موحد.",
        q2: "ما هي سرعة إيداع الأموال في المحفظة؟",
        a2: "تتم معالجة عمليات الشحن عبر بطاقات الخصم وروابط الدفع المباشرة بشكل فوري في رصيدك."
      }
    },
    cards: {
      badge: "بطاقات سفر افتراضية",
      title: "بطاقة مخصصة لكل عملية شراء.",
      subtitle: "أصدر بطاقات افتراضية فورية للتسوق الدولي، الاشتراكات الرقمية، حجوزات الطيران والمطاعم.",
      cta: "إصدار بطاقتك الآن",
      features: {
        title: "إصدار فوري وتحكم كامل",
        desc: "أنشئ بطاقات افتراضية في ثوانٍ من هاتفك الذكي. استخدمها لدى المتاجر الإلكترونية مع إشعارات فورية بكل معاملة.",
        item1: "إصدار فوري للبطاقات مع تحديد حدود إنفاق مخصصة",
        item2: "تجميد وإلغاء تجميد البطاقة بضغطة زر لأقصى درجات الأمان",
        item3: "قبول عالمي لدى المتاجر الإلكترونية وشركات الطيران"
      },
      faq: {
        title: "أسئلة شائعة حول البطاقات",
        q1: "هل بطاقات جيتلي الافتراضية مقبولة عالمياً؟",
        a1: "نعم، تعمل بطاقات جيتلي لدى جميع المتاجر الإلكترونية ومنصات السفر والخدمات الرقمية.",
        q2: "هل يمكنني تجميد بطاقتي في حال فقدان الهاتف؟",
        a2: "نعم، يمكنك إيقاف وتفعيل أي بطاقة فوراً من لوحة تحكم الأمان في تطبيق جيتلي."
      }
    },
    esim: {
      badge: "شريحة eSIM العالمية",
      title: "باقات إنترنت عالمية. بدون شرائح تقليدية.",
      subtitle: "اتصل بالإنترنت فائق السرعة فور وصولك لأي دولة وتجنب رسوم التجوال الباهظة.",
      cta: "احصل على شريحة eSIM",
      features: {
        title: "تفعيل فوري في أكثر من 180 وجهة",
        desc: "لا مزيد من البحث عن أكشاك بيع الشرائح في صالات المطار. اختر باقتك المفضلة وثبت شريحتك الإلكترونية بسهولة.",
        item1: "تثبيت فوري عبر مسح رمز QR أو بضغطة واحدة من التطبيق",
        item2: "باقات بيانات مرنة محلية وإقليمية وعالمية",
        item3: "وداعاً لمفاجآت فواتير التجوال الدولي أثناء السفر"
      },
      faq: {
        title: "أسئلة شائعة حول eSIM",
        q1: "هل هاتفي يدعم شريحة Getly eSIM؟",
        a1: "تدعم معظم الهواتف الذكية الحديثة من آبل وجوجل وسامسونج تقنية eSIM. يمكنك التحقق فوراً داخل التطبيق.",
        q2: "هل أفقد رقم هاتفي الأساسي عند تفعيل الشريحة؟",
        a2: "كلا، تعمل شريحة eSIM بالتوازي مع شريحتك العادية، مما يتيح لك استقبال المكالمات ورسائل واتساب كالمعتاد."
      }
    },
    flights: {
      badge: "حجز الطيران الدولي",
      title: "احجز رحلاتك مباشرة من رصيد محفظتك.",
      subtitle: "قارن أسعار أكثر من 400 شركة طيران عالمية بأسعار شفافة وادفع مباشرة من رصيدك متعدد العملات.",
      cta: "حجز الرحلات من التطبيق",
      features: {
        title: "شبكة خطوط عالمية ودفع مباشر",
        desc: "تجنب رسوم تحويل العملات وبوابات الدفع الخارجية المعقدة. احجز وجهاتك المحلية والدولية مباشرة من محفظتك.",
        item1: "مقارنة أسعار أكثر من 400 شركة طيران عالمية وإقليمية",
        item2: "دفع مباشر من رصيد المحفظة بدون أي رسوم صرف إضافية",
        item3: "تذاكر إلكترونية فورية وتنبيهات بحدود الأمتعة المسموحة"
      },
      faq: {
        title: "أسئلة شائعة حول حجز الطيران",
        q1: "كيف أستلم تذاكر الطيران بعد الحجز؟",
        a1: "يتم إرسال تذكرتك الإلكترونية ورمز الحجز فوراً إلى تطبيق جيتلي وإلى بريدك الإلكتروني المسجل.",
        q2: "هل يمكنني تعديل أو إلغاء رحلتي؟",
        a2: "نعم، يمكنك إدارة طلبات التعديل أو الإلغاء مباشرة من داخل التطبيق وفقاً لشروط شركة الطيران."
      }
    },
    hotels: {
      badge: "إقامات فندقية حول العالم",
      title: "خيارات إقامة مثالية تناسب كل وجهة.",
      subtitle: "احجز فنادق بوتيك، شقق فندقية ومنتجعات فاخرة في أكثر من 180 دولة مباشرة من محفظتك متعددة العملات.",
      cta: "احجز فندقك عبر التطبيق",
      features: {
        title: "حجز سلس بأسعار فورية شفافة",
        desc: "وداعاً لمفاجآت أسعار صرف العملات عند الدفع. احجز إقامتك بأسعار محلية واضحة وتأكيد فوري.",
        item1: "أكثر من مليون فندق وعقار موثق حول العالم",
        item2: "دفع مباشر من رصيد المحفظة بدون أي رسوم صرف إضافية",
        item3: "إلغاء مرن ودعم عملاء مخصص 24/7 داخل التطبيق"
      },
      visual: {
        tag: "إقامات مميزة",
        title: "تسجيل وصول سريع ومفاتيح رقمية",
        badge: "+180 دولة"
      },
      faq: {
        title: "أسئلة شائعة حول الفنادق",
        q1: "كيف أدفع ثمن حجوزات الفنادق على جيتلي؟",
        a1: "يمكنك الدفع فوراً باستخدام رصيد محفظة جيتلي أو بطاقتك الافتراضية بدون رسوم معاملات دولية.",
        q2: "هل الأسعار المعروضة نهائية بدون رسوم خفية؟",
        a2: "نعم، السعر الظاهر في التطبيق هو المبلغ النهائي المخصوم وشامل كافة الضرائب الإلزامية."
      }
    },
    insurance: {
      badge: "تأمين وحماية السفر العالمية",
      title: "حماية شاملة أينما تحط رحالك.",
      subtitle: "تغطية طبية طارئة، فقدان الأمتعة، تأخر الرحلات وحماية المغامرات بضغطة زر واحدة لسفر آمن وهادئ.",
      cta: "احصل على تأمين السفر",
      features: {
        title: "إصدار فوري للوثيقة وتقديم مطالبات إلكترونية",
        desc: "فعّل التأمين لرحلة واحدة أو لكامل العام. ارفع التقارير الطبية وفواتير التأخير في التطبيق لتسوية سريعة.",
        item1: "تغطية طبية وطوارئ المستشفيات تصل حتى 1,000,000 دولار عالمياً",
        item2: "تعويضات عن إلغاء الرحلات، انقطاع السفر وتأخر الأمتعة",
        item3: "خط مساعدة طوارئ متعدد اللغات متاح 24/7 أينما كنت"
      },
      visual: {
        tag: "شركات تأمين معتمدة",
        title: "حماية عالمية بتصنيف ممتاز",
        badge: "دعم 24/7"
      },
      faq: {
        title: "أسئلة شائعة حول التأمين",
        q1: "متى يجب علي تفعيل تأمين السفر؟",
        a1: "يمكنك تفعيله في أي وقت قبل المغادرة أو ضبطه ليبدأ تلقائياً فور إقلاع رحلتك.",
        q2: "كيف أقدم مطالبة تأمينية؟",
        a2: "بكل بساطة ارفع الفواتير أو التقارير الطبية في تطبيق جيتلي، ويقوم فريقنا بمراجعتها خلال 48 ساعة."
      }
    },
    visa: {
      badge: "استخراج التأشيرات رقمياً",
      title: "تأشيرات سريعة بدون أي تعقيدات.",
      subtitle: "تحقق من متطلبات الدخول، ارفع مستنداتك بأمان، وتابع طلبات التأشيرة مع خبراء هجرة معتمدين.",
      cta: "تحقق من شروط التأشيرة",
      features: {
        title: "فحص أهليّة ذكي وموافقات سريعة",
        desc: "اعرف المستندات المطلوبة بدقة قبل حجز الطيران. جيتلي يسهل تعبئة نماذج السفارات والتأشيرات الإلكترونية.",
        item1: "فحص شروط الدخول والتأشيرات الإلكترونية لأكثر من 120 دولة",
        item2: "خزينة مستندات رقمية آمنة مع مسح تلقائي للجواز",
        item3: "تتبع مباشر للطلب وإشعارات فورية بحالة السفارة"
      },
      visual: {
        tag: "الهجرة والسفر الدولي",
        title: "أكثر من 120 وجهة معتمدة",
        badge: "المسار السريع"
      },
      faq: {
        title: "أسئلة شائعة حول التأشيرات",
        q1: "كم يستغرق استخراج التأشيرة الإلكترونية؟",
        a1: "تعتمد المدة على الدولة، بدءاً من 24 ساعة للتأشيرات الإلكترونية الفورية وحتى المدد القياسية للسفارات.",
        q2: "هل بيانات جواز سفري ومستنداتي آمنة؟",
        a2: "جميع المستندات مشفرة بأعلى المعايير ولا تتم مشاركتها إلا مع الجهات الرسمية المعتمدة."
      }
    },
    "ai-trip-planner": {
      badge: "رفيق السفر الذكي جيتلي",
      title: "خطط رحلات مخصصة ونصائح سفر ذكية.",
      subtitle: "يساعدك ذكاء جيتلي في إدارة ميزانيتك اليومية واكتشاف الوجهات المحلية وإعداد حقيبة سفرك تلقائياً.",
      cta: "جرب المخطط الذكي في التطبيق",
      featuresTitle: "ذكاء استثنائي لتجارب سفرك",
      featuresDesc: "سواء كنت تقضي 3 أيام في طوكيو أو تنتقل للإقامة 6 أشهر في برلين، يقدم لك جيتلي نصائح الأمان والميزانية الملائمة.",
      item1: "جداول يومية مخصصة للرحلات يتم إعدادها في ثوانٍ",
      item2: "توزيع دقيق لميزانية الطعام والمواصلات والأنشطة بالعملة المحلية",
      item3: "تنبيهات ذكية لشحن باقات إنترنت eSIM وضبط أمان البطاقات"
    },
    coverage: {
      badge: "التغطية العالمية",
      title: "الدول والوجهات المدعومة",
      subtitle: "ابحث في أكثر من 180 وجهة للحصول على باقات إنترنت eSIM، وأرصدة المحفظة، والدفع بالبطاقات.",
      searchPlaceholder: "ابحث عن الدولة، المنطقة، أو رمز ISO..."
    },
    security: {
      badge: "الأمان وحماية الخصوصية",
      title: "حماية متكاملة لكل خطوة في رحلتك.",
      subtitle: "أموالك وبياناتك الشخصية محمية عبر تشفير متعدد الطبقات وبنية تحتية مرخصة وموثوقة.",
      card1Title: "حماية بالبصمة الحيوية",
      card1Desc: "التعرف على الوجه وبصمة الإصبع لتأكيد المعاملات وفتح التطبيق بأمان.",
      card2Title: "تحكم فوري بالبطاقات",
      card2Desc: "تجميد أو تفعيل البطاقات بلمسة واحدة من هاتفك.",
      card3Title: "تشفير شامل للبيانات",
      card3Desc: "تشفير تام لجميع الأرصدة والبيانات الشخصية وتفاصيل الرحلات."
    },
    about: {
      badge: "قصتنا",
      title: "صُمم خصيصاً للمسافر العصري.",
      subtitle: "تأسس جيتلي لإزالة الحواجز المالية ومشاكل الاتصال للمسافرين والمغتربين حول العالم.",
      quote: "\"نحول الأماكن الجديدة إلى تجارب لا تُنسى.\"",
      whyTitle: "لماذا أطلقنا جيتلي",
      whyP1: "السفر الدولي أو العمل عن بُعد لا ينبغي أن يتطلب استخدام خمسة تطبيقات مختلفة لتبديل العملات، وشراء شرائح الاتصال، وحجز الطيران.",
      whyP2: "يجمع جيتلي كل أدوات السفر الأساسية في تجربة واحدة: محفظة متعددة العملات، بطاقات افتراضية، إنترنت eSIM في أكثر من 180 دولة، وحجوزات طيران مباشرة."
    },
    faq: {
      badge: "الأسئلة والأجوبة",
      title: "مركز المساعدة والأسئلة الشائعة",
      subtitle: "إجابات سريعة وواضحة حول شحن المحفظة، استخدام البطاقات، تفعيل eSIM، وحجوزات الفنادق والطيران."
    },
    blog: {
      badge: "المدونة والأخبار",
      title: "قصص السفر وآخر التحديثات",
      subtitle: "أدلة ونصائح وأخبار حصرية للمسافرين العصريين والرحالة الرقميين.",
      readStory: "اقرأ المقال"
    },
    press: {
      badge: "المركز الصحفي",
      title: "جيتلي في الأخبار",
      subtitle: "البيانات الصحفية، الهوية الإعلامية، والتغطيات الإخبارية.",
      cardTitle: "استفسارات وسائل الإعلام",
      cardDesc: "للاستفسارات الصحفية أو طلبات المقابلات مع فريق جيتلي، تواصل معنا عبر press@getly.app.",
      cardCta: "تواصل مع الفريق الصحفي"
    },
    legal: {
      badge: "الامتثال القانوني والتنظيمي",
      lastUpdated: "آخر تحديث: سبتمبر 2026",
      privacy: {
        title: "سياسة الخصوصية",
        description: "كيف يقوم جيتلي بجمع بياناتك الشخصية ومعلومات سفرك واستخدامها وحمايتها.",
        section1Title: "1. المعلومات التي نجمعها",
        section1Desc: "يجمع جيتلي البيانات الشخصية الضرورية لتقديم خدمات السفر، وإدارة المحفظة، وتفعيل شرائح eSIM، وحجوزات الفنادق والطيران.",
        section2Title: "2. كيف نستخدم معلوماتك",
        section2Desc: "تُعالج معلوماتك حصرياً لتشغيل تطبيق جيتلي، والتحقق من الهوية، وتفعيل باقات الإنترنت، ومعالجة المدفوعات ومنع الاحتيال.",
        section3Title: "3. أمان البيانات وحفظها",
        section3Desc: "نطبق أعلى معايير التشفير متعدد الطبقات والمصادقة الحيوية وضوابط الوصول المشددة لضمان سرية وأمان بياناتك."
      },
      terms: {
        title: "شروط الخدمة",
        description: "الشروط العامة للاستخدام واتفاقية المستخدم الخاصة بتطبيق ومنصة جيتلي.",
        section1Title: "1. قبول الشروط",
        section1Desc: "يُعد تنزيل تطبيق جيتلي أو استخدامه موافقة صريحة على الالتزام بكافة بنود هذه الشروط.",
        section2Title: "2. الخدمات المقدمة",
        section2Desc: "يوفر جيتلي محفظة متعددة العملات، وبطاقات افتراضية، وإنترنت eSIM عالمي، وحجوزات طيران وفنادق، وتأمين وتأشيرات سفر بالشراكة مع جهات مرخصة.",
        section3Title: "3. مسؤوليات المستخدم",
        section3Desc: "يتعهد المستخدم بتقديم بيانات هوية صحيحة، وحماية بيانات تسجيل الدخول، واستخدام الخدمات وفقاً للأنظمة والقوانين المعمول بها."
      },
      cookie: {
        title: "سياسة ملفات تعريف الارتباط",
        description: "كيف يستخدم جيتلي ملفات تعريف الارتباط والذاكرة المؤقتة لتحسين تجربة التصفح.",
        section1Title: "1. ما هي ملفات تعريف الارتباط",
        section1Desc: "هي ملفات بيانات صغيرة تُحفظ على جهازك لتذكر تفضيلاتك وتأمين جلسات الاستخدام الخاصة بك.",
        section2Title: "2. استخدام ملفات تعريف الارتباط",
        section2Desc: "يستخدم جيتلي ملفات ضرورية للأمان، وملفات وظيفية لحفظ تفضيلات اللغة والعملة، وملفات تحليلية لقياس أداء المنصة.",
        section3Title: "3. إدارة التفضيلات",
        section3Desc: "يمكنك في أي وقت تعديل أو تعطيل ملفات تعريف الارتباط غير الأساسية من خلال إعدادات المتصفح أو لوحة التحكم بالموقع."
      },
      aml: {
        title: "سياسة مكافحة غسل الأموال (AML)",
        description: "معايير جيتلي لمكافحة غسل الأموال وتمويل الإرهاب والتحقق من هوية العملاء (KYC).",
        section1Title: "1. الإطار التنظيمي",
        section1Desc: "يلتزم جيتلي بإجراءات صارمة لمكافحة غسل الأموال وتمويل الإرهاب بما يتوافق مع توصيات مجموعة العمل المالي الدولية (FATF).",
        section2Title: "2. التحقق من الهوية (KYC)",
        section2Desc: "يخضع جميع العملاء لإجراءات العناية الواجبة (CDD) والتحقق من الوثائق الرسمية قبل إتاحة الحدود المالية المرتفعة أو إصدار البطاقات.",
        section3Title: "3. مراقبة المعاملات وقوائم العقوبات",
        section3Desc: "تقوم أنظمة مراقبة آلية بفحص المعاملات لحظياً ومقارنتها بقوائم العقوبات الدولية لمنع الأنشطة المالية غير المشروعة."
      },
      complaints: {
        title: "سياسة الشكاوى وفض النزاعات",
        description: "إجراءات استقبال شكاوى العملاء وحلها بطريقة عادلة وشفافة.",
        section1Title: "1. التزامنا تجاه العملاء",
        section1Desc: "نحرص على تقديم أعلى مستويات الخدمة. فريق الدعم المخصص لدينا متاح على مدار الساعة للمساعدة وحل أي استفسار.",
        section2Title: "2. كيفية تقديم شكوى",
        section2Desc: "يمكنك تقديم شكوى رسمية عبر مركز المساعدة في التطبيق أو عبر البريد الإلكتروني complaints@getly.app.",
        section3Title: "3. مواعيد الرد والمعالجة",
        section3Desc: "نؤكد استلام الشكوى خلال 24 ساعة، ونسعى للوصول إلى حل نهائي خلال 15 يوم عمل كحد أقصى."
      }
    }
  }
};

const enFiles = fs.readdirSync(EN_DIR).filter((f) => f.endsWith(".json"));

LOCALES.forEach((locale) => {
  const targetDir = path.join(MESSAGES_DIR, locale);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  enFiles.forEach((file) => {
    const namespace = file.replace(".json", "");
    const enContent = JSON.parse(fs.readFileSync(path.join(EN_DIR, file), "utf-8"));
    const localizedNamespace = translations[locale]?.[namespace] || {};

    // Deep merge localized keys over English base
    function deepMerge(target: any, source: any): any {
      if (!source) return target;
      const output = { ...target };
      for (const key of Object.keys(source)) {
        if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
          output[key] = deepMerge(target[key] || {}, source[key]);
        } else if (source[key] !== undefined) {
          output[key] = source[key];
        }
      }
      return output;
    }

    const merged = deepMerge(enContent, localizedNamespace);
    fs.writeFileSync(path.join(targetDir, file), JSON.stringify(merged, null, 2), "utf-8");
  });
  console.log(`✅ Generated message files for locale: ${locale}`);
});

console.log("All locale files generated successfully.");
