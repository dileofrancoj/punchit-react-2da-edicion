export interface Favorites {
  favorites: Favorite[] | [];
}

export interface Favorite {
  id: string;
  price?: number;
  title: string;
  thumbnail: string;
}

export enum ActionType {
  AddFavorite,
  RemoveFavorite,
  ResetFavorites,
}

export interface AddFavorite {
  type: ActionType.AddFavorite;
  payload: Favorite;
}

export interface RemoveFavorite {
  type: ActionType.RemoveFavorite;
  payload: { id: string };
}

export interface ResetFavorites {
  type: ActionType.ResetFavorites;
}

export type FavoritesActions = AddFavorite | ResetFavorites | RemoveFavorite;
