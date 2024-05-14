import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProduct } from "../services/product.service";

const email = localStorage.getItem("email")

export default function ProductsPage() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, [])
    
    useEffect(() => {
        getProduct((data) => {
            setProducts(data);        });
    }, [])
    
    useEffect(() => {
        if(products.length > 0 && cart.length > 0){
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;}
           ,0);
           setTotalPrice(sum);
           localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products])
    
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login"
    }
    
    const handlerAddToCart = (id) => {
        if(cart.find(item => item.id === id)){
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        } else {
            setCart([...cart, {id, qty: 1}])
        }
    }
    
    return (
        <Fragment>
            <div className="flex items-center justify-end h-10 px-10 text-white bg-blue-600">
                {email}
                <Button className="m-5" onClick={handleLogout}>Logout</Button>
            </div>
            
            <div className="flex justify-center py-5">
                <div className="flex flex-wrap w-4/6">
                    {products.length > 0 && products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}/>
                        <CardProduct.Body name={product.title}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer 
                        price={product.price} 
                        id={product.id}
                        handlerAddToCart={handlerAddToCart}
                        />
                    </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="mb-2 ml-5 text-3xl font-bold text-blue-600">Cart</h1>
                    <table className="text-left border-separate table-auto border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 && cart.map((item) => { 
                                const product = products.find(product => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>{product.price.toLocaleString('id-ID', {style:'currency', currency: "USD"})}</td>
                                        <td>{item.qty}</td>
                                        <td>${" "}{(item.qty * product.price).toLocaleString('id-ID', {style:'currency', currency: "IDR"})}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={3}>
                                    <b>Total Price</b>
                                </td>
                                <td>
                                    <b>
                                        {totalPrice.toLocaleString('id-ID', {style:'currency', currency: "USD"})}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}
