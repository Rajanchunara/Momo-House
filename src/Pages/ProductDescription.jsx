import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDescription() {
    const id = useParams()
    console.log(id);
    return (
        <div>ProductDescription</div>
    )
}

export default ProductDescription