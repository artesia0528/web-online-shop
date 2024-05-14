import InputForm from "../Elements/Input/index"
import Button from "../Elements/Button"

export default function FormLogin() {
    const handleLogin = (event) =>{
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value)
        localStorage.setItem('password', event.target.password.value)
        window.location.href = "/products";
    }
    return (
        <form onSubmit={handleLogin}>
            <InputForm 
                label="Email" 
                name="email" 
                type="email" 
                placeholder="example@mail.com"/>
            <InputForm 
                label="Password" 
                name="password" 
                type="password" 
                placeholder="***********"/>
            <Button classname="w-full bg-blue-500" type="submit">Login</Button>
        </form>
    )
}
