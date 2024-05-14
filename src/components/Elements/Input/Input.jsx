/* eslint-disable react/prop-types */
export default function Input(props) {
    const {type = "text", placeholder, name} = props;
    return (
        <input type={type} 
        className="w-full px-3 py-2 text-sm border rounded text-slate-700"
        placeholder={placeholder}
        name={name}
        id={name}
        />
    )
}
