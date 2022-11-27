import { useState } from "react";

type Fn = () => void;

export const useToggle = (defaultValue: boolean): [boolean, Fn, Fn, string] => {
  //array von [showAds,adsToggle,adsClass]
  const [value, setValue] = useState(defaultValue);
  const toggleValue = () => {
    setValue(!value);
  };
  const turnOffValue = () => {
    setValue(false);
  };
  const valueClasses = value ? "positive" : "negative";
  return [value, toggleValue, turnOffValue, valueClasses];
};
