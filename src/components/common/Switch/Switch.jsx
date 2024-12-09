export function Switch({ checked, onChange, type, disabled }) {
  return (
    <input
      type="checkbox"
      onChange={onChange}
      checked={checked}
      className={`switch --${type}`}
      disabled={disabled}
    />
  );
}
