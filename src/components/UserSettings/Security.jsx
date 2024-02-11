const Security = () => {
  return (
    <div className="flex flex-col items-center gap-8 justify-center">
      <p className="text-xl font-medium bg-base-300 rounded-md max-sm:p-2 sm:p-4">Security settings</p>
      <form className='flex flex-col gap-2' action={null} method={null} onSubmit={null}>
        <legend className="font-medium">Change password</legend>
        <label htmlFor="old_password">Enter old password</label>
        <input className='bg-white text-black mb-8 p-1 rounded-md' type="password" name="old_password" id="old_password" />
        <label htmlFor="new_password">Enter new password</label>
        <input className='bg-white text-black mb-8 p-1 rounded-md' type="password" name="new_password" id="new_password" />
        <label htmlFor="confirm_new_password">Confirm new password</label>
        <input className='bg-white text-black mb-8 p-1 rounded-md' type="password" name="confirm_new_password" id="confirm_new_password" />
        <button className='bg-black p-4 my-4 rounded-3xl outline outline-1 outline-green-800 hover:bg-green-800 duration-300'>Save Changes</button>
      </form>
    </div>
  )
}

export default Security