/* eslint-disable react/prop-types */
import Input from "./Input"
import Label from "./Label"

export default function InputForm(props) {
    const {label, name, placeholder, type} = props;
    return (
        <div className="mb-6"> 
            <Label htmlFor={name}>{label}</Label>
            <Input placeholder={placeholder} type={type} name={name}/>
        </div>
    )
}
