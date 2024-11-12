import { svgObjects } from "@/constants/svg-list";
import ImageList from "./components/image-list";

export default function Page() {
  const images = svgObjects.map((data) => data.svg);
  return (
    <div className="w-full flex flex-col justify-center items-center p-4">
      <div className="w-full h-96 relative flex justify-center items-center">
        <ImageList images={images} />
      </div>
    </div>
  );
}
