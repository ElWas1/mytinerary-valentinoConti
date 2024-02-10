const PublicProfile = () => {
  return (
    <div className="w-fit">
      <form className='flex flex-col gap-4' action={null} method={null} onSubmit={null}>
        <p>Profile info options</p>
        <label htmlFor="change_username">Change Username</label>
        <input className='bg-white text-black mb-8 p-1 rounded-md' type="text" name="change_username" id="change_username" />
        <label htmlFor="change_email">Change Email</label>
        <input className='bg-white text-black mb-8 p-1 rounded-md' type="email" name="change_email" id="change_email" />
        <button className='bg-black p-4 my-4 rounded-3xl outline outline-1 outline-green-800 hover:bg-green-800 duration-300'>Save Changes</button>
      </form>
    </div>
  )
}

export default PublicProfile