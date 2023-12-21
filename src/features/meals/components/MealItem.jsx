export const MealItem = ({id,name,price,description,image,handleButton}) => {

    return(
        <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${image}`} alt={image} />
                <h3>{name}</h3>
                <p className="meal-item-price">
                    {price} zł
                </p>
                <p className="meal-item-description">
                    {description}
                </p>
                <div className="meal-item-actions">
                    <button className="button" onClick={() => handleButton(id)}>Add to Cart</button>
                </div>
            </article>
        </div>
    )
}