import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'
import Spin from '../components/Spin'

function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        setLoading(true)
        try {
            // getting products from an api
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
            setLoading(false)
        } catch (error) {
            console.log("Error in getting products")
            setLoading(false)
            console.log(error)
            return;
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

  return (
    <div className='container'>
        <Navbar />
        <h2 className='heading'>Latest Products</h2>
        <div>
        <div className='card-container'>
        {loading ? (
            <div className='spin-container'>
                <Spin />
            </div>
        ) : 
        products.length > 0 && products.map(item => (
            <ProductCard item={item} key={item.id} />
        ))}
        </div>
        </div>
    </div>
  )
}

export default Home