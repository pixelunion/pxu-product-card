import { FAKE_DATA } from "./constants";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="flex items-center justify-center space-x-4 my-16">
      {FAKE_DATA.map(({ id, ...rest }) => (
          <ProductCard
            key={id}
            {...rest}
          />
      ))}
    </div>
  );
}

export default App;
