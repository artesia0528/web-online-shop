/* eslint-disable react/prop-types */
export default function Label(props) {
    const {htmlFor, children} = props;
    return (
        <label htmlFor={htmlFor}  className="block mb-2 text-sm font-bold text-slate-700">{children}</label>
    )
}
