
const MyToysRow = ({toy}) => {
    const { pictureUrl, name, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, description } = toy;

    return (
        <tr>
                <td>{pictureUrl} </td>
                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{sellerEmail}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{availableQuantity}</td>
                <td>{description}</td>
        </tr>
    );
};

export default MyToysRow;