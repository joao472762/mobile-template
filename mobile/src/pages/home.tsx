import userIcon from '../assets/images/userIcon.png'
import lockpadIcon from '../assets/images/lockpadIcon.png'
import facebookIcon from '../assets/images/facebookIcon.png'
import twitterIcon from '../assets/images/twitterIcon.png'
import googleImg from '../assets/images/google.jpg'

import '../styles/home.css'

export function Home(){
    return(
        <div id="home">
            <header><h1>Login</h1></header>
            <main>

                <form action="">

                    <h2>Username</h2>

                    <input type="text" placeholder='Type your username'/>
                    <img src={userIcon} alt="usario anonimo" />

                    <h2>Password</h2>
                    <input type="password" placeholder='Type your password' />
                    <img src={lockpadIcon} alt="cadeado" />

                    <span className='forgive'>Forgot password?</span>
                    <button>
                        Login
                    </button>
                </form>

                <div className='separator'>Or Sign Up Ussing</div>

                <section className='signIn'>

                    <div className="login">
                        <span className='srOnly'>entrar com o facebook</span>
                        <img src={facebookIcon} alt="icone do facebook" />
                    </div>

                    <div className="login">
                        <span className='srOnly'>entrar com o twitter</span>
                        <img src={twitterIcon} alt="icone do twiter" />
                    </div>

                    <div className="login ">
                        <span className='srOnly'>entrar com o google</span>
                        <img src={googleImg} className='googleImg' alt="icone do gogle" />
                    </div>

                </section>
            </main>
            <footer></footer>
        </div>
    )
}