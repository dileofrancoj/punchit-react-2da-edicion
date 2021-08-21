export interface Favorites {
  favorites: Favorite[] | [];
}

export interface Favorite {
  id: string;
  price?: number;
  title: string;
  thumbnail: string;
}
