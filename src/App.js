// App.js
import ProductCard from "./ProductCard";
import Counter from "./Counter"; // Make sure this component exists
import BadCounter from "./BadCounter";

function App() {
  return (
    <div>
      <Welcome />
      <UserProfile />
      <ProductCard /> {/* Now using the ProductCard */}
      <Counter />
      <BadCounter />
    </div>
  );
}

function Welcome() {
  return <h1>أهلاً بك في عالم رياكت</h1>;
}

function UserProfile() {
  return (
    <div>
      <h2>أحمد</h2>
      <p>مطور ويب</p>
    </div>
  );
}

export default App;
