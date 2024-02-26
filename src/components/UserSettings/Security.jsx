import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { update_user } from "../../store/actions/userActions";
import Swal from "sweetalert2";

const Security = ({ id, email }) => {

  const dispatch = useDispatch()

  const form = useRef(null)

  const [formData, setFormData] = useState(null)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (formData.password.length < 8 || formData.new_password.length < 8 || formData.confirm_new_password.length < 8) {
      Swal.fire(
        'Invalid password.',
        'Use at least 8 characters.',
        'error'
      )
      return
    }
    if (formData.new_password !== formData.confirm_new_password) {
      Swal.fire(
        'Passwords do not match.',
        'Check that the new password and its confirmation are the same.',
        'error'
      )
      return
    }
    setFormData(() => ({
      id: id,
      email: email,
      password: formData.password,
      new_password: formData.new_password,
      confirm_new_password: formData.confirm_new_password
    }));
    dispatch(update_user(formData))
    setFormData(() => ({
      id: id,
      email: email,
      password: formData.password,
      new_password: formData.new_password,
      confirm_new_password: formData.confirm_new_password
    }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));

  }

  return (
    <div className="min-w-[20vw]">
      <form ref={form} className='flex flex-col gap-4 max-md:text-xs' action={null} method={null} onSubmit={handleFormSubmit}>
        <legend className="text-xl font-medium rounded-md max-sm:p-2 sm:p-4 text-center">Security settings</legend>
        <label htmlFor="password">Old password</label>
        <input onChange={handleChange} placeholder="Enter current password..." className='bg-white text-black mb-8 p-1 rounded-md' type="password" name="password" id="password" />
        <label htmlFor="new_password">New password</label>
        <input onChange={handleChange} placeholder="Enter new password..." className='bg-white text-black mb-8 p-1 rounded-md' type="password" name="new_password" id="new_password" />
        <label htmlFor="confirm_new_password">Confirm new password</label>
        <input onChange={handleChange} placeholder="New password again..." className='bg-white text-black mb-8 p-1 rounded-md' type="password" name="confirm_new_password" id="confirm_new_password" />
        <button className='btn bg-black my-4 rounded-3xl outline outline-green-800 hover:bg-green-800 duration-300'>Save Changes</button>
      </form>
    </div>
  )
}

export default Security