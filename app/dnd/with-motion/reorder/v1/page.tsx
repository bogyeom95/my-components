import { svgObjects } from "@/constants/svg-list";
import Container from "./components/container";

export default function page() {
  const svgs = svgObjects;
  return (
    <div className="w-full h-full m-4 ">
      <div className="w-1/4 mb-4">
        <h1 className="text-2xl font-semibold">drag & drop with motion</h1>
      </div>
      <div className="w-full flex flex-row *:p-4 gap-2">
        <Container initialItems={svgs} />
      </div>
    </div>
  );
}
