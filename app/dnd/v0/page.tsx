import DragWithBoundary from "./components/drag-with-boundary";

export default function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center *:p-4">
      <DragWithBoundary />
    </div>
  );
}
