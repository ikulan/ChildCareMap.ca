import Header from "../components/Header";
import Footer from "../components/Footer";
import CityStats from "../components/CityStats";

function About() {
  return (
    <div className="m-auto max-w-screen-xl">
      <Header displayOptions={false} />
      <main className="mb-2 px-4">
        <CityStats />
      </main>
      <Footer />
    </div>
  );
}

export default About;
