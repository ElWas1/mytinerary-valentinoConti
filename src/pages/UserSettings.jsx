import { useSelector, useDispatch } from "react-redux"
import { useState, useRef, useEffect } from "react"
import { change_bg } from '../store/actions/pageActions.js';
import PublicProfile from "../components/UserSettings/PublicProfile.jsx"
import Security from "../components/UserSettings/Security.jsx"
import Accessibility from "../components/UserSettings/Accessibility.jsx"
import AccountActions from "../components/UserSettings/AccountActions.jsx"

const UserSettings = () => {

    const dispatch = useDispatch()

    const user = useSelector(store => store.user.user)

    const sideBar = useRef(null)

    const [component, setComponent] = useState(<PublicProfile />)

    const [activeButton, setActiveButton] = useState("public_profile")

    const settings = [
        { title: "Public profile", id: "public_profile" },
        { title: "Security", id: "security" },
        { title: "Accessibility", id: "accessibility" },
        { title: "Account actions", id: "account_actions" }
    ]

    const settingsIcons = {
        public_profile: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>,
        security: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>,
        accessibility: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>,
        account_actions: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
    }

    const activeClass = 'flex flex-row items-center w-full gap-2 rounded-lg px-4 py-2 max-md:font-normal font-medium text-gray-700 bg-gray-200 max-md:text-xs duration-200 active:scale-90'

    const normalClass = 'flex flex-row items-center w-full gap-2 rounded-lg px-4 py-2 max-md:font-normal font-medium text-gray-700 hover:bg-gray-100 duration-200 max-md:text-xs active:scale-90'

    const handleChangeComponent = (component) => {
        switch (component) {
            case "public_profile":
                setComponent(<PublicProfile />)
                break
            case "security":
                setComponent(<Security />)
                break
            case "accessibility":
                setComponent(<Accessibility />)
                break
            case "account_actions":
                setComponent(<AccountActions />)
                break
            default:
                setComponent(<PublicProfile />)
        }
        setActiveButton(component)
    }

    useEffect(() => {
        dispatch(change_bg("/lake3.jpg"))
    }, [dispatch])

    return (
        <div className="flex flex-row justify-center bg-zinc-900">
            <div ref={sideBar} className="flex flex-col min-w-[15vw] justify-center border-e bg-white">
                <div className="max-sm:px-1 sm:px-4 py-6 flex flex-col items-center text-black">
                    <span className="max-sm:text-xs max-sm:font-medium max-sm:py-2 sm:p-4 lg:text-xl rounded-md bg-gray-100">
                        User Settings
                    </span>

                    <ul className="flex flex-col items-start gap-4 mt-6">
                        {settings.map((button) => (
                            <li className='mb-2 rounded-sm w-full' key={button.id}>
                                <button onClick={() => handleChangeComponent(button.id)} className={activeButton === button.id ? activeClass : normalClass} key={button.id}>
                                    {button.id && settingsIcons[button.id] && settingsIcons[button.id]}
                                    {<span className="max-sm:sr-only">{button.title}</span>}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-row flex-grow justify-center items-center min-h-[95vh] sm:mx-1 lg:mx-8">
                {component}
            </div>
        </div>
    )
}

export default UserSettings