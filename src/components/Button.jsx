function Button({ className, type, label, disabled }) {
  if (disabled) {
    className = "h-16 w-full mt-6 pl-4 bg-grey  text-white rounded-full";
  }
  return (
    <button className={className} type={type} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
