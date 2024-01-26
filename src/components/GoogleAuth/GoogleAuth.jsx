import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { user_google_auth } from "../../store/actions/userActions";

const GoogleAuth = () => {

    const dispatch = useDispatch();

    const googleButton = useRef(null);

    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential
        };

        dispatch(user_google_auth(data))
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "294345492620-5qjgnaqo0kfd9kahe927mbgfl1qu04dn.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { shape: 'pill', theme: "dark", size: "medium" }  // customization attributes
            );
        }
    }, [])

    return (
        <div className="mx-8" ref={googleButton}></div>
    )
}

export default GoogleAuth