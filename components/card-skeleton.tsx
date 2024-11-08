export default function CardSkeleton() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="relative h-96 w-full">
        <div className="skeleton h-96 rounded-b-none w-full"></div>
      </figure>
      <div className="card-body">
        <div className="card-title">
          <div className="skeleton h-8 w-2/3"> </div>
        </div>
        <div className="skeleton h-4 w-1/3"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
}
