import React from 'react'

export default function Login() {
    return (
        <>
            <div>
                <form>
                    <h3>Đăng nhập</h3>
                    <div>
                        <label htmlFor="user_name">Email</label>
                        <input type="text" name="ser_name" />
                    </div>
                    <div>
                        <label htmlFor="">Mật khẩu</label>
                        <input type="password" name="ser_name" />
                    </div>
                </form>
            </div>
        </>
    )
}
