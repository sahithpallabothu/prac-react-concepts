import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { isTextArea, labelName, ...inputProps },
  ref
) {
  const classes =
    "w-full p-1 rounded-sm border-b-2 border-stone-200 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="uppercase text-sm text-stone-500 font-bold">
        {labelName}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={classes}></textarea>
      ) : (
        <input ref={ref} className={classes} {...inputProps} />
      )}
    </p>
  );
});

export default Input;
