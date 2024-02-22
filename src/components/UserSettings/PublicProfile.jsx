import { useDispatch } from "react-redux";
import { useRef } from "react";
import { update_user } from "../../store/actions/userActions";
import Swal from "sweetalert2";

const PublicProfile = () => {

  const dispatch = useDispatch()

  const form = useRef(null)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const username = form.current.children.change_username.value
    const email = form.current.children.change_email.value
    const confirmPassword = form.current.children.confirm_password.value
    if (!confirmPassword) {
      Swal.fire(
        'Password is required.',
        'Your current password is needed in order to confirm any changes.',
        'error'
      )
      return
    }
    if (username.length < 3 && !email) {
      Swal.fire(
        'Invalid info.',
        'Check that you have provided a valid username and/or email.',
        'error'
      )
      return
    }
    const formData = {
      newUsername: username,
      newEmail: email,
      confirmPassword: confirmPassword
    }
    dispatch(update_user(formData))
  }

  return (
    <div className="min-w-[20vw]">
      <form ref={form} className='flex flex-col gap-4 max-md:text-xs' action={null} method={null} onSubmit={handleFormSubmit}>
        <p className="text-xl font-medium mb-4 rounded-md max-sm:p-2 sm:p-4 text-center">Public profile settings</p>
        <label htmlFor="change_username">Change Username</label>
        <input placeholder="New username..." className='bg-white text-black mb-8 p-1 rounded-md' type="text" name="change_username" id="change_username" />
        <label htmlFor="change_email">Change Email</label>
        <input placeholder="New email..." className='bg-white text-black mb-8 p-1 rounded-md' type="email" name="change_email" id="change_email" />
        <p className="max-md:text-xs md:text-sm text-gray-400">(Enter your password to confirm changes.)</p>
        <label htmlFor="confirm_password">Current password</label>
        <input placeholder="Password..." className='bg-white text-black mb-8 p-1 rounded-md' type="password" name="confirm_password" id="confirm_password" />
        <button className='btn bg-black my-4 rounded-3xl outline outline-green-800 hover:bg-green-800 duration-300'>Save Changes</button>
      </form>
    </div>
  )
}

export default PublicProfile