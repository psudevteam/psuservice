import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export const TableHead = ({ children }) => (
  <span className="flex items-center gap-x-2">
    {children}{" "}
    <div className="flex flex-col">
      <AiFillCaretUp size={8} />
      <AiFillCaretDown size={8} />
    </div>
  </span>
);
