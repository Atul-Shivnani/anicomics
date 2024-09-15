import Carousel2 from "./components/ui/carousel";
import Category from "./components/ui/category";
import HeaderHome  from "./components/ui/headerHome";
import Hero from "./components/ui/hero";
import Grid from "./components/ui/grid";

export default function Home() {

  return (
    <main className="bg-orange-50">
      <HeaderHome />
      <Carousel2/>
      <Category/>
      <Hero/>
      <Grid/>
    </main>
  );
}
