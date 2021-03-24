import { FC } from "react";

interface ComponentProps {
  name: string;
}

const FirstFunctionComp: FC<ComponentProps> = ({ name }) => {
  return <div>Hello there: {name}. </div>;
};

export default FirstFunctionComp;
