"use client";
import { Dispatch, SetStateAction, useState, DragEvent } from "react";
import { motion } from "framer-motion";
import { SvgObject } from "@/constants/svg-list";
import { FaFire } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import Image from "next/image";

type KanbanSvgObject = SvgObject & { column: ColumnType };

type ColumnType = "backlog" | "todo" | "doing" | "complete";

export default function Container({
  initialItems,
}: {
  initialItems: SvgObject[];
}) {
  const [items, setItems] = useState<KanbanSvgObject[]>(
    initialItems.map((item) => ({ ...item, column: "backlog" }))
  );

  return (
    <div className="flex h-full w-full gap-6 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        items={items}
        setItems={setItems}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-red-500"
        items={items}
        setItems={setItems}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-500"
        items={items}
        setItems={setItems}
      />
      <Column
        title="Complete"
        column="complete"
        headingColor="text-green-500"
        items={items}
        setItems={setItems}
      />

      <BurnBarrel setItems={setItems} />
    </div>
  );
}

type ColumnProps = {
  title: string;
  column: ColumnType;
  headingColor: string;
  items: KanbanSvgObject[];
  setItems: Dispatch<SetStateAction<KanbanSvgObject[]>>;
};

const Column = ({
  title,
  items,
  headingColor,
  column,
  setItems,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: DragEvent, item: KanbanSvgObject) => {
    e.dataTransfer.setData("itemId", String(item.id));
  };

  const handleDragEnd = (e: DragEvent) => {
    const itemId = parseInt(e.dataTransfer.getData("itemId"));

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before
      ? parseInt(element.dataset.before)
      : -1;

    if (before !== itemId) {
      let copy = [...items];

      let itemToTransfer = copy.find((crt) => crt.id === itemId);
      if (!itemToTransfer) return;
      itemToTransfer = { ...itemToTransfer, column };

      copy = copy.filter((crt) => crt.id !== itemId);

      const moveToBack = before === -1;

      if (moveToBack) {
        copy.push(itemToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, itemToTransfer);
      }

      setItems(copy);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(
        `[data-column="${column}"]`
      ) as unknown as HTMLElement[]
    );
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredItems = items.filter((crt) => crt.column === column);

  return (
    <div className="min-w-44 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredItems.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-200" : ""
        }`}
      >
        {filteredItems.map((c) => {
          return <Item key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
      </div>
    </div>
  );
};

type ItemProps = KanbanSvgObject & {
  handleDragStart: Function;
};

const Item = ({ name, id, column, svg, handleDragStart }: ItemProps) => {
  return (
    <>
      <DropIndicator beforeId={String(id)} column={column} />
      <motion.div
        layout
        layoutId={String(id)}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { id })}
        className="cursor-grab    active:cursor-grabbing"
      >
        <div className="flex mx-1  w-40 items-center justify-between p-2 border rounded-lg shadow-md bg-white">
          <div className="flex items-center *:select-none">
            <div className="w-8 h-8 relative mr-2 ">
              <Image
                src={svg}
                alt="svg"
                fill
                className="object-cover rounded-md "
              />
            </div>
            <h3 className="text-md font-semibold">{name}</h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};

type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-1 w-full opacity-0 flex justify-center"
    >
      <div className="h-full w-3/4 bg-blue-400 rounded-lg" />
    </div>
  );
};

const BurnBarrel = ({
  setItems,
}: {
  setItems: Dispatch<SetStateAction<KanbanSvgObject[]>>;
}) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: DragEvent) => {
    const itemId = parseInt(e.dataTransfer.getData("itemId"));

    setItems((prev) => prev.filter((crt) => crt.id !== itemId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};
