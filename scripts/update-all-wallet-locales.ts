import fs from "fs";
import path from "path";

const MESSAGES_DIR = path.join(__dirname, "../shared/i18n/messages");

const walletTranslations: Record<string, any> = {
  // SPANISH
  es: {
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

  // FRENCH
  fr: {
    badge: "Portefeuille de Voyage en USD",
    title: "Alimentez en monnaie locale. Dépensez en USD partout.",
    subtitle: "Dites adieu aux cartes rejetées à l'étranger et aux plafonds bancaires restrictifs. Rechargez votre portefeuille Getly USD avec votre carte Visa ou Mastercard locale.",
    cta: "Obtenir l'App & Recharger",
    hero: {
      cardBadge: "Recharge Instantanée par Carte",
      cardTitle: "Carte Locale vers Portefeuille USD",
      cardSubtitle: "Autorisation 3D-Secure Immédiate",
      payWith: "Paiement en monnaie locale",
      receivedUSD: "Crédité sur Portefeuille USD",
      rateLabel: "Taux garanti en direct",
      status: "Solde Disponible"
    },
    calculator: {
      badge: "Simulateur de Recharge en Temps Réel",
      title: "Voyez exactement ce que vous payez en monnaie locale",
      subtitle: "Aucune marge de change masquée ni frais imprévus. Ce que vous voyez est crédité à 100 % sur votre solde USD.",
      youPay: "Vous Payez (Carte Locale)",
      youReceive: "Vous Recevez (Portefeuille USD)",
      exchangeRate: "Taux de Change",
      fundingFee: "Traitement par Carte",
      fundingFeeValue: "Transparent & Immédiat",
      instantSettle: "Crédit Immédiat",
      instantSettleValue: "En moins de 5 secondes",
      cta: "Recharger ce montant"
    },
    howItWorks: {
      badge: "Processus en 3 Étapes",
      title: "Comment recharger votre portefeuille USD Getly",
      subtitle: "Commencez à payer dans le monde entier en moins de 2 minutes depuis votre mobile.",
      step1Num: "01",
      step1Eyebrow: "Sélectionnez la Devise",
      step1Title: "Choisissez votre devise locale et le montant",
      step1Desc: "Sélectionnez votre monnaie nationale (NGN, GHS, KES, ZAR, EUR, GBP, CAD, etc.) et indiquez le montant en USD souhaité.",
      step2Num: "02",
      step2Eyebrow: "Paiement Immédiat",
      step2Title: "Réglez avec toute carte Visa ou Mastercard",
      step2Desc: "Utilisez votre carte bancaire habituelle et confirmez via l'authentification sécurisée 3D-Secure.",
      step3Num: "03",
      step3Eyebrow: "Voyagez Sans Limites",
      step3Title: "Votre solde USD est prêt pour voyager",
      step3Desc: "Vos fonds sont disponibles immédiatement pour émettre des cartes virtuelles, réserver vols et hôtels, ou activer une eSIM."
    },
    benefits: {
      badge: "Pourquoi Choisir Getly USD",
      title: "Conçu pour surmonter tous les obstacles de paiement en voyage",
      subtitle: "Les cartes bancaires traditionnelles échouent à l'étranger. Getly vous offre une liberté financière totale.",
      card1Title: "Zéro Rejet de Carte à l'International",
      card1Desc: "Ne soyez plus jamais bloqué lors de réservations de vols, hôtels ou plateformes de voyage mondiales.",
      card2Title: "Dépassez les Plafonds des Banques Locales",
      card2Desc: "Libérez-vous des limites mensuelles strictes de dépenses en devises imposées par les banques traditionnelles.",
      card3Title: "Alimentez Tout l'Écosystème Getly",
      card3Desc: "Un solde USD unique pour vos cartes virtuelles, billets d'avion, nuits d'hôtel, forfaits eSIM et assurances.",
      card4Title: "Taux de Change Transparents",
      card4Desc: "Bénéficiez de taux interbancaires clairs et compétitifs affichés avant confirmation, sans frais cachés."
    },
    security: {
      badge: "Sécurité & Protection",
      title: "Vos fonds et cartes protégés à chaque étape",
      subtitle: "Nous travaillons avec des établissements financiers agréés et des passerelles certifiées.",
      item1Title: "Conformité PCI-DSS Niveau 1",
      item1Desc: "Toutes les autorisations de cartes respectent les normes les plus élevées de l'industrie financière.",
      item2Title: "Vérification Biométrique 3D Secure 2.0",
      item2Desc: "Chaque rechargement nécessite une validation par mot de passe unique ou biométrie auprès de votre banque.",
      item3Title: "Comptes Ségrégués de Protection",
      item3Desc: "Vos soldes USD sont cantonnés auprès d'institutions bancaires de premier plan réglementées."
    },
    faq: {
      badge: "Questions Fréquentes",
      title: "FAQ sur le Portefeuille USD",
      subtitle: "Tout savoir sur la recharge par carte locale et les dépenses mondiales.",
      q1: "Puis-je recharger mon portefeuille USD avec n'importe quelle carte Visa ou Mastercard ?",
      a1: "Oui ! Vous pouvez utiliser toute carte de débit ou de crédit délivrée dans votre pays. Votre banque débite votre monnaie locale et Getly crédite instantanément des USD.",
      q2: "En combien de temps le solde USD est-il disponible ?",
      a2: "La recharge est instantanée. Dès validation 3D Secure, votre solde USD est mis à jour en quelques secondes.",
      q3: "Que puis-je payer avec mon solde USD Getly ?",
      a3: "Votre solde USD s'utilise directement pour créer des cartes virtuelles de voyage, réserver des vols et hôtels, acheter des eSIMs et souscrire des assurances.",
      q4: "Y a-t-il des plafonds de rechargement ?",
      a4: "Les plafonds dépendent de votre niveau de vérification. La vérification numérique standard offre des montants adaptés aux voyageurs fréquents.",
      q5: "Puis-je retirer mes fonds si mes projets changent ?",
      a5: "Oui, Getly propose des options flexibles de retrait vers vos canaux bancaires connectés dès que vous le souhaitez."
    }
  },

  // GERMAN
  de: {
    badge: "USD Reise-Wallet",
    title: "In lokaler Währung aufladen. Weltweit in USD zahlen.",
    subtitle: "Schluss mit abgelehnten Karten im Ausland und restriktiven Banklimits. Laden Sie Ihr Getly USD-Wallet sofort mit Ihrer lokalen Visa oder Mastercard auf.",
    cta: "App holen & Guthaben aufladen",
    hero: {
      cardBadge: "Sofortige Kartenaufladung",
      cardTitle: "Lokale Karte zu USD Wallet",
      cardSubtitle: "Sofortige 3D-Secure Autorisierung",
      payWith: "Zahlung mit lokaler Karte",
      receivedUSD: "Gutschrift im USD Wallet",
      rateLabel: "Garantierter Live-Wechselkurs",
      status: "Verfügbares Guthaben"
    },
    calculator: {
      badge: "Echtzeit-Aufladerechner",
      title: "Sehen Sie genau, was Sie in Landeswährung zahlen",
      subtitle: "Keine versteckten Wechselkursaufschläge. Keine Überraschungen. Was Sie sehen, landet auf Ihrem USD-Konto.",
      youPay: "Sie zahlen (Lokale Karte)",
      youReceive: "Sie erhalten (USD Wallet)",
      exchangeRate: "Wechselkurs",
      fundingFee: "Kartenverarbeitung",
      fundingFeeValue: "Transparent & Sofort",
      instantSettle: "Sofortige Gutschrift",
      instantSettleValue: "Unter 5 Sekunden",
      cta: "Diesen Betrag jetzt aufladen"
    },
    howItWorks: {
      badge: "Einfacher 3-Schritte-Prozess",
      title: "So laden Sie Ihr Getly USD-Wallet auf",
      subtitle: "In weniger als 2 Minuten weltweit zahlungsfähig direkt von Ihrem Smartphone.",
      step1Num: "01",
      step1Eyebrow: "Währung wählen",
      step1Title: "Landeswährung & Betrag auswählen",
      step1Desc: "Wählen Sie Ihre Heimatwährung (NGN, GHS, KES, ZAR, EUR, GBP, CAD usw.) und geben Sie den gewünschten USD-Betrag ein.",
      step2Num: "02",
      step2Eyebrow: "Sofortige Zahlung",
      step2Title: "Mit Visa oder Mastercard zahlen",
      step2Desc: "Verwenden Sie Ihre reguläre Debit- oder Kreditkarte und bestätigen Sie die Transaktion per 3D-Secure.",
      step3Num: "03",
      step3Eyebrow: "Grenzenlos reisen",
      step3Title: "USD-Guthaben sofort einsatzbereit",
      step3Desc: "Ihr USD-Konto ist sofort aufgeladen für virtuelle Karten, Flug- und Hotelbuchungen sowie eSIM-Tarife."
    },
    benefits: {
      badge: "Vorteile des Getly USD-Wallets",
      title: "Entwickelt, um alle Reise-Zahlungshürden zu beseitigen",
      subtitle: "Herkömmliche Bankkarten versagen oft im Ausland. Getly gibt Ihnen weltweite finanzielle Freiheit.",
      card1Title: "Keine abgelehnten Karten im Ausland",
      card1Desc: "Nie wieder Probleme bei internationalen Buchungsportalen, Fluggesellschaften oder Hotels.",
      card2Title: "Keine restriktiven Devisenlimits",
      card2Desc: "Befreien Sie sich von den engen monatlichen Fremdwährungslimits traditioneller Banken.",
      card3Title: "Das gesamte Getly-Reiseset nutzen",
      card3Desc: "Ein USD-Guthaben für virtuelle Karten, Flüge, Hotels, globale eSIM-Daten und Reiseschutz.",
      card4Title: "Transparente Live-Wechselkurse",
      card4Desc: "Faire Interbanken-Kurse vor Zahlungsbestätigung transparent ausgewiesen, ohne versteckte Bankgebühren."
    },
    security: {
      badge: "Institutionelle Sicherheit",
      title: "Ihr Guthaben und Ihre Karten, geschützt auf jedem Schritt",
      subtitle: "Zusammenarbeit mit regulierten Finanzinstituten und zertifizierten Zahlungspartnern.",
      item1Title: "PCI-DSS Level 1 Zertifizierung",
      item1Desc: "Alle Kartenautorisierungen entsprechen den höchsten internationalen Sicherheitsstandards der Zahlungsbranche.",
      item2Title: "3D Secure 2.0 Biometrische Verifizierung",
      item2Desc: "Jede Aufladung erfordert eine sichere 2-Faktor-Freigabe über Ihre kartenausgebende Bank.",
      item3Title: "Getrennte Kundengelder",
      item3Desc: "Ihre USD-Guthaben werden treuhänderisch bei regulierten Tier-1-Partnerinstituten verwahrt."
    },
    faq: {
      badge: "Häufig gestellte Fragen",
      title: "FAQ zum USD-Wallet",
      subtitle: "Alles Wissenswerte über lokale Kartenaufladung und weltweite Ausgaben.",
      q1: "Kann ich mein USD-Wallet mit jeder lokalen Visa oder Mastercard aufladen?",
      a1: "Ja! Sie können jede reguläre in Ihrem Land ausgegebene Debit- oder Kreditkarte nutzen. Ihre Bank rechnet in Landeswährung ab und Getly bucht sofort USD ein.",
      q2: "Wie schnell ist das USD-Guthaben verfügbar?",
      a2: "In Echtzeit. Direkt nach Bestätigung via 3D Secure steht das USD-Guthaben binnen Sekunden bereit.",
      q3: "Wofür kann ich mein USD-Guthaben verwenden?",
      a3: "Für virtuelle Reisekarten, weltweite Flug- und Hotelbuchungen, eSIM-Datenpakete und Reiseversicherungen.",
      q4: "Gibt es Aufladelimits?",
      a4: "Limits richten sich nach Ihrer Verifizierungsstufe. Die digitale Standardverifizierung bietet großzügige Reise-Limits.",
      q5: "Kann ich Guthaben auszahlen lassen?",
      a5: "Ja, Getly bietet flexible Auszahlungsoptionen auf verbundene Konten an, wann immer Sie möchten."
    }
  },

  // PORTUGUESE (Ensure ZERO forbidden words: no 'transfer', 'transferências', 'enviar')
  pt: {
    badge: "Carteira de Viagem em USD",
    title: "Carregue em moeda local. Pague em USD no mundo todo.",
    subtitle: "Diga adeus a cartões recusados no exterior e limites bancários restritivos. Carregue sua carteira Getly USD na hora com seu cartão Visa ou Mastercard local.",
    cta: "Baixar App e Carregar Saldo",
    hero: {
      cardBadge: "Carregamento Imediato com Cartão",
      cardTitle: "Cartão Local para Carteira USD",
      cardSubtitle: "Autorização 3D-Secure Instantânea",
      payWith: "Pague com cartão local",
      receivedUSD: "Creditado na Carteira USD",
      rateLabel: "Cotação em tempo real garantida",
      status: "Saldo Disponível"
    },
    calculator: {
      badge: "Simulador de Carga em Tempo Real",
      title: "Veja exatamente o valor a pagar na sua moeda",
      subtitle: "Sem margens cambiais ocultas nem cobranças inesperadas. O valor exibido é exatamente o que entra no seu saldo em USD.",
      youPay: "Você Paga (Cartão Local)",
      youReceive: "Você Recebe (Carteira USD)",
      exchangeRate: "Taxa de Câmbio",
      fundingFee: "Processamento de Cartão",
      fundingFeeValue: "Transparente e Imediato",
      instantSettle: "Crédito Imediato",
      instantSettleValue: "Em menos de 5 segundos",
      cta: "Carregar este valor agora"
    },
    howItWorks: {
      badge: "Processo em 3 Etapas",
      title: "Como carregar sua carteira Getly USD",
      subtitle: "Comece a pagar internacionalmente em menos de 2 minutos pelo seu celular.",
      step1Num: "01",
      step1Eyebrow: "Escolha a Moeda",
      step1Title: "Selecione a moeda local e a quantia",
      step1Desc: "Escolha sua divisa nacional (NGN, GHS, KES, ZAR, EUR, GBP, CAD, BRL etc.) e defina quanto deseja carregar em USD.",
      step2Num: "02",
      step2Eyebrow: "Pagamento Imediato",
      step2Title: "Pague com qualquer Visa ou Mastercard",
      step2Desc: "Use seu cartão de débito ou crédito habitual e confirme com a verificação de segurança 3D-Secure.",
      step3Num: "03",
      step3Eyebrow: "Viaje Sem Fronteiras",
      step3Title: "Saldo USD pronto para o mundo",
      step3Desc: "Seu saldo em USD fica disponível na hora para emitir cartões virtuais, reservar voos, hotéis e ativar eSIMs."
    },
    benefits: {
      badge: "Vantagens da Carteira USD Getly",
      title: "Criada para superar todos os obstáculos de pagamento no exterior",
      subtitle: "Cartões bancários tradicionais falham em viagens. Getly entrega total liberdade e aceitação global.",
      card1Title: "Zero Cartões Recusados no Exterior",
      card1Desc: "Evite bloqueios em compras internacionais, companhias aéreas ou plataformas de hospedagem mundiais.",
      card2Title: "Livre-se dos Limites dos Bancos Locais",
      card2Desc: "Supere os tetos mensais restritivos de compras em moeda estrangeira dos bancos tradicionais.",
      card3Title: "Abasteça Todo o Ecossistema Getly",
      card3Desc: "Um único saldo em USD para cartões virtuais, passagens aéreas, hotéis, internet eSIM e seguro viagem.",
      card4Title: "Cotações Claras em Tempo Real",
      card4Desc: "Tarifas interbancárias justas exibidas antes da confirmação, sem cobranças surpresa na fatura."
    },
    security: {
      badge: "Proteção Institucional",
      title: "Seus fundos e cartões protegidos em cada etapa",
      subtitle: "Operamos em parceria com instituições financeiras regulamentadas e gateways de pagamento certificados.",
      item1Title: "Certificação PCI-DSS Nível 1",
      item1Desc: "Todas as autorizações de cartões seguem os mais altos padrões mundiais de segurança da indústria de pagamentos.",
      item2Title: "Verificação Biométrica 3D Secure 2.0",
      item2Desc: "Cada carregamento exige autenticação em duas etapas junto ao seu banco emissor.",
      item3Title: "Fundos de Clientes Segregados",
      item3Desc: "Seus saldos em USD ficam custodiados em contas protegidas junto a parceiros bancários regulados."
    },
    faq: {
      badge: "Perguntas Frequentes",
      title: "Dúvidas Frequentes sobre a Carteira USD",
      subtitle: "Tudo o que você precisa saber sobre recarga com cartão local e pagamentos globais.",
      q1: "Posso carregar minha carteira USD com qualquer Visa ou Mastercard local?",
      a1: "Sim! Você pode usar qualquer cartão de débito ou crédito emitido no seu país. O banco cobra em moeda local e a Getly credita em USD imediatamente.",
      q2: "Em quanto tempo o saldo em USD fica disponível?",
      a2: "O crédito é instantâneo. Assim que a autenticação 3D Secure for concluída, seus fundos entram em poucos segundos.",
      q3: "Onde posso gastar meu saldo em USD da Getly?",
      a3: "Você pode usar seu saldo para criar cartões virtuais de viagem, reservar voos e hotéis, comprar pacotes de eSIM e contratar seguro viagem.",
      q4: "Existem limites de carregamento?",
      a4: "Os limites variam conforme o nível de verificação. A verificação digital padrão já oferece limites amplos para viajantes.",
      q5: "Posso retirar fundos se meus planos mudarem?",
      a5: "Sim, a Getly disponibiliza opções flexíveis de resgate para suas contas cadastradas a qualquer momento."
    }
  },

  // CHINESE
  zh: {
    badge: "USD 全球旅行钱包",
    title: "使用本地货币充值，全球畅享美元消费。",
    subtitle: "告别海外卡片被拒和外汇限额困扰。直接使用您本地的 Visa 或 Mastercard 为 Getly 美元钱包即时充值。",
    cta: "下载 App 并充值",
    hero: {
      cardBadge: "即时卡片充值",
      cardTitle: "本地银行卡直充美元钱包",
      cardSubtitle: "3D-Secure 安全极速验证",
      payWith: "本地卡支付",
      receivedUSD: "已入账美元钱包",
      rateLabel: "实时保证汇率",
      status: "可用余额"
    },
    calculator: {
      badge: "实时充值计算器",
      title: "精准预览本地货币支付金额",
      subtitle: "无任何隐形加价与额外手续费。屏幕所见即实际入账美元金额。",
      youPay: "您支付 (本地卡)",
      youReceive: "您获得 (美元钱包)",
      exchangeRate: "兑换汇率",
      fundingFee: "卡片处理费",
      fundingFeeValue: "透明即时",
      instantSettle: "到账速度",
      instantSettleValue: "5秒内极速入账",
      cta: "立即充值此金额"
    },
    howItWorks: {
      badge: "简单 3 步",
      title: "如何充值 Getly 美元钱包",
      subtitle: "2 分钟内轻松开通全球消费支持。",
      step1Num: "01",
      step1Eyebrow: "选择币种",
      step1Title: "选择本地币种与充值金额",
      step1Desc: "挑选您的本国货币（NGN、GHS、KES、ZAR、EUR、GBP、CAD 等）并输入所需美元金额。",
      step2Num: "02",
      step2Eyebrow: "即时支付",
      step2Title: "使用任意 Visa 或 Mastercard 支付",
      step2Desc: "输入常用借记卡或信用卡，通过 3D-Secure 双重认证快速确认。",
      step3Num: "03",
      step3Eyebrow: "全球畅游",
      step3Title: "美元余额即刻就绪",
      step3Desc: "充值实时到账，可立即用于生成虚拟卡、预订机票、酒店及激活全球 eSIM。"
    },
    benefits: {
      badge: "为何选择 Getly 美元钱包",
      title: "专为解决出境旅行支付痛点而打造",
      subtitle: "传统银行卡在境外经常受限，Getly 让您的跨国支付畅通无阻。",
      card1Title: "零境外拒卡困扰",
      card1Desc: "在境外航司、酒店预订及线上商城畅行无阻，彻底告别支付失败。",
      card2Title: "突破本地银行外汇限额",
      card2Desc: "摆脱传统银行严格的每月境外外汇消费额度限制。",
      card3Title: "驱动整个 Getly 旅行套件",
      card3Desc: "一份美元余额，全面支持虚拟旅行卡、机票预订、酒店住宿、eSIM 上网与旅行保险。",
      card4Title: "透明实时汇率",
      card4Desc: "在确认前清晰查看有竞争力的银行间汇率，账单绝无意外杂费。"
    },
    security: {
      badge: "机构级资产守护",
      title: "资金与卡片全程受到严格保护",
      subtitle: "与受监管金融机构及持牌支付通道合作，确保合规与资产安全。",
      item1Title: "PCI-DSS Level 1 认证",
      item1Desc: "所有银行卡交易均符合全球最高等级的支付安全标准。",
      item2Title: "3D Secure 2.0 生物识别验证",
      item2Desc: "每笔本地卡充值均需发卡行动态验证码或面容/指纹授权。",
      item3Title: "独立隔离托管账户",
      item3Desc: "用户美元资产由一级持牌监管金融机构严格隔离保管。"
    },
    faq: {
      badge: "常见问题",
      title: "美元钱包常见疑问解答",
      subtitle: "关于本地卡充值与全球消费的详细说明。",
      q1: "我可以使用本地发行的 Visa 或 Mastercard 充值吗？",
      a1: "完全可以！任何在您所在国家发行的标准借记卡或信用卡均可使用。发卡行扣除本地货币，Getly 实时结算入账美元。",
      q2: "美元余额多久能到账？",
      a2: "即时到账。完成 3D Secure 验证后，资金通常在数秒内即可显示在您的账户中。",
      q3: "美元余额可以用来做什么？",
      a3: "可用于生成和充值虚拟旅行卡、预订国际航班与酒店、购买全球 eSIM 流量套餐及开通旅行保险。",
      q4: "是否有充值额度限制？",
      a4: "额度取决于您的身份认证等级。标准数字认证即可满足大多数高频旅行者的日常额度需求。",
      q5: "如果旅行计划变更，我可以取出余额吗？",
      a5: "可以，Getly 提供灵活的提款通道，支持随时提现至您的关联收款账户。"
    }
  },

  // JAPANESE
  ja: {
    badge: "USD トラベルウォレット",
    title: "自国通貨でチャージ。世界中でUSD決済。",
    subtitle: "海外でのカード決済拒否や為替制限に悩まされることはもうありません。お持ちのVisaやMastercardでGetly USDウォレットに即座にチャージできます。",
    cta: "アプリをダウンロードしてチャージ",
    hero: {
      cardBadge: "即時カードチャージ",
      cardTitle: "国内カードからUSDウォレットへ",
      cardSubtitle: "3Dセキュア即時認証",
      payWith: "国内カードでお支払い",
      receivedUSD: "USDウォレットに入金",
      rateLabel: "保証されたリアルタイム為替レート",
      status: "利用可能残高"
    },
    calculator: {
      badge: "リアルタイム試算ツール",
      title: "自国通貨での正確な支払額を確認",
      subtitle: "隠れた為替手数料や予期しない請求は一切ありません。画面に表示された金額がそのままUSD残高に入金されます。",
      youPay: "お支払い額 (国内カード)",
      youReceive: "受取額 (USDウォレット)",
      exchangeRate: "適用為替レート",
      fundingFee: "カード処理手数料",
      fundingFeeValue: "透明・即時",
      instantSettle: "着金速度",
      instantSettleValue: "5秒以内に即時反映",
      cta: "この金額を今すぐチャージ"
    },
    howItWorks: {
      badge: "かんたん3ステップ",
      title: "Getly USDウォレットのチャージ手順",
      subtitle: "スマートフォンからわずか2分で世界中での決済が可能になります。",
      step1Num: "01",
      step1Eyebrow: "通貨の選択",
      step1Title: "自国通貨と希望金額を選択",
      step1Desc: "お使いの国内通貨（NGN、GHS、KES、ZAR、EUR、GBP、CADなど）を選択し、チャージしたいUSD金額を入力します。",
      step2Num: "02",
      step2Eyebrow: "即時決済",
      step2Title: "VisaまたはMastercardでお支払い",
      step2Desc: "普段お使いのデビットカードまたはクレジットカードを入力し、3Dセキュア認証で承認します。",
      step3Num: "03",
      step3Eyebrow: "世界中で利用",
      step3Title: "USD残高が即座に利用可能",
      step3Desc: "チャージは即時に反映され、バーチャルカードの発行、航空券やホテルの予約、eSIMの購入にすぐ使えます。"
    },
    benefits: {
      badge: "Getly USDウォレットが選ばれる理由",
      title: "海外旅行中の決済トラブルをすべて解消",
      subtitle: "従来の銀行カードが使えない場面でも、Getlyなら世界中でストレスなく決済できます。",
      card1Title: "海外での決済拒否ゼロ",
      card1Desc: "海外の航空会社、ホテル予約サイト、現地の店舗でカードが拒否される心配がありません。",
      card2Title: "国内銀行の外貨利用上限を突破",
      card2Desc: "一般の銀行カードに課されている厳しい月間外貨利用限度額を回避できます。",
      card3Title: "Getlyのすべてのサービスを一元利用",
      card3Desc: "ひとつのUSD残高で、バーチャルカード、航空券、ホテル、eSIM、旅行保険をすべてカバー。",
      card4Title: "透明なリアルタイム為替レート",
      card4Desc: "支払い前に手数料のないインターバンクレートを明確に提示。後からの不透明な請求はありません。"
    },
    security: {
      badge: "最高水準のセキュリティ",
      title: "お客様の資金とカード情報を強固に保護",
      subtitle: "規制対象の金融機関および認定決済事業者と連携し、厳格なセキュリティを維持しています。",
      item1Title: "PCI-DSS レベル1 認証",
      item1Desc: "すべてのカード認証は、決済業界における最高水準の国際セキュリティ基準に準拠しています。",
      item2Title: "3Dセキュア 2.0 生体認証",
      item2Desc: "すべてのチャージにおいて、カード発行銀行によるワンタイムパスワードまたは生体認証を要求します。",
      item3Title: "分別管理された顧客資産",
      item3Desc: "お客様のUSD残高は、認可を受けた大手金融機関の専用保護口座にて厳重に保管されます。"
    },
    faq: {
      badge: "よくあるご質問",
      title: "USDウォレットに関するFAQ",
      subtitle: "国内カードによるチャージと海外利用に関するご案内。",
      q1: "国内で発行されたVisaやMastercardでチャージできますか？",
      a1: "はい、可能です。お客様の国で発行された標準的なカードをご利用いただけます。カード会社からは国内通貨で引き落とされ、Getlyウォレットには即時にUSDが入金されます。",
      q2: "チャージしたUSDはどのくらいで反映されますか？",
      a2: "即時です。3Dセキュア認証が完了すると、数秒以内にUSDウォレット残高に反映されます。",
      q3: "USD残高は何に使えますか？",
      a3: "バーチャルカードの発行・チャージ、航空券やホテルの予約、海外用eSIMデータパックの購入、旅行保険の加入に直接ご利用いただけます。",
      q4: "チャージ金額に上限はありますか？",
      a4: "アカウントの本人確認レベルに応じて設定されます。標準的なデジタル確認を完了するだけで、旅行に十分な上限枠をご利用いただけます。",
      q5: "予定が変更になった場合、残高を出金できますか？",
      a5: "はい、Getlyでは登録済みの出金チャネルへいつでも柔軟に資金を戻すことができます。"
    }
  },

  // ARABIC (RTL Compliant)
  ar: {
    badge: "محفظة السفر بالدولار الأمريكي",
    title: "اشحن بعملتك المحلية. وادفع بالدولار عالمياً.",
    subtitle: "وداعاً لرفض البطاقات المصرفية في الخارج وحدود الصرف المقيدة. اشحن محفظة جيتلي بالدولار فوراً باستخدام بطاقتك المحلية فيزا أو ماستركارد.",
    cta: "حمّل التطبيق واشحن المحفظة",
    hero: {
      cardBadge: "شحن فوري بالبطاقة",
      cardTitle: "من البطاقة المحلية إلى محفظة الدولار",
      cardSubtitle: "مصادقة فورية آمنة 3D-Secure",
      payWith: "الدفع بالبطاقة المحلية",
      receivedUSD: "المبلغ المضاف لمحفظة الدولار",
      rateLabel: "سعر صرف مباشر ومضمون",
      status: "الرصيد المتاح"
    },
    calculator: {
      badge: "حاسبة الشحن المباشرة",
      title: "اعرف المبلغ الدقيق بعملتك المحلية",
      subtitle: "لا هوامش صرف مخفية ولا رسوم مفاجئة. ما تراه على الشاشة هو المبلغ الذي يصل إلى محفظتك بالدولار.",
      youPay: "المبلغ المدفوع (البطاقة المحلية)",
      youReceive: "المبلغ المستلم (محفظة الدولار)",
      exchangeRate: "سعر الصرف",
      fundingFee: "معالجة البطاقة",
      fundingFeeValue: "شفاف وفوري",
      instantSettle: "سرعة الإيداع",
      instantSettleValue: "خلال أقل من 5 ثوانٍ",
      cta: "اشحن هذا المبلغ الآن"
    },
    howItWorks: {
      badge: "3 خطوات سهلة",
      title: "كيف تشحن محفظة جيتلي بالدولار الأمريكي",
      subtitle: "ابدأ الدفع حول العالم في أقل من دقيقتين مباشرة من هاتفك.",
      step1Num: "01",
      step1Eyebrow: "اختر العملة",
      step1Title: "حدد عملتك المحلية والمبلغ",
      step1Desc: "اختر عملتك الوطنية (الدرهم، الريال، اليورو، الجنيه، النيرة، وغيرها) وحدد المبلغ المطلوب بالدولار.",
      step2Num: "02",
      step2Eyebrow: "دفع فوري",
      step2Title: "ادفع بأي بطاقة فيزا أو ماستركارد",
      step2Desc: "استخدم بطاقتك البنكية المعتادة وقم بتأكيد الدفع بأمان عبر المصادقة الثنائية 3D-Secure.",
      step3Num: "03",
      step3Eyebrow: "سافر بحرية",
      step3Title: "رصيد الدولار جاهز للاستخدام الفوري",
      step3Desc: "يتم إيداع الرصيد في ثوانٍ لاستخدامه في إنشاء البطاقات الافتراضية وحجز الطيران والفنادق وباقات الشريحة الإلكترونية."
    },
    benefits: {
      badge: "لماذا محفظة جيتلي بالدولار",
      title: "مصممة لتجاوز كافة عقبات الدفع أثناء السفر",
      subtitle: "البطاقات المصرفية التقليدية تخذلك في الخارج. جيتلي تمنحك قبولاً عالمياً وحرية مالية مطلقة.",
      card1Title: "وداعاً لرفض البطاقات دولياً",
      card1Desc: "لن تواجه رفض الدفع في مواقع الطيران أو الفنادق أو المتاجر العالمية بعد اليوم.",
      card2Title: "تجاوز القيود المصرفية المحلية",
      card2Desc: "تخلص من القيود الشهرية المفروضة على المعاملات بالعملات الأجنبية في البنوك المحلية.",
      card3Title: "محرك لكافة خدمات جيتلي",
      card3Desc: "رصيد دولاري موحد يغذي بطاقاتك الافتراضية، وتذاكر الطيران، وحجوزات الفنادق، وبيانات eSIM وتأمين السفر.",
      card4Title: "أسعار صرف واضحة ومباشرة",
      card4Desc: "استمتع بأسعار صرف بين البنوك تنافسية ومعلنة مسبقاً دون رسوم خفية في كشف الحساب.",
    },
    security: {
      badge: "حماية مؤسسية متقدمة",
      title: "أموالك وبطاقاتك محمية في كل مرحلة",
      subtitle: "نتعاون مع مؤسسات مالية وبوابات دفع معتمدة وخاضعة لأعلى المعايير التنظيمية.",
      item1Title: "معالجة متوافقة مع PCI-DSS Level 1",
      item1Desc: "تلتزم جميع عمليات معالجة البطاقات بأعلى معايير أمان البيانات في صناعة المدفوعات.",
      item2Title: "تحقق بيومتري 3D Secure 2.0",
      item2Desc: "يتطلب كل شحن مصادقة آمنة برمز لمرة واحدة أو بالبصمة من البنك المصدر لبطاقتك.",
      item3Title: "حسابات أموال منفصلة ومحمية",
      item3Desc: "تُحفظ أرصدتك بالدولار في حسابات مصرفية مستقلة ومحمية لدى مؤسسات مالية مرخصة."
    },
    faq: {
      badge: "الأسئلة الشائعة",
      title: "الأسئلة الشائعة حول محفظة الدولار",
      subtitle: "كل ما تحتاج لمعرفته حول شحن البطاقات المحلية والإنفاق الدولي.",
      q1: "هل يمكنني شحن محفظتي بالدولار بأي بطاقة فيزا أو ماستركارد محلية؟",
      a1: "نعم بالتأكيد! يمكنك استخدام أي بطاقة دفع أو ائتمان صادرة في بلدك. يقوم بنكك بالخصم بالعملة المحلية، بينما تقوم جيتلي بإيداع المبلغ فوراً بالدولار.",
      q2: "ما مدى سرعة وصول الرصيد بالدولار؟",
      a2: "فوري تماماً. بمجرد إتمام المصادقة عبر 3D Secure، يظهر رصيدك بالدولار في غضون ثوانٍ.",
      q3: "فيمَ يمكنني استخدام رصيد محفظة الدولار؟",
      a3: "يمكنك استخدامه في إنشاء وشحن بطاقات السفر الافتراضية، وحجز تذاكر الطيران والفنادق، وشراء باقات eSIM، وتأمين السفر.",
      q4: "هل توجد حدود على مبالغ الشحن؟",
      a4: "تعتمد الحدود على مستوى التحقق من الحساب. يوفر التحقق الرقمي القياسي حدوداً ملائمة للمسافرين النشطين.",
      q5: "هل يمكنني سحب الأموال إذا تغيرت خططي؟",
      a5: "نعم، توفر جيتلي خيارات سحب مرنة تمكنك من إعادة الأموال إلى قنواتك المصرفية المتصلة متى شئت."
    }
  }
};

Object.entries(walletTranslations).forEach(([locale, data]) => {
  const targetPath = path.join(MESSAGES_DIR, locale, "wallet.json");
  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`✅ Written wallet.json for locale: ${locale}`);
});

console.log("All locale wallet.json files updated successfully.");
