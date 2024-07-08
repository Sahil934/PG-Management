import React from "react";
import * as Components from './Components';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [signIn, toggle] = React.useState(true);
    const [userType, setUserType] = React.useState('');
    const [values, setValues] = React.useState({
        email: "",
        password: "",
        username: ""
    });

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const validateForm = () => {
        const { email, password } = values;
        if (email === "") {
            toast.error("Email and Password are required.", toastOptions);
            return false;
        } else if (password === "") {
            toast.error("Email and Password are required.", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            navigate("/dashboard");
        }
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <Components.Container>
            <ToastContainer />
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' name="username" placeholder='Name' onChange={handleChange} />
                    <Components.Input type='email' name="email" placeholder='Email' onChange={handleChange} />
                    <Components.Input type='password' name="password" placeholder='Password' onChange={handleChange} />
                    <Components.Select style={{color: userType ? 'black' : '#636c72'}} value={userType} onChange={handleUserTypeChange}>
                        <option value="" disabled>Select Type</option>
                        <option value="renter" style={{color: 'black'}}>Renter</option>
                        <option value="owner" style={{color: 'black'}}>Owner</option>
                    </Components.Select>
                    <Components.Button onClick={handleSubmit}>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input type='email' name="email" placeholder='Email' onChange={handleChange} />
                    <Components.Input type='password' name="password" placeholder='Password' onChange={handleChange} />
                    <Components.Button onClick={handleSubmit}>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
};

export default LoginPage;