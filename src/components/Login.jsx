import "./Login.css"
export const Login = () => {
  
    return (
        <form>
            <label for="email">email</label>
            <input type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label for="password">password</label>
            <input type="password" placeholder="Password Here" id="password" name="password"/>
            <button type="submit"><h3>Log In</h3></button>
        </form>
    )
}