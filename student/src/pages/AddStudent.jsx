import { useState } from 'react';
import './AddStudent.css';

function AddStudent() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', gender: '' });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [addedStudent, setAddedStudent] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name cannot be empty.';
    }
    if (!form.email.includes('@')) {
      newErrors.email = 'Email must contain "@".';
    }
    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Phone must be exactly 10 digits.';
    }
    if (!form.gender) {
      newErrors.gender = 'Please select a gender.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setAddedStudent(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Store in localStorage
    const stored = localStorage.getItem('students');
    const existing = stored ? JSON.parse(stored) : [];
    const newStudent = { ...form, id: Date.now() };
    const updated = [...existing, newStudent];
    localStorage.setItem('students', JSON.stringify(updated));

    setSuccessMsg('✅ Student added successfully!');
    setAddedStudent(newStudent);
    setForm({ name: '', email: '', phone: '', gender: '' });
    setErrors({});
  };

  return (
    <div className="page add-page">
      <h1 className="page-title">Add Student</h1>
      <p className="page-subtitle">Fill in the details to register a new student</p>

      <div className="form-card">
        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className={`form-input ${errors.name ? 'input-error' : ''}`}
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="text"
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="text"
              className={`form-input ${errors.phone ? 'input-error' : ''}`}
              value={form.phone}
              onChange={handleChange}
              placeholder="10 digits only"
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          {/* Gender */}
          <div className="form-group">
            <label className="form-label">Gender</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={form.gender === 'Male'}
                  onChange={handleChange}
                />
                <span>Male</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={form.gender === 'Female'}
                  onChange={handleChange}
                />
                <span>Female</span>
              </label>
            </div>
            {errors.gender && <span className="error-msg">{errors.gender}</span>}
          </div>

          <button type="submit" className="submit-btn">Add Student</button>
        </form>

        {successMsg && <div className="success-msg">{successMsg}</div>}
      </div>

      {/* Bonus: show added student */}
      {addedStudent && (
        <div className="added-card">
          <h2>Newly Added Student</h2>
          <div className="added-info">
            <p><span>Name:</span> {addedStudent.name}</p>
            <p><span>Email:</span> {addedStudent.email}</p>
            <p><span>Phone:</span> {addedStudent.phone}</p>
            <p><span>Gender:</span> {addedStudent.gender}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddStudent;
