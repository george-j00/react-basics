import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    mobile: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    mobile: '',
  });

  const handleInputChange = (e) => {  
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email , mobile} = formData ;
    const newErrors = {};

    if (validateEmail(email)) {
       newErrors.email = '';
    }else{
        newErrors.email = 'Please enter a valid email address.'
    }

    if (validateMobile(mobile)) {
        newErrors.mobile = '';
    }else{
        newErrors.mobile = 'Please enter a 10-digit mobile number';
    }

    if (newErrors.email || newErrors.mobile) {
        setErrors(newErrors);
    }else{
        setErrors({email : '' ,mobile : '' });
        console.log('this is form data' , formData);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail.com$/;
    return emailPattern.test(email);
  };

  const validateMobile = (mobile) => {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-blue-500 text-3xl text-center mb-5">Sample Form</h1>

        <div className="mb-4">
          <label htmlFor="userName" className="block text-gray-600 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleInputChange}
            className="bg-blue-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-blue-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        </div>
        
        <div className="mb-6">
          <label htmlFor="mobile" className="block text-gray-600 font-bold mb-2">
            Mobile
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="bg-blue-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500 text-xs italic">{errors.mobile}</p>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
