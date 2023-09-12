import React, { useEffect, useState } from 'react'

export default function ListProduct() {
    const [products, setProducts] = useState([]);
    // console.log(products);
    // goi API lay thong tin tat ca san pham
    const loadData = () => {
        fetch("http://localhost:8000/products")
            .then((response) => response.json())// ep kieu ve dang json
            .then((response) => setProducts(response)) // noi co du lieu tra ve
            .catch((error) => console.log(error))// bat loi
    }
    // khi lam viec voi components khong duoc goi ham truc tiep ma su dung useEffect
    useEffect(() => {
        loadData();
    }, [])
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ten san pham</th>
                        <th>Gia</th>
                        <th>Xuat xu</th>
                        <th colSpan={2}>Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((pro, index) => (
                        <tr key={pro.id}>
                            <td>{index + 1}</td>
                            <td>{pro.product_name}</td>
                            <td>{pro.price}</td>
                            <td>{pro.from}</td>
                            <td>Sua</td>
                            <td onClick={() => handleDelete(pro.id)}>Xoa</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
