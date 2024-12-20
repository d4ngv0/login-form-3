

export default function SignUpForm(){
    return (
        <div className="box-container">
            <div className="form-title-container">
                <h2 className="form-title">Create an account</h2>
            </div>
            <form action="" id="create-account-form">
                <div className="input-container"><label htmlFor="">Username</label><br></br><input type="text" name="username" placeholder="Enter username" className="input"/></div>
                <div className="input-container"><label htmlFor="">Email</label><br></br><input type="email" name="email" placeholder="Enter email" className="input"/></div>
                <div className="input-container"><label htmlFor="">Password</label><br></br><input type="password" name="password" placeholder="Enter password" className="input"/></div>
                <button id="submit-signup" className="submit-btn">Signup</button>
            </form>
        </div>
    )
}