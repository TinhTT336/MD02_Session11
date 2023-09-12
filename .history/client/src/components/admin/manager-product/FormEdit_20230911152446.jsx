import React, { useEffect, useState } from 'react'

export default function FormEdit({ idEdit, handleCloseFormEdit, loadData }) {
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

    // goi API lay thong tin 1 san pham theo id
    useEffect(() => {
        // call API
        fetch(`http://localhost:8000/products/${idEdit}`)
            .then((response) => response.json())//ep kieu ve dang json
            .then((response) => setProduct(response))//lay du lieu
            .catch((error) => console.log(error))//bat loi
    }, []);

    // ham cap nhat san pham
    const handleSubmit = (e) => {
        e.preventDefault();
        // goi API sua
        fetch(`http://localhost:8000/products/${idEdit}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",//ep kieu dau vao tu js sang json
            },
            body: JSON.stringify({ ...product, price: parseInt(product.price) }),
        })
            .then((response) => {
                // kiem tra du lieu tra ve
                if (response.status === 200) {
                    // hien thi notification thanh cong
                    notification.success({
                        message: "Thanh cong !",
                        description: "Cap nhat san pham thanh cong"
                    })
                    // an form them moi
                    handleCloseFormEdit();
                    loadData();
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className='product-container'>
                <form className='form-container'>
                    <div className='mb-3'>
                        <h2> Cập nhật sản phẩm</h2>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="product_name" className="form-label">
                            Tên sản phẩm
                        </label>
                        <input type="text" className="form-control" value={product.product_name} name="product_name" id="product_name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Giá
                        </label>
                        <input type="text" className="form-control" value={product.price} name='price' id='price' onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="from">
                            Xuất xứ
                        </label>
                        <input type="text" className="form-control" value={product.from} name='from' id='from' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary me-2">
                        Cập nhật
                    </button>
                    <button onClick={handleCloseFormEdit} type="button" className="btn btn-danger">
                        Huỷ
                    </button>
                </form>

            </div>

        </>
    )
}
