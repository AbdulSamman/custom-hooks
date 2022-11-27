import { useState } from "react";

type Fn = () => void;

export const useToggle = (defaultValue: boolean): [boolean, Fn, string] => {
  //array von [showAds,adsToggle,adsClass]
  const [value, setValue] = useState(defaultValue);
  const toggleValue = () => {
    setValue(!value);
  };
  const valueClasses = value ? "positive" : "negative";
  return [value, toggleValue, valueClasses];
};
