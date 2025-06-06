const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p>Email: <input type="text" id="txtEmail"></p>
    <p>Password: <input type="password" id="txtPass"></p>
    <p><button onclick='showHome()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
    <div class='App-Container'>
    <h1>Register Form</h1>
    <p>Name: <input type="text" id="txtName"></p>
    <p>Email: <input type="text" id="txtEmail"></p>
    <p>Password: <input type="password" id="txtPass"></p>
    <button>Register</button>
    <p><button onclick='showLogin()'>Already have an Account?</button></p>
    </div>
    `
    root.innerHTML = str
}


const showHome = ()=>{
    let str = `
    <center>
    <h1>Welcome</h1>
    <p>You are now on the Home Page</p>
    </center>
    `
    root.innerHTML = str
}