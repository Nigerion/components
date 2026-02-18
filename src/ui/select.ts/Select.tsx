"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { ChevronDown } from "lucide-react";

import { Option } from "./Option/Option";
import styles from "./Select.module.scss";

export interface IProps {
  prefixCls?: string;
  size?: Size;
  placeholder?: string;
  defaultValue?: string | string[];
  options: IOption[];
  onChange?: (value: string | string[]) => void;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  multiple?: boolean;
  maxTags?: number;
}

export type Size = "small" | "medium" | "large";

export interface IOption {
  key: string;
  label: string;
  disabled?: boolean;
}

export const Select = ({
  prefixCls = "nui",
  size = "small",
  placeholder = "Выберите значение",
  defaultValue,
  options,
  onChange,
  disabled = false,
  error = false,
  className = "",
  multiple = false,
  maxTags = 2,
}: IProps) => {
  const getInitialValue = useMemo(() => {
    if (multiple) {
      if (Array.isArray(defaultValue)) return defaultValue;
      if (defaultValue) return [defaultValue];
      return [];
    }

    if (typeof defaultValue === "string") return defaultValue;
    return "";
  }, [multiple, defaultValue]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string | string[]>(
    getInitialValue
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isSelected = (key: string): boolean => {
    if (multiple && Array.isArray(selectValue)) {
      return selectValue.includes(key);
    }
    return selectValue === key;
  };

  const toggleValue = (i: string) => {
    if (multiple && Array.isArray(selectValue)) {
      if (selectValue.includes(i)) {
        return selectValue.filter((p) => p !== i);
      } else {
        return [...selectValue, i];
      }
    }
    return i;
  };

  const getDisplayLabel = (): string => {
    if (multiple && Array.isArray(selectValue)) {
      if (selectValue.length === 0) return placeholder;

      const selectedOptions = options.filter((opt) =>
        selectValue.includes(opt.key)
      );

      if (selectedOptions.length <= maxTags) {
        return selectedOptions.map((opt) => opt.label).join(", ");
      } else {
        return `${selectedOptions
          .slice(0, maxTags)
          .map((opt) => opt.label)
          .join(", ")} +${selectedOptions.length - maxTags}`;
      }
    }

    const currentOption = options.find((option) => option.key === selectValue);
    return currentOption ? currentOption.label : placeholder;
  };

  const wrapperClasses = [
    styles[`${prefixCls}-wrapper`],
    isOpen && styles[`${prefixCls}-wrapper--open`],
    disabled && styles[`${prefixCls}-wrapper--disabled`],
    error && styles[`${prefixCls}-wrapper--error`],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const selectClasses = [
    styles[`${prefixCls}-select`],
    size && styles[`${prefixCls}-select--${size}`],
    isOpen && styles[`${prefixCls}-select--open`],
    isFocused && styles[`${prefixCls}-select--focused`],
    disabled && styles[`${prefixCls}-select--disabled`],
    error && styles[`${prefixCls}-select--error`],
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const optionsClasses = [
    styles[`${prefixCls}-options`],
    size && styles[`${prefixCls}-options--${size}`],
    isOpen && styles[`${prefixCls}-options--open`],
    error && styles[`${prefixCls}-options--error`],
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const iconSize = (size: string) => {
    if (size === "small") {
      return 16;
    }
    if (size === "medium") {
      return 19;
    }
    if (size === "large") {
      return 22;
    }
    return 16;
  };
  const itemClasses = (option: IOption) =>
    [
      styles[`${prefixCls}-item`],
      isSelected(option.key) && styles[`${prefixCls}-item--selected`],
      size && styles[`${prefixCls}-item--${size}`],
      option.disabled && styles[`${prefixCls}-item--disabled`],
    ]
      .filter(Boolean)
      .join(" ")
      .trim();

  const placeholderClasses = [
    styles[`${prefixCls}-placeholder`],
    selectValue && styles[`${prefixCls}-placeholder--has-value`],
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const arrowClasses = [
    styles[`${prefixCls}-arrow`],
    isOpen && styles[`${prefixCls}-arrow--open`],
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: IOption) => {
    if (option.disabled || disabled) return;

    const newValue = toggleValue(option.key);
    setSelectValue(newValue);

    if (!multiple) {
      setIsOpen(false);
      setIsFocused(false);
    }

    onChange?.(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case "Escape":
        setIsOpen(false);
        break;
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const currentIndex = options.findIndex(
            (opt) => opt.key === selectValue
          );
          const nextIndex =
            currentIndex < options.length - 1 ? currentIndex + 1 : 0;
          const nextOption = options[nextIndex];
          if (!nextOption.disabled) {
            setSelectValue(nextOption.key);
            onChange?.(nextOption.key);
          }
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const currentIndex = options.findIndex(
            (opt) => opt.key === selectValue
          );
          const prevIndex =
            currentIndex > 0 ? currentIndex - 1 : options.length - 1;
          const prevOption = options[prevIndex];
          if (!prevOption.disabled) {
            setSelectValue(prevOption.key);
            onChange?.(prevOption.key);
          }
        }
        break;
    }
  };

  const displayLabel = getDisplayLabel();

  return (
    <div className={wrapperClasses} ref={wrapperRef}>
      <div
        className={selectClasses}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isOpen}
        aria-disabled={disabled}
        aria-label={placeholder}
      >
        <span className={placeholderClasses}>{displayLabel}</span>
        <span className={arrowClasses}>
          <ChevronDown size={iconSize(size)} />
        </span>
      </div>

      {isOpen && (
        <Option
          options={options}
          optionsClasses={optionsClasses}
          itemClasses={itemClasses}
          handleSelect={handleSelect}
          selectValue={selectValue}
          isSelected={isSelected}
          iconSize={iconSize}
          size={size}
        />
      )}
    </div>
  );
};
