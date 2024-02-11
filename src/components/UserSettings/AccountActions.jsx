const AccountActions = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl font-medium mb-4 bg-base-300 rounded-md max-sm:p-2 sm:p-4">Account actions</p>
      <p className="mb-2">Delete account</p>
      <button className="btn bg-red-500">Delete</button>
    </div>
  )
}

export default AccountActions