import { useDispatch } from "react-redux";
import { user_signup, get_countries } from "../../store/actions/userActions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SignUp = () => {

  const dispatch = useDispatch();

  const inputClassName = 'bg-gray-950 p-2 text-white rounded-lg max-md:text-xs'

  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    pass: '',
    image: '',
    country: ''
  })

  const countries = useSelector((store) => store.user.countriesList)

  useEffect(() => {
    dispatch(get_countries())
  }, [])

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log('Sign Up');
    try {
      dispatch(user_signup({
        user: formData
      }))
    } catch (error) {
      
    }

  }

  return (
    <div className="flex flex-col items-center gap-4 bg-white text-black max-md:p-3 md:p-8 max-md:text-xl md:text-3xl rounded-xl">
      <h1 className='self-center text-4xl mb-8'>Sign Up</h1>
      <form className="flex flex-col gap-4 max-w-[90vw]" onSubmit={handleSignUp} action="">
        <input className={inputClassName} autoComplete="off" placeholder="Name" onInput={handleInput} type="text" name='name' />
        <input className={inputClassName} autoComplete="off" placeholder="Last name" onInput={handleInput} type="text" name='last_name' />
        <input className={inputClassName} autoComplete="off" placeholder="E-mail" onInput={handleInput} type="text" name='email' />
        <input className={inputClassName} autoComplete="off" placeholder="Password" onInput={handleInput} type="text" name='pass' />
        <input className={inputClassName} autoComplete="off" placeholder="Profile photo" onInput={handleInput} type="text" name='image' />
        <select autoComplete="off" className={inputClassName} onInput={handleInput} name="country" id="country">
          <option value={null}>--- Select a country ---</option>
          {countries.map((e, i) => <option key={[i]} value={e.name.common}>{e.name.common}</option>)}
        </select>
        <button className="bg-slate-700 p-4 rounded-xl text-white" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp