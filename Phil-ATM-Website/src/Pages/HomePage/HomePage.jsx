import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <div class="bg-orange-500">
      <div>
        <Header />
        <h1>Hi I am an h1 inside this DIV</h1>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
