export function Field({ type, placeholder, value, required, inputValue }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      className="w-full border-b-2 border-sp border-grayBorder pb-2 placeholder:text-base placeholder:text-subtitle"
      onChange={inputValue}
    />
  );
}   

export function Checkbox({  value, required }) {
  return (
    <input
      type="checkbox"
      value={value}
      required={required}
      className="w-fit scale-150 cursor-pointer"
    />
  );
}
