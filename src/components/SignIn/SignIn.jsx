import { user_signin } from "../../store/actions/userActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SignIn = () => {

    const inputClassName = 'bg-gray-950 p-2 text-white rounded-lg'

    const [formData, setFormData] = useState({
        email: '',
        pass: ''
    })

    const dispatch = useDispatch();

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            dispatch(user_signin({
                data: formData
            }))
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="flex flex-col items-center gap-4 bg-white text-black max-md:p-3 md:p-8 max-md:text-xl md:text-3xl rounded-xl">
            <h1 className='self-center text-4xl mb-8'>Sign In</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSignIn} action="">
                <input className={inputClassName} autoComplete="off" placeholder="E-mail" onInput={handleInput} type="text" name='email' />
                <input className={inputClassName} autoComplete="off" placeholder="Password" onInput={handleInput} type="text" name='pass' />
                <button className="bg-slate-700 p-4 rounded-xl text-white" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignIn