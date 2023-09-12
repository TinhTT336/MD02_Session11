import React, { useEffect, useState } from 'react'
import { formatMoney } from '../../utils/formatData';
import FormAdd from '../../components/admin/manager-product/FormAdd';

export default function ListProduct() {
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    // console.log(products);
    // goi API lay thong tin tat ca san pham
    const loadData = () => {
        fetch("http://localhost:8000/products")
            .then((response) => response.json())// ep kieu ve dang json
            .then((response) => setProducts(response)) // noi co du lieu tra ve
            .catch((error) => console.log(error))// bat loi
    }
    // khi lam viec voi components khong duoc goi ham truc tiep ma su dung useEffect
    // useEffect dung khi can hien thi du lieu ra giao dien
    useEffect(() => {
        loadData();
    }, [])

    /**
     * ham xoa thong 1 product theo id
     * @param {*} id id cua product can xoa
     * Author: TinhTT (11/09/2023)
     */
    const handleDelete = (id) => {
        fetch(`http://localhost:8000/products/${id}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.status === 200) {
                loadData();
            }
        })
            .catch((error) => console.log(error))
    }

    // ham hien thi form them moi
    const handleShowForm = () => {
        setShowForm(true);
    }

    // ham dong form them
    const handleCloseForm = () => {
        setShowForm(false);
    }
    return (
        <>
            {showForm && <FormAdd handleCloseForm={handleCloseForm} loadData={loadData} />}
            <div className='w-75 d-flex align-items-center justify-content-center flex-column m-3'>
                <div >
                    <button onClick={handleShowForm} className='btn btn-primary mb-2 btn-add' style={{ textAlign: "right" }}>+ Them moi</button>
                </div>
                <table className='table table-striped table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th scope='col'>STT</th>
                            <th scope='col'>Ten san pham</th>
                            <th scope='col'>Gia</th>
                            <th scope='col'>Xuat xu</th>
                            <th scope='col' colSpan={2}>Chuc nang</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((pro, index) => (
                            <tr key={pro.id}>
                                <td>{index + 1}</td>
                                <td>{pro.product_name}</td>
                                <td>{formatMoney(pro.price)}</td>
                                <td>{pro.from}</td>
                                <td><i className="fa-solid fa-pen-to-square"></i></td>
                                <td onClick={() => handleDelete(pro.id)}><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
