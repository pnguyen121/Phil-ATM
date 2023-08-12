import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <div class="flex container mx-auto max-w-full" id="main-container">
      <div className="grid w-full sm:h-full">
        <div>
          <Header />
          <h1>Hi I am an h1 inside this DIV</h1>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
