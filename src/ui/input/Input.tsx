"use client";
import { CSSProperties, useState } from "react";

import { CircleX } from "lucide-react";

import styles from "./Input.module.scss";

interface IProps {
  prefixCls?: string; //для содания клссов
  // icon?: React.ReactNode;
  id?: string | number;
  type?: Type;
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  style?: CSSProperties;
  loading?: boolean;
  status?: Status;
  value?: number | string;
  placeholder?: string;
  defaultValue?: string;
  clearable?: boolean;
}

type Size = "small" | "medium" | "large";
type Type =
  | "text"
  | "link"
  | "phone"
  | "search"
  | "card"
  | "textArea"
  | "number";
type Variant = "outlined" | "underline" | "filled";
type Status = "warning" | "error" | "success";

export const Input = ({
  prefixCls = "nui",
  // icon,   prefixCls = "nui-inpt",ы
  id = 0, //подумать над след ошибкой : 'В форме дважды использован один и тот же идентификатор поля'
  type = "text",
  size = "small",
  variant = "outlined",
  disabled = false,
  onChange,
  className,
  // style,
  loading,
  status,
  value,
  placeholder = "Введите значение",
  defaultValue = "",
  clearable = false,
}: IProps) => {
  // Определяем, управляется ли компонент извне
  const isControlled = value !== undefined;

  // Локальное состояние для неуправляемого режима
  const [internalValue, setInternalValue] = useState(defaultValue);

  // Текущее значение зависит от режима
  const currentValue = isControlled ? value : internalValue;

  const inputClasses = [
    styles[`${prefixCls}-inpt`],
    size && styles[`${prefixCls}-inpt--${size}`],
    variant && styles[`${prefixCls}-inpt--${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const wrapperClasses = [
    styles[`${prefixCls}-wrapper`],
    styles[`${prefixCls}-wrapper--${size}`],
    styles[`${prefixCls}-wrapper--${variant}`],
    status && styles[`${prefixCls}-wrapper--${status}`],
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const iconClasses = [
    styles[`${prefixCls}-clearIcon`],
    styles[`${prefixCls}-clearIcon--${size}`],
    status && styles[`${prefixCls}-clearIcon--${status}`],
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const iconClass = [
    styles[`${prefixCls}-icon`],
    size && styles[`${prefixCls}-icon--${size}`], // Добавил размер для иконки
    status && styles[`${prefixCls}-icon--${status}`],
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const lableClasses = [
    styles[`${prefixCls}-label`],
    styles[`${prefixCls}-label--${size}`],
    styles[`${prefixCls}-label--${variant}`],
    styles[`${prefixCls}-label--${status}`],
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleClickIcon = () => {
    if (isControlled) {
      onChange?.("");
    } else {
      setInternalValue("");
      onChange?.("");
    }
  };

  return (
    <div className={wrapperClasses}>
      <input
        className={inputClasses}
        type={type}
        placeholder=" "
        disabled={disabled || loading}
        onChange={onChangeInput}
        value={currentValue}
        id={id?.toString()}
      />
      {clearable && type === "text" && !loading && (
        <span onClick={handleClickIcon} className={iconClasses}>
          <CircleX className={iconClass} />
        </span>
      )}
      {loading && (
        <span onClick={handleClickIcon} className={iconClasses}>
          <span className={styles[`loading-spinner`]} />
        </span>
      )}

      <label className={lableClasses}>{placeholder}</label>
    </div>
  );
};
