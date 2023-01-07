import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { get } from './apiService'
import { setProductList, setProductDetail } from './slice/productSlice'


function ProductList() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let { productList, selectedProductDetail } = useSelector((state => state.productSlice))

    useEffect(() => {
        get({
            url: 'https://fakestoreapi.com/products'
        }).then((response) => {
            console.log(response, 'Products')
            dispatch(setProductList(response.data))
        })
    }, [])

    return (
        <div className="App">
            <table>
                <th>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Action</td>
                </th>
                {

                    productList?.map((item) => {
                        return (
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <div onClick={() => {
                                        navigate(`/productList/${item.id}`)
                                    }}>View</div>
                                </td>
                            </tr>
                        )
                    })

                }

            </table>



        </div>
    );
}

export default ProductList;
