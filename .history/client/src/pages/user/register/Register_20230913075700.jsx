import React, { useState } from 'react'
import "./register.css";
import axios from 'axios';
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
        confirmPassword: "",
    });

    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // ham validate du lieu nhap vao
    const validateData = (nameInput, valueInput) => {
        switch (nameInput) {
            case "user_name":
                if (!valueInput) {
                    setUsernameError("Tên không được để trống");
                    return;
                } else {
                    setUsernameError("");
                }
                break;
            case "email":
                if (!valueInput) {
                    setEmailError("Email không được để trống");
                    return;
                } else {
                    setEmailError("");
                }
                break;
            case "password":
                if (!valueInput) {
                    setPasswordError("Mật khẩu không được để trống");
                    return;
                } else if (valueInput.length < 4) {
                    setPasswordError("Mật khẩu tối thiểu 4 ký tự");
                    return;
                } else {
                    setPasswordError("");
                }
                break;
            case "confirmPassword":
                if (!valueInput) {
                    setConfirmPasswordError("Mật khẩu không được để trống")
                    return;
                } else if (valueInput !== user.password) {
                    setConfirmPasswordError("Mật khẩu không khớp");
                    return;
                } else {
                    setConfirmPasswordError("");
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
        // khi onChange thi goi den ham validate
        validateData(name, value);
        setUser({ ...user, [name]: value })
    }

    // ham submit
    const handleSubmit = (e) => {
        e.preventDefault();
        validateData("user_name", user.user_name)
        validateData("email", user.email)
        validateData("password", user.password)
        validateData("confirmPassword", user.confirmPassword)
        // console.log(user);
        if (user.user_name && user.email && user.password && user.confirmPassword) {
            const newUser = {
                user_name,
                gender,
                dateOfBirth,
                email,
                address,
                password,
                role: 1,
                // confirmPassword
            }
            // goi API 
            axios.post("http://localhost:8000/register", newUser)
                .then(response => console.log(response)
                    // {
                    //     if (response.status === 200) {
                    //         // luu du lieu len local
                    //         localStorage.setItem("userRegister", JSON.stringify(response.data.user));
                    //         //  chuyen trang
                    //         if (response.data.user.role === 0) {
                    //             console.log("Chuyen vao trang admin");
                    //         } else {
                    //             console.log("Chuyen vao trang user");
                    //         }
                    //     }
                    // }
                )
                .catch(error => console.log(error.response));
            // if (error.response.data === "Incorrect password" || error.response.data === "Password is too short" || error.response.data === "Cannot find user") {
            //     notification.error({
            //         message: "Cảnh báo",
            //         description: "Email hoặc mật khẩu không đúng",
            //     })
            // }
            // })
        }
    }
    return (
        <>
            <div className='container-login'>
                <form className='form-login' onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <h3>Đăng ký</h3>
                        <div className='btn btn-close'></div>
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="user_name">Tên đăng ký <span className="text-danger">*</span></label>
                        <input className={`form-control ${usernameError && "border - err"}`} type="text" name="user_name" id="user_name" placeholder='Nhập tên đăng ký'
                            onChange={handleInputChange} onBlur={handleInputChange} />
                        {usernameError && <div className='text-err mt-1'>{usernameError}</div>}
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="email">Email <span className="text-danger">*</span></label>
                        <input className={`form-control ${emailError && "border - err"}`} type="text" name="email" id="email"
                            placeholder='Nhập email' onChange={handleInputChange} onBlur={handleInputChange} />
                        {usernameError && <div className='text-err mt-1'>{emailError}</div>}
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
                        <input className={`form-control ${passwordError && "border - err"}`} type="password" name="password" id="password" placeholder='Nhập mật khẩu'
                            onChange={handleInputChange} onBlur={handleInputChange} />
                        {passwordError && <div className='text-err mt-1'>{passwordError}</div>}
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label' htmlFor="confirmPassword">Xác nhận mật khẩu <span className="text-danger">*</span></label>
                        <input className={`form-control ${confirmPasswordError && "border - err"}`} type="password" name="confirmPassword" id="confirmPassword" placeholder='Nhập mật khẩu'
                            onChange={handleInputChange} onBlur={handleInputChange} />
                        {confirmPasswordError && <div className='text-err mt-1'>{confirmPasswordError}</div>}
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
