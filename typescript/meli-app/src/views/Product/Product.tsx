import { useParams } from "react-router-dom";

type ProductParam = {
  id: string;
};
const ProductView: React.FC = () => {
  const { id } = useParams<ProductParam>();
  return <>Producto individual {id}</>;
};

export default ProductView;
