import React, { useState } from 'react'
import "./register.css";
export default function Register() {
    const [gender, setGender] = useState(0);

    // danh sach gender
    const listGender = [
        {
            id: 0,
            title: "Nam"
        },
        {
            id: 1,
            title: "Nữ"
        },
        {
            id: 2,
            title: "Khác"
        }
    ]

    const [user, setUser] = useState({
        user_name: '',
        gender: 0,
        dateOfBirth: "",
        email: '',
        address: "",
        password: '',
        role: 1,
    });
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // ham validate du lieu nhap vao
    const validateData = (nameInput, valueInput) => {
        switch (nameInput) {
            case "user_name":
                if (!valueInput) {
                    setUsernameError(true);
                } else {
                    setUsernameError(false);
                }
                break;
            case "email":
                if (!valueInput) {
                    setemailError(true);
                } else {
                    setemailError(false);
                }
                break;
            case "password":
                if (!valueInput) {
                    setPasswordError(true);
                } else {
                    setPasswordError(false);
                }
                break;
            default:
                break;
        }
    }

    // ham lay du lieu tu o Input
    const handleInputChange = (e) => {
        // lay name va value tu o input
        const { name, value } = e.target;
        // setUser({ ...user, [name]: value })
        // khi onChange thi goi den ham validate
        validateData(name, value)

    }
    return (
        <>
            <div className='container-login'>
                <form className='form-login'>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <h3>Đăng ký</h3>
                        <div className='btn btn-close'></div>
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="user_name">Tên đăng ký <span className="text-danger">*</span></label>
                        <input className={`form-control ${usernameError && border - err}`} type="text" name="user_name" id="user_name" placeholder='Nhập tên đăng ký'
                            onChange={handleInputChange} />
                        {usernameError && <div className='text-err mt-1'>Tên đăng ký không được để trống</div>}
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="email">Email <span className="text-danger">*</span></label>
                        <input className={`form-control ${emailError && border - err}`} type="text" name="email" id="email" placeholder='Nhập email' onChange={handleInputChange} />
                        {usernameError && <div className='text-err mt-1'>Email không được để trống</div>}
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="gender" className="form-label me-4">
                            Giới tính
                        </label>
                        <div className='d-flex'>
                            {listGender.map(g => (
                                <div className="form-check me-3" key={g.id}>
                                    <input
                                        className="form-check-input"
                                        type="radio" checked={g.id === gender}
                                        name="gender" onChange={() => setGender(g.id)}
                                    />
                                    <label className="form-check-label" htmlFor="gender">{g.title}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='form-group mb-2 mt-2'>
                        <label className='form-label' htmlFor="dateOfBirth">Ngày sinh</label>
                        <input className='form-control' type="date" name="dateOfBirth" id="dateOfBirth" placeholder='Nhập ngày sinh'
                            onChange={handleInputChange} />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label' htmlFor="address">Địa chỉ</label>
                        <input className='form-control' type="text" name="address" id="address" placeholder='Nhập địa chỉ'
                            onChange={handleInputChange} />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label' htmlFor="password">Mật khẩu <span className="text-danger">*</span></label>
                        <input className={`form-control ${passwordError && border - err}`} type="password" name="password" id="password" placeholder='Nhập mật khẩu'
                            onChange={handleInputChange} />
                        {passwordError && <div className='text-err mt-1'>Mật khẩu không được để trống</div>}
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-primary w-100'>Đăng ký</button>
                    </div>
                    <p className='p-2 text-center' >Bạn đã có tài khoản? <a href='#'>Đăng nhập</a> </p>

                </form>
            </div>
        </>
    )
}
