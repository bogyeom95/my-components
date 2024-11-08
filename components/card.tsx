import { blurImage } from "@/constants/blur-image";
import { MockDataType } from "@/constants/mock-data";
import Image from "next/image";

export default function Card({ mockData }: { mockData: MockDataType }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="relative h-96 w-full">
        <Image
          src={mockData.photo}
          alt={mockData.title}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurImage}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${mockData.id} - ${mockData.title}`}</h2>
        <p>{mockData.description}</p>
      </div>
    </div>
  );
}
