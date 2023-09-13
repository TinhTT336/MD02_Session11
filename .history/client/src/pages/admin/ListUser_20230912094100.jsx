import React, { useEffect, useState } from 'react';
import axios from 'axios';// khong co dau ngoac nhon
import { notification } from 'antd';
import FormAddUser from '../../components/admin/manager-user/FormAddUser';
import FormEditUser from '../../components/admin/manager-user/FormEditUser';
import { formatDate } from '../../utils/formatData';

export default function ListUser() {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [idEdit, setIdEdit] = useState(null);
    // goi API lấy tất cả thông tin 
    const loadData = () => {
        axios.get("http://localhost:8000/users")
            .then(response => setUsers(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadData();
    }, [])

    // ham xoa du lieu
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/users/${id}`)
            .then(response => {
                if (response.status === 200) {
                    notification.success({
                        message: "Thành công!",
                        description: "Xoá tài khoản thành công"
                    });
                    loadData();
                }
            })
            .catch(error => console.log(error))
    }

    // ham hien form them moi
    const handleShow = () => {
        setShow(true);
    }

    // ham dong form them moi
    const handleClose = () => {
        setShow(false);
    }

    // ham hien form edit
    const handleShowEdit = (id) => {
        setShowEdit(true);
        setIdEdit(id);
    }

    // ham dong form edit
    const handleCloseEdit = () => {
        setShowEdit(false);
    }
    return (
        <>
            {/* Form them moi */}
            {show && <FormAddUser handleClose={handleClose} loadData={loadData} />}
            {/* Form edit */}
            {showEdit && <FormEditUser handleCloseEdit={handleCloseEdit} loadData={loadData} idEdit={idEdit} />}
            <div className='container d-flex align-items-center  flex-column m-3'>
                <div className='d-flex justify-content-between mb-3' style={{ width: "100%", gap: "20px" }}>
                    <button onClick={handleShow} className='btn btn-primary mb-3'>+ Thêm mới tài khoản</button>
                    <input type="text" name="" id="" className="form-control" placeholder='Nhập từ khoá tìm kiếm' />
                </div>
                <table className='table table-striped table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }} scope='col'>STT</th>
                            <th style={{ textAlign: "center" }} scope='col'>Tên</th>
                            <th style={{ textAlign: "center" }} scope='col'>Giới tính</th>
                            <th style={{ textAlign: "center" }} scope='col'>Ngày sinh</th>
                            <th style={{ textAlign: "center" }} scope='col'>Địa chỉ</th>
                            <th style={{ textAlign: "center" }} scope='col'>Email</th>
                            <th style={{ textAlign: "center" }} scope='col' colSpan={2}>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.user_name}</td>
                                <td>{user.gender === 0 ? "Nam" : (user.gender === 1 ? "Nữ" : "Khác")}</td>
                                <td>{formatDate(user.dateOfBirth)}</td>
                                <td>{user.address}</td>
                                <td>{user.email}</td>
                                <td onClick={() => handleShowEdit(user.id)}><i className="fa-solid fa-pen-to-square "></i></td>
                                <td onClick={() => handleDelete(user.id)}><i className="fa-solid fa-trash "></i></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
