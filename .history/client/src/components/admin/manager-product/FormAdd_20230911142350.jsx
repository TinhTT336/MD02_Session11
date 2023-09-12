import React, { useState } from 'react'
import "./product.css";

export default function FormAdd() {
    const [product, setProduct] = useState({
        productName: "",
        price: 0,
        from: "",
    })

    // ham lay gia tri tu cac o input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    }

    // ham them moi san pham
    const handleSubmit = (e) => {
        e.preventDefault();
        // goi API them moi
        fetch("http://localhost:8000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",//ep kieu dau vao tu js sang json
            },
            body: JSON.stringify(product),
        }).then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    return (
        <>
            <div className='product-container'>
                <form className='form-container' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <h2>Thêm mới sản phẩm</h2>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="productName" className="form-label">
                            Tên sản phẩm
                        </label>
                        <input type="text" className="form-control" name="productName" id="productName" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Giá
                        </label>
                        <input type="text" className="form-control" name='price' id='price' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="from">
                            Xuất xứ
                        </label>
                        <input type="text" className="form-control" name='from' id='from' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary me-2">
                        Thêm mới
                    </button>
                    <button type="button" className="btn btn-danger">
                        Huỷ
                    </button>
                </form>

            </div>

        </>
    )
}
