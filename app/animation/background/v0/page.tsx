import StarBackground from "./components/StarBackground";
import Counter from "./components/counter";

export default function page() {
  return (
    <div className="h-full">
      <StarBackground />
      <div className="text-4xl text-white font-semibold w-full h-full flex items-center justify-center">
        <Counter from={0} to={100000} duration={5} />
      </div>
    </div>
  );
}
