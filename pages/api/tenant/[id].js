import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    // `name` is defined after hydrating client-side
    id && (
      <div>
        <h1>{id}</h1>
        <p>Welcome to our product page for {id}!</p>
      </div>
    )
  );
};

export default Product;
