// components/CustomRadio.tsx
import { Radio, cn } from "@nextui-org/react";

interface CustomRadioProps {
  value: string;
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomRadio = ({
  value,
  children,
  onChange,
  ...otherProps
}: CustomRadioProps) => {
  return (
    <Radio
      {...otherProps}
      value={value}
      onChange={onChange}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};
