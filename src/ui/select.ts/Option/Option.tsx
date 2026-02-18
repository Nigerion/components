import { Check } from "lucide-react";

import { IOption, Size } from "../Select";

interface IProps {
  options: IOption[];
  optionsClasses: string;
  itemClasses: (option: IOption) => string;
  handleSelect: (option: IOption) => void;
  selectValue: string | string[];
  isSelected: (key: string) => boolean;
  iconSize: (size: string) => number;
  size: Size;
}

export const Option = ({
  options,
  optionsClasses,
  itemClasses,
  handleSelect,
  selectValue,
  isSelected,
  iconSize,
  size,
}: IProps) => {
  return (
    <div className={optionsClasses} aria-label="Опции выбора">
      {options.map((option: IOption) => (
        <div
          className={itemClasses(option)}
          onClick={() => handleSelect(option)}
          key={option.key}
          aria-selected={selectValue === option.key}
          aria-disabled={option.disabled}
          tabIndex={option.disabled ? -1 : 0}
        >
          {option.label}
          {isSelected(option.key) && (
            <Check size={iconSize(size)} color="#2196f3" />
          )}
        </div>
      ))}
    </div>
  );
};
