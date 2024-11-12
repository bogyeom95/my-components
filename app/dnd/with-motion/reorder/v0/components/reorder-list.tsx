"use client";
import { SvgObject } from "@/constants/svg-list";
import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import Image from "next/image";
import React from "react";
import { MdOutlineDragIndicator } from "react-icons/md";

export default function ReorderList({ svgs }: { svgs: SvgObject[] }) {
  const [items, setItems] = React.useState(svgs);

  return (
    <div className="bg-orange-300 h-[calc(100svh-4rem)] overflow-y-auto">
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Reorder.Group>
    </div>
  );
}

function Item({ item }: { item: SvgObject }) {
  const y = useMotionValue(0);

  const dragControls = useDragControls();

  return (
    <Reorder.Item
      id={String(item.id)}
      value={item}
      style={{ y }}
      dragListener={false}
      dragControls={dragControls}
    >
      <div className="flex mt-2 w-80 items-center justify-between p-4 border rounded-lg shadow-md bg-white">
        <div className="flex items-center select-none">
          <div className="w-12 h-12 relative mr-4">
            <Image
              src={item.svg}
              alt="svg"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
        </div>
        <div
          className="w-8 h-8 cursor-pointer"
          onPointerDown={(e) => dragControls.start(e)}
        >
          <MdOutlineDragIndicator className="w-full h-full text-gray-500" />
        </div>
      </div>
    </Reorder.Item>
  );
}
