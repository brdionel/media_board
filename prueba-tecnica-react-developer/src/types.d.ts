interface PosterArt {
  url: string;
  width: number;
  height: number;
}

interface MainImage {
  url: string
}

export interface MediaEntries {
  title: string;
  description: string;
  programType: "series" | "movie"; // Solo acepta estos dos valores
  images: {
    "Poster Art": PosterArt; // La clave específica "Poster Art"
    main: MainImage
  };
  releaseYear: number;
}

export interface MediaData {
  total: number;
  entries: MediaEntries[];
}