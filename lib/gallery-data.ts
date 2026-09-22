export interface GalleryItem {
  src: string;
  alt: string;
}

// Eigene Baustellenbilder, bewusst ohne Überschneidung mit den Referenzen: das
// breiteste Motiv als große Kachel, danach Mauerbau, Materialdetail und Flächen.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/acquisition/baustellen/baustelle-mit-haus-und-pflasterung-01.jpg",
    alt: "Baustelle rund um ein Wohnhaus: frisch verlegtes graues Pflaster, Schubkarre, Aushub und gestapelte Natursteinblöcke"
  },
  {
    src: "/assets/acquisition/baustellen/natursteinmauer-und-gartenweg-im-bau-01.jpg",
    alt: "Mehrstufige Stützmauer aus Natursteinblöcken am Hang, daneben ein Weg im Bau auf dem Splittbett"
  },
  {
    src: "/assets/acquisition/details/gartenweg-mit-trittplatten-und-kies-02.jpg",
    alt: "Gartenweg aus hellen Trittplatten in dunklem Zierkies, eingefasst von Kleinsteinpflaster und großformatigen Platten"
  },
  {
    src: "/assets/acquisition/baustellen/gartenweg-mit-rautenmuster-01.jpg",
    alt: "Anthrazitfarbene Pflasterfläche mit Rautenrelief neben Rasen und Sichtschutzzaun"
  },
  {
    src: "/assets/acquisition/baustellen/stutzmauer-aus-pflanzringen-01.jpg",
    alt: "Abgetreppte Stützmauer aus Pflanzringen entlang einer Böschung neben einem Kiesweg"
  }
];
