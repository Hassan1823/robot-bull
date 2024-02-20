import React, { FC } from "react";

type Props = {
  btnLabel: string;
};

const ButtonComp: FC<Props> = ({ btnLabel }) => {
  return (
    <button className=" rounded-full border bg-blue-500">{btnLabel}</button>
  );
};

export default ButtonComp;
