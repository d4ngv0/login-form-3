

export default function LoginForm(){
    return (
        <div className="box-container">
            <div className="form-title-container">
                <h2 className="form-title">Login here</h2>
            </div>
            <form action="" id="login-account-form">
                <div className="input-container"><label htmlFor="">Username</label><input type="text" name="username" placeholder="Enter username" className="input"/></div>
                <div className="input-container"><label htmlFor="">Password</label><input type="password" name="password" placeholder="Enter password" className="input"/></div>
                <button id="submit-login" className="submit-btn">Login</button>
            </form>
        </div>
    )
}