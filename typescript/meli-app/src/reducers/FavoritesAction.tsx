import {
  ActionType,
  AddFavorite,
  ResetFavorites,
  RemoveFavorite,
  Favorite,
} from "../types/favorites";

export const addFavorite = (favorite: Favorite): AddFavorite => ({
  type: ActionType.AddFavorite,
  payload: favorite,
});

export const removeFavorite = (id: string): RemoveFavorite => ({
  type: ActionType.RemoveFavorite,
  payload: { id },
});

export const resetFavorites = (): ResetFavorites => ({
  type: ActionType.ResetFavorites,
});
