import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Spin from '../components/Spin'

function Product() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()

  const fetchProduct = async () => {
    setLoading(true)
    try {
      // getting a single product detail
      const res = await fetch("https://fakestoreapi.com/products/" + id)

      const data = await res.json()
          setProduct(data)
          setLoading(false)
    } catch (error) {
      console.log("Error in getting product detail")
      console.log(error)
      setLoading(false)
      return;
    }
  }

  const handleAddToCart = () => {
    // add to cart logic

    // redirect to cart page
    navigate("/cart")
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div className='container'>
      <Navbar />
    {loading ? (
      <div className='spin-container'>
        <Spin />
      </div>
    ) :
    <div className='product'>
      <div className='product-img'>
        <img src={product?.image} alt={product?.image} />
      </div>
      <p>{product?.title}</p>
      <div>
        <p>Price &#x24;{product?.price}</p>
        <p>{product?.category}</p>
      </div>
      <button
      className='btn'
      onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <h5>Product Description</h5>
      <p>{product?.description}</p>
    </div>
    }
    </div>
  )
}

export default Product