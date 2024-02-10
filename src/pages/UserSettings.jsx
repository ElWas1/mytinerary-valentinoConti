import { useSelector } from "react-redux"
import { useState } from "react"
import PublicProfile from "../components/UserSettings/PublicProfile.jsx"
import Security from "../components/UserSettings/Security.jsx"
import Accessibility from "../components/UserSettings/Accessibility.jsx"
import AccountActions from "../components/UserSettings/AccountActions.jsx"

const UserSettings = () => {

    const user = useSelector(store => store.user.user)

    const [component, setComponent] = useState(<PublicProfile />)

    const settings = [
        { title: "Public profile", id: "public_profile" },
        { title: "Security", id: "security" },
        { title: "Accessibility", id: "accessibility" },
        { title: "Account actions", id: "account_actions" }
    ]

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
    }

    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center justify-center px-8 bg-white text-black">
                {settings.map(e => <button onClick={() => handleChangeComponent(e.id)} className="w-[90%] m-4 px-4 py-1 outline outline-1 outline-black rounded-full" key={e.id}>{e.title}</button>)}
            </div>
            <div className="flex flex-row flex-grow justify-center mx-8">
                {component}
            </div>
        </div>
    )
}

export default UserSettings