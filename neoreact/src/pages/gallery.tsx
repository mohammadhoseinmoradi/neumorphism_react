import MenuComponent from "../components/menu";
import Gallery from "../components/gallery";

const GalleryPage = () => {

  return (
    <div className="min-h-screen w-full  text-white relative">
      <MenuComponent />
      <div className="items mt-10 rounded-xl  ">
      <Gallery />

      </div>
        {/* Waves / Background effect (optional) */}
        <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};

export default GalleryPage;
