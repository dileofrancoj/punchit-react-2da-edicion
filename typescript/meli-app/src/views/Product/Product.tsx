import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

type ProductParam = {
  id: string;
};

const ProductView: React.FC = () => {
  const { id } = useParams<ProductParam>();

  return (
    <>
      <Helmet>
        <title>Producto: {id}</title>
        <meta charSet="utf-8" />
      </Helmet>
      Producto individual {id}
    </>
  );
};

export default ProductView;
