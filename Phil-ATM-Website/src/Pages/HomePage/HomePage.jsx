import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow container mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full h-full max-w-4xl p-4">
          {/* Left side */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">Your Trusted ATM Provider for Small Businesses!</h1>
            <p className="text-md mb-4">
            Our mission is to empower entrepreneurs like you by providing reliable and efficient ATM solutions tailored to your unique needs.
            </p>
            <button className="bg-sky-500 text-white px-6 py-2 w-6/12 rounded hover:bg-sky-600">Contact Us</button>
          </div>

          {/* Right side */}
          <div className="flex justify-center">
            <img
              src="https://imgur.com/jIo5OHI.png"
              alt="Your Image"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
