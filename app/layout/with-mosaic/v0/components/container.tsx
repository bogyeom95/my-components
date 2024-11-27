"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  Mosaic,
  MosaicBranch,
  MosaicNode,
  MosaicParent,
  MosaicWindow,
} from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
// uuid
import { v4 as uuid } from "uuid";

const initialTiles: MosaicNode<string> = uuid();
export default function Container() {
  const [mosaicNode, setMosaicNode] = React.useState<MosaicNode<string> | null>(
    initialTiles
  );

  // 새로운 타일을 추가하는 함수
  const addTile = () => {
    const newId = uuid();

    setMosaicNode((prevNode) => {
      if (prevNode == null) {
        // 현재 노드가 없으면 새로운 타일로 설정
        return newId;
      } else {
        // 새로운 부모 노드를 생성하여 기존 노드와 새로운 타일을 포함
        return {
          direction: "row", // 'column'으로 변경하여 세로로 분할할 수도 있습니다.
          first: prevNode,
          second: newId,
          splitPercentage: 50,
        } as MosaicParent<string>;
      }
    });
  };

  // 타일을 삭제하는 함수
  const removeTile = (id: string) => {
    setMosaicNode((prevNode) => {
      if (!prevNode) return null;

      // 노드 트리를 순회하여 해당 ID를 제거합니다.
      const removeNode = (
        node: MosaicNode<string> | null
      ): MosaicNode<string> | null => {
        if (typeof node === "string") {
          return node === id ? null : node;
        } else if (node) {
          const newFirst = removeNode(node.first);
          const newSecond = removeNode(node.second);

          if (newFirst && newSecond) {
            return { ...node, first: newFirst, second: newSecond };
          } else {
            return newFirst || newSecond;
          }
        }
        return null;
      };

      return removeNode(prevNode);
    });
  };

  return (
    <div className="w-full h-[calc(100svh-4rem)] overflow-y-auto p-4">
      <button onClick={addTile}>Add Tile</button>

      <Mosaic<string>
        renderTile={(id, path) => (
          <Tile id={id} path={path} onRemove={() => removeTile(id)} />
        )}
        value={mosaicNode}
        onChange={setMosaicNode}
      />
    </div>
  );
}

type TileProps = {
  id: string;
  path: MosaicBranch[];
  onRemove: () => void;
};

function Tile({ id, path, onRemove }: TileProps) {
  return (
    <MosaicWindow
      title={`Tile ${id}`}
      path={path}
      createNode={createNode}
      renderToolbar={(props) => (
        <div className="flex items-center bg-base-100 p-2 border-b border-base-200 w-full">
          <span className="flex-grow text-sm font-semibold text-gray-800">
            {props.title}
          </span>

          <button
            className="text-gray-500 hover:text-red-600 mx-1"
            onClick={onRemove}
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
      )}
    >
      <Box id={id} />
    </MosaicWindow>
  );
}

type BoxProps = {
  id: string;
};

function Box({ id }: BoxProps) {
  return (
    <div className=" bg-base-100 w-full h-full">
      <h2 className="text-4xl">{`Content Area ${id}`}</h2>
    </div>
  );
}

function createNode() {
  return uuid();
}
