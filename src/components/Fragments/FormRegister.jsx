import InputForm from "../Elements/Input/index"
import Button from "../Elements/Button"

export default function FormRegister() {
    return (
        <form action="">
            <InputForm 
                label="Full Name" 
                name="fullName" 
                type="text" 
                placeholder="Insert your name here..."/>
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
            <InputForm 
                label="Confirm Password" 
                name="confirmPassword" 
                type="password" 
                placeholder="***********"/>
            <Button classname="w-full bg-blue-500">Register</Button>
        </form>
    )
}