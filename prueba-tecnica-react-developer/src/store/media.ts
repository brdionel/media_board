import { create } from 'zustand';
import { type MediaEntries } from '../types';
import { getAllMedia } from '../services/media';

interface State {
  isFetched: boolean;
  loading: boolean;
  error: Error | null;
  series: MediaEntries[];
  movies: MediaEntries[];
  drawer: string | null;
  mediaSelected: MediaEntries | null;
  filters: {
    releaseYear: number
  }
  fetchMedia: () => Promise<void>;
  selectMedia: (mediaSelected: MediaEntries, type: "series" | "movie" ) => void;
  toggleDrawer: (drawer:string | null) => void;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>, filterType: string) => void;
}

export const useMediaStore = create<State>((set, get) => ({
  loading: false,
  error: null,
  series: [],
  movies: [],
  isFetched: false,
  drawer: null,
  mediaSelected: null,
  filters: {
    releaseYear: 2010
  },
  fetchMedia: async () => {
    const { isFetched } = get();
    if (isFetched) return;

    set({ loading: true, error: null  });
    try {
      const response = await getAllMedia();
      const media = response.entries;
      const movies = media.filter((entry) => entry.programType === "movie");
      const series = media.filter((entry) => entry.programType === "series");
      set({ movies, series, isFetched: true });
    } catch (error: any) {
       // Manejamos errores específicos para mostrar un mensaje adecuado al usuario
      if (error instanceof SyntaxError) {
        set({ error: new Error('Failed to parse the response as JSON. Please check the server response.') });
      }
      set({ error: new Error(error.message || 'An error occurred while fetching media data') });
    } finally {
      set({ loading: false });
    }
  },
  toggleDrawer: (drawer:string|null) => set({ drawer }),
  selectMedia: (mediaSelected: MediaEntries, type: "series" | "movie" ) => {
    console.log("mediaSelected", mediaSelected)
    set({ drawer: type, mediaSelected})
  },
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>, filterType: string) => {
    const { value } = event.target;

    switch(filterType) {
      case "releaseYear":
        set({ filters: { releaseYear: parseInt(value, 10) } });
        break;
      default:
        break;
    }
  }
}));