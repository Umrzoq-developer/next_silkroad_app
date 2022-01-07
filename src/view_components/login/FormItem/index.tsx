import React from "react";
import { Controller, Control } from "react-hook-form";
import { InputProps } from "antd";
import Input from "@/shared/Input";
import styles from "styles/App.module.scss";

interface IProps extends InputProps {
  control: Control | any;
  name: string;
  placeholder: string;
  errorMessage?: string;
}

const FormItem: React.FC<IProps> = ({
  control,
  name,
  type,
  placeholder,
  errorMessage,
}: IProps) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Input
              {...field}
              onChange={(e) => {
                field.onChange(e);
              }}
              autoComplete="off"
              type={type}
              placeholder={placeholder}
            />
          );
        }}
      />
      {errorMessage && <p className={styles.error__text}>{errorMessage}</p>}
    </div>
  );
};

export default FormItem;
