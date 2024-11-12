import DragWithMotion from "./components/drag-with-motion";

export default function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center *:p-4">
      <DragWithMotion />
    </div>
  );
}
