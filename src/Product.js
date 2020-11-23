import React from 'react'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><span role="img" aria-label="Star">🌟</span></p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Aggiungere al cestino</button>
        </div>
    )
}

export default Product
