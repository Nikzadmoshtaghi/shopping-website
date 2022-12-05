const Input = ({ value, name, label, onChange }) => {
  return (
    <>
      <div className="mb-3 p-2">
        <label htmlFor="email">{label}</label>
        <input
          onChange={onChange}
          value={value}
          name={name}
          id={name}
          className="form-control"
          type="text"
        />
      </div>
    </>
  );
};

export default Input;
