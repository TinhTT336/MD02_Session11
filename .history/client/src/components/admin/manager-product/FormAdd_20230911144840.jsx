import React, { useState } from 'react'
import "./product.css";
import { notification } from "antd";
;
export default function FormAdd({ handleCloseForm, loadData }) {
    const [product, setProduct] = useState({
        product_name: "",
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
        if (product.product_name !== "" && product.price !== 0 && product.from !== "") {
            // goi API them moi
            fetch("http://localhost:8000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",//ep kieu dau vao tu js sang json
                },
                body: JSON.stringify({ ...product, price: parseInt(product.price) }),
            }).then((response) => {
                // kiem tra du lieu tra ve
                if (response.status === 201) {
                    // hien thi nitification thanh cong
                    notification.success({
                        message: "Thanh cong !",
                        description: "Them moi san pham thanh cong"
                    })
                    // an form them moi
                    handleCloseForm()
                    handleClose();
                    loadData();
                }
            })
                .catch((error) => console.log(error))
        }
    }

    return (
        <>
            <div className='product-container'>
                <form className='form-container' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <h2>Thêm mới sản phẩm</h2>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="product_name" className="form-label">
                            Tên sản phẩm
                        </label>
                        <input type="text" className="form-control" name="product_name" id="product_name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Giá
                        </label>
                        <input type="text" className="form-control" name='price' id='price' onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="from">
                            Xuất xứ
                        </label>
                        <input type="text" className="form-control" name='from' id='from' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary me-2">
                        Thêm mới
                    </button>
                    <button onClick={handleCloseForm} type="button" className="btn btn-danger">
                        Huỷ
                    </button>
                </form>

            </div>

        </>
    )
}
