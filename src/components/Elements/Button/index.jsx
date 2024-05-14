/* eslint-disable react/prop-types */
export default function Button(props) {
    const{children, classname = "bg-black", onClick = () => {}, type="button"} = props;
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${classname}   text-white mb-4`}
        type={type}
        onClick={onClick}
        >{children}</button>  
    )
}
