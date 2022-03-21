import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button(props: IButtonProps) {
  return (
    <button
      className="p-3 rounded-lg bg-indigo-500 disabled:bg-slate-400"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <span className="text-white font-semibold">{props.children}</span>
    </button>
  );
}
