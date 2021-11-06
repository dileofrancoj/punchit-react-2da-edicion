import {
  ActionType,
  Favorite,
  Favorites,
  FavoritesActions,
} from "../types/favorites";

export const initalState: Favorites = {
  favorites: [],
};

export function favoritesReducer(
  state: Favorites,
  action: FavoritesActions
): Favorites {
  switch (action.type) {
    case ActionType.AddFavorite: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }

    case ActionType.ResetFavorites:
      return initalState;

    case ActionType.RemoveFavorite: {
      const fv: Favorite[] = state.favorites.filter(
        (favorite: Favorite) => favorite.id !== action.payload.id
      );
      return {
        ...state,
        favorites: fv,
      };
    }
    default:
      return { ...state };
  }
}
