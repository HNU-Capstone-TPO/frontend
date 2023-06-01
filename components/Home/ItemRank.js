import { useEffect, useState } from 'react';

const ItemRank = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem('product')) || [];
        for(let i=0; i<savedProducts.length; i++) {
            for(let j=0; j<savedProducts[i].length;j++){
                if(savedProducts[i][j]!==null)
                setProducts((prevState)=> [...prevState, savedProducts[i][j].name])
            }
        }
      }, []);
    const productsFrequency = {};

    for (const product of products){
        productsFrequency[product] = (productsFrequency[product] || 0) +1;
    }
    const sortedProducts = Object.entries(productsFrequency).sort((a, b) => b[1] - a[1]);
    return (
        <div>
            <h1>상품 랭킹</h1>
            <ol>
            {sortedProducts.map(([product, frequency], index) => (
                <li>{product} {frequency}</li>
            )
            )}
            </ol>
        </div>
    )
}

export default ItemRank;