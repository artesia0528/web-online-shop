/* eslint-disable react/prop-types */
import Button from "../Elements/Button"

export default function CardProduct(props) {
    const {children} = props;
    return (
        <div className="flex flex-col justify-between w-full max-w-xs mx-3 my-2 border-gray-200 rounded-lg shadow-md bg-slate-800">
                {children}
        </div>
    )
}

const Header = (props) => { 
    const {image}=props
    return(
        <a href="#">
            <img src={image} alt="product" className="object-cover w-full p-8 rounded-t-lg h-60"/>
        </a>
    )
 }

const Body = (props) => {
    const {children, name} = props 
    return(
        <div className="h-full px-5 pb-5">
                <a href="">
                    <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0, 20)} . . .</h5>
                    <p className="text-sm text-white">
                        {children.substring(0, 100)} . . .
                    </p>
                </a>
            </div>
    )
 }
 
const Footer = (props) => { 
    const {price, handlerAddToCart, id} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">$ {price.toLocaleString('id-ID', {styles:'currency', currency: "USD"})}</span>
            <Button classname="bg-blue-600" onClick={() => handlerAddToCart(id)}>
                Add To Cart
            </Button>
        </div>
    )
 }
 
 CardProduct.Header = Header;
 CardProduct.Body = Body;
 CardProduct.Footer = Footer;