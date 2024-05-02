import { useDispatch } from "react-redux";
import { user_signup, get_countries } from "../../../store/actions/userActions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import FileUploader from "../../FileUploader/FileUploader";

const SignUp = () => {

  const imageURL = useSelector(store => store.page.signUpImage)

  const dispatch = useDispatch();

  const inputClassName = 'bg-gray-100 p-2 text-xl rounded-lg max-md:text-xs'

  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    image: '',
    country: ''
  })

  const countries = useSelector((store) => store.user.countriesList)

  useEffect(() => {
    dispatch(get_countries())
    setFormData({
      ...formData,
      image: (imageURL !== null) ? imageURL : import.meta.env.VITE_DEFAULT_PFP
    })
  }, [imageURL])

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.country === "") formData.country = "Not specified"
    try {
      dispatch(user_signup({
        user: formData
      }))
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div className="flex flex-col items-center gap-4 bg-transparent text-black max-lg:p-3 lg:p-8 max-lg:text-xs lg:text-3xl rounded-xl">
      <h1 className='self-center text-white text-4xl'>Sign Up</h1>
      <form className="flex flex-col gap-3 max-w-[90vw]" onSubmit={handleSignUp} action="">
        <p className="text-white text-sm">* Indicates a required field.</p>
        <input className={inputClassName} autoComplete="off" placeholder="Name (2 - 30 characters) *" onInput={handleInput} type="text" name='name' />
        <input className={inputClassName} autoComplete="off" placeholder="Last name (2 - 30 characters) *" onInput={handleInput} type="text" name='last_name' />
        <input className={inputClassName} autoComplete="off" placeholder="Username (2 - 20 characters) *" onInput={handleInput} type="text" name='username' />
        <input className={inputClassName} autoComplete="off" placeholder="E-mail *" onInput={handleInput} type="text" name='email' />
        <input className={inputClassName} autoComplete="off" placeholder="Password (8 - 35 characters) *" onInput={handleInput} type="password" name='password' />
        <select autoComplete="off" className={inputClassName} onInput={handleInput} name="country" id="country">
          <option value={""}>--- Select a country ---</option>
          {countries.map((e, i) => <option key={[i]} value={e.name.common}>{e.name.common}</option>)}
        </select>
        <FileUploader />
        <button className="bg-white p-4 rounded-xl text-lg" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp