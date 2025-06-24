import { type HeadingBlock } from "@/types";
import { ElementType } from "react";

export default function HeadingBlock(block: HeadingBlock) {
  const level = block.attributes.level ?? 2;
  const Tag = ("h" + level.toString()) as ElementType;

  return <Tag  className={level === 3 ? "text-red-400" : ""}>{block.attributes.content}</Tag>;   //making heading red for article page
}
