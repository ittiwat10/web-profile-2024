import React from "react";

type Props = {};

const Badge = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="bg-blue-900 text-white px-2 py-1 text-xs rounded">
      {props.children}
    </div>
  );
};

export default Badge;
