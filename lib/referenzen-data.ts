export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

export const referenzen: Referenz[] = [
  {
    id: "vorgarten-mauer-bepflanzung",
    title: "Vorgarten mit Mauer und Bepflanzung",
    ort: "Sinsheim",
    leistung: "Gartenneugestaltung",
    text: "Der Vorgarten liegt höher als die Einfahrt. Statt einer Böschung fasst jetzt eine Mauer aus Natursteinblöcken das Beet ein, darüber liegen Rindenmulch, Formgehölze und ein Hausbaum. Die Stufen und der Plattenweg schließen direkt an die neue Pflasterfläche an.",
    afterImage: "/assets/acquisition/projekte/vorgarten-mit-bepflanzung-und-pflaster-01.jpg",
    alt: "Vorgarten mit Natursteinmauer, Rindenmulchbeet, Formgehölzen und angrenzender Pflasterfläche"
  },
  {
    id: "hofeinfahrt-betonstein",
    title: "Hofeinfahrt neu gepflastert",
    ort: "Sinsheim",
    leistung: "Pflasterarbeiten",
    text: "Die alte Zufahrt wurde abgetragen und der Unterbau neu aufgebaut. Verlegt ist ein sandfarbener Betonstein im Mehrformatverband, dazu kamen graue Randsteine und eine Rinne für das Gefälle. Das Baumbeet im Pflaster bleibt als Pflanzfläche erhalten.",
    afterImage: "/assets/acquisition/projekte/gepflasterte-auenanlage-01.jpg",
    alt: "Neu gepflasterte Hofeinfahrt aus sandfarbenem Betonstein mit rundem Beet und grauen Randsteinen"
  },
  {
    id: "stellflaeche-anthrazit",
    title: "Stellfläche mit Gabione und Zaun",
    ort: "Sinsheim",
    leistung: "Pflasterarbeiten",
    text: "Eine befestigte Fläche mitten im Rasen, gepflastert mit anthrazitfarbenem Kleinformat. Die Höhen fängt eine Reihe aufgestellter Betonelemente ab, daneben steht eine Gabione als Abschluss zum Nachbargrundstück.",
    afterImage: "/assets/acquisition/projekte/gepflasterte-flache-im-garten-01.jpg",
    alt: "Anthrazit gepflasterte Stellfläche im Rasen mit Betonelementen, Gabione und Doppelstabmattenzaun"
  },
  {
    id: "zaun-rasen-schuppen",
    title: "Zaun, Rasen und Schuppenfundament",
    ort: "Sinsheim",
    leistung: "Zaun & Sichtschutz",
    text: "Das Grundstück bekam auf beiden Seiten Doppelstabmatten mit Sichtschutzstreifen. Für den Geräteschuppen haben wir eine befestigte Fläche aus dunklem Pflaster angelegt, der Rest der Fläche wurde als Rasen hergerichtet.",
    afterImage: "/assets/acquisition/projekte/garten-mit-gerateschuppen-und-rasen-01.jpg",
    alt: "Garten mit Doppelstabmattenzaun, Sichtschutzstreifen, gepflasterter Schuppenfläche und frischem Rasen"
  },
  {
    id: "rasen-und-hecke",
    title: "Neuer Rasen und Heckenschnitt",
    ort: "Sinsheim",
    leistung: "Gartenpflege",
    text: "Die Fläche wurde abgezogen und neu mit Rollrasen belegt. Die bestehende Hecke haben wir auf eine gerade Linie zurückgeschnitten, damit sie die Grundstücksgrenze wieder klar abbildet.",
    afterImage: "/assets/acquisition/projekte/gartenanlage-mit-rasen-und-hecke-01.jpg",
    alt: "Frisch verlegter Rasen vor einer gerade geschnittenen hohen Hecke"
  }
];
