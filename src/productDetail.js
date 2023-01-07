import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { get } from './apiService'
import { setProductList, setProductDetail } from './slice/productSlice'


function ProductDetail() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()

    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        console.log(params, "Params")
        get({
            url: `https://fakestoreapi.com/products/${params.id}`
        }).then((response) => {
            console.log(response, 'ProductDetail')
            setProductDetail(response.data)
        })
    }, [])

    return (
        <div className="App">
            <div>Product Detail</div ><br></br>
            <Link to="/productList">Back</Link>
            <div style={{ padding: 20 }}>
                <img src={productDetail.image}></img>
                <h1>{productDetail.title}</h1>
                <p>₹{productDetail.price}</p>
                <p>{productDetail.description}</p>
                {/* <p>{productDetail.description}</p> */}
            </div>
        </div>
    );
}

export default ProductDetail;
