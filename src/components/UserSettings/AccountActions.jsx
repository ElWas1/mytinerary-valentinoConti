import Swal from "sweetalert2"

const AccountActions = () => {

  const handleDeleteAccount = () => {
    Swal.fire({
      title: "Are you sure you want to permanently delete your account?",
      text: "WARNING: this action is IRREVERSIBLE, which means that it cannot be undone!",
      icon: "warning",
      inputLabel: "Enter your password to terminate your account.",
      input: "password",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "gray",
      confirmButtonText: "Confirm and delete my account"
    }).then((result) => {
      if (result.isDismissed) {
        return
      }
      if (!result.value) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No password was provided.',
          text: 'No action was performed.',
          showConfirmButton: false,
          timer: 4000
        })
      }
      if (result.value) {
        Swal.fire({
          title: "Unavailable feature.",
          text: "This feature is unavailable at the moment. Stay tuned for new ones!",
          icon: "info"
        })
      }
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-[20vw]">
      <p className="text-xl font-medium mb-4 rounded-md max-sm:p-2 sm:p-4 text-center">Account actions</p>
      <div className="w-full flex flex-col gap-3">
        <p className="font-semibold text-red-500">Danger Zone</p>
        <p className="max-md:text-xs text-gray-400">Irreversible actions ahead, be careful.</p>
        <hr className="border-red-950" />
        <p className="mb-2">Delete account</p>
        <button onClick={handleDeleteAccount} className="btn text-red-500 outline outline-red-500 bg-black hover:bg-red-500 hover:text-white duration-300">Delete</button>
      </div>
    </div>
  )
}

export default AccountActions