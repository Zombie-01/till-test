import { FunctionComponent, HTMLProps, ReactNode } from "react";

interface FormContentProps extends HTMLProps<HTMLDivElement> {
  header: string;
  children: ReactNode;
}

const FormContent: FunctionComponent<FormContentProps> = ({
  header,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={"flex p-1 flex-col items-start justify-start w-full"}>
      <h2>{header}</h2>
      {children}
    </div>
  );
};

export default FormContent;
