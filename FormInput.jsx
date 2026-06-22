import './FormInput.css';

const FormInput = ({ label, required, value, onChange, type = 'text', placeholder, name }) => {
  return (
    <div className="form-input-group">
      <label className="form-label">
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
