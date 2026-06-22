import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from './MobileFrame';
import BottomNav from './BottomNav';
import FormInput from './FormInput';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '', phone: '', email: '', password: '', company: '', isAgency: 'yes',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account-settings');
  };

  return (
    <MobileFrame>
      <form className="create-account-content" onSubmit={handleSubmit}>
        <h1 className="ca-title">Create your<br />PopX account</h1>
        <FormInput label="Full Name" required name="fullName" value={form.fullName} onChange={handleChange} placeholder="Marry Doe" />
        <FormInput label="Phone number" required name="phone" value={form.phone} onChange={handleChange} placeholder="Marry Doe" />
        <FormInput label="Email address" required name="email" type="email" value={form.email} onChange={handleChange} placeholder="Marry Doe" />
        <FormInput label="Password" required name="password" type="password" value={form.password} onChange={handleChange} placeholder="Marry Doe" />
        <FormInput label="Company name" name="company" value={form.company} onChange={handleChange} placeholder="Marry Doe" />
        <div className="agency-group">
          <p className="agency-label">Are you an Agency?<span className="required-star">*</span></p>
          <div className="agency-options">
            <label className="radio-option">
              <input type="radio" name="isAgency" value="yes" checked={form.isAgency === 'yes'} onChange={handleChange} />
              <span className="radio-custom" />Yes
            </label>
            <label className="radio-option">
              <input type="radio" name="isAgency" value="no" checked={form.isAgency === 'no'} onChange={handleChange} />
              <span className="radio-custom" />No
            </label>
          </div>
        </div>
        <div className="ca-spacer" />
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
      <BottomNav chatCount={21} />
    </MobileFrame>
  );
};

export default CreateAccount;
