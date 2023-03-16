import "./Login.css"
export const Login = () => {
  
    return (
        <form>
            <h3>Log In</h3>
            <label for="email">Email: </label>
            <input type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <br/>
            <label for="password">Password: </label>
            <input type="password" placeholder="Password Here" id="password" name="password"/>
            <br/>
            <button type="submit">Log In</button>
            <br/>
        </form>
    )
}