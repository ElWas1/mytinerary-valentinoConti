import { useDispatch } from "react-redux";
import { useRef } from "react";
import { update_user } from "../../store/actions/userActions";
import Swal from "sweetalert2";

const Security = () => {

  const dispatch = useDispatch()

  const form = useRef(null)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const oldPassword = form.current.children.old_password.value
    const newPassword = form.current.children.new_password.value
    const confirmNewPassword = form.current.children.confirm_new_password.value
    if (oldPassword.length < 8 || newPassword.length < 8 || confirmNewPassword.length < 8) {
      Swal.fire(
        'Invalid password.',
        'Use at least 8 characters.',
        'error'
      )
      return
    }
    const formData = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword
    }
    dispatch(update_user(formData))
  }

  return (
    <div className="min-w-[20vw]">
      <form ref={form} className='flex flex-col gap-4 max-md:text-xs' action={null} method={null} onSubmit={handleFormSubmit}>
        <legend className="text-xl font-medium rounded-md max-sm:p-2 sm:p-4 text-center">Security settings</legend>
        <label htmlFor="old_password">Old password</label>
        <input placeholder="Enter current password..." className='bg-white text-black mb-8 p-1 rounded-md' type="password" name="old_password" id="old_password" />
        <label htmlFor="new_password">New password</label>
        <input placeholder="Enter new password..." className='bg-white text-black mb-8 p-1 rounded-md' type="password" name="new_password" id="new_password" />
        <label htmlFor="confirm_new_password">Confirm new password</label>
        <input placeholder="New password again..." className='bg-white text-black mb-8 p-1 rounded-md' type="password" name="confirm_new_password" id="confirm_new_password" />
        <button className='btn bg-black my-4 rounded-3xl outline outline-green-800 hover:bg-green-800 duration-300'>Save Changes</button>
      </form>
    </div>
  )
}

export default Security