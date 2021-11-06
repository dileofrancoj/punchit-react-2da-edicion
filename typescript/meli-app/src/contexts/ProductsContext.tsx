import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { iProduct } from "../types/products";
// Servir los productos a cualquier componente hijo productsResults, loading
// searchProducts -->

type ContextType = {
  productsResults: Array<iProduct>;
  loading: boolean;
  searchProducts: (item: string) => void;
};

const contexDefault: ContextType = {
  productsResults: [],
  loading: false,
  searchProducts: (item: string) => {},
};

const ProductsContext = createContext<ContextType>(contexDefault);
const { Provider } = ProductsContext;

export const ProductsProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [product, setProduct] = useState<string>("");
  const [products, loading] = useFetch(`search?q=${product}&limit=5`);

  const searchProducts = (p: string) => {
    history.push("/products");
    setProduct(p);
  };

  const { results: productsResults }: { results: iProduct[] } = products;

  return (
    <Provider value={{ productsResults, loading, searchProducts }}>
      {children}
    </Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProducts must be initialized within ProductsProvider");
  return context;
};
