import React from "react";
import STYLE from "./netflix.module.css"
   
const Netflix=()=>{
    return(
        <div className={STYLE.mainBlock}>  
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAB2CAMAAACOP+21AAAAbFBMVEUAAADjCRTmCRTUCBM0AgXrCRWCBQvuCRV5BQrYCBMYAQGhBg5iBAgJAABtBAo3AgWPBgyJBQwsAgSYBg3NCBI9AgYmAQPGCBG7BxCqBg8wAgQpAQRLAwa2BxD0CRUTAAEeAQNFAgZRAwdbBAj1nvdHAAAEo0lEQVR4nO2Z63ayOhBAk0DAKKAIFrBeUN//Hb8wQ7i32naW65y1Zv8phEvYZhgmqRAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw/xvqX3Ltt2JfQAPbP0Rx9gen7TZK6/21Gnbh237aE7drsedffhdIxz39+7Isbvwr6yM53kywp1tYfdMAdtJc6DHlLbzz3Fbc+XNqheTUzN7eQb3fYw7y/rOgmaz7UqIUw5XRgRCgVZK6bIV8uyOMmgaqhGeFdpP2pS6WKG1GbeFG3v5prnvZfKE0BgmzeYNL2pPyDR0QeAjAiUt5uCEpGzvu9JyiMoboXGbJQShcZsGoea+4VQIGkFInJttVcH23sCBFZ2QCt4u9Lg0d/Xg9V2FzbasCYXK9bLQYsi1in3IydGp4UtCwutHBQZI7yh8WiGp/EUh1b/u5adLCjkKdUmhFcpHSeFrId0K7aCD3G5FGPZ3SiH8eWZCOhWxo2nEDTgrP4q2FYW8/sz4WyE3Qne4TN/c63Qm8elGyCwLLYYBnuW7XRQyS8/+nZAowWMjTvAElxOpkFSPtwslGHMfGfwlydlDoc3bhQQG+0rhH2qhYv92oQ1ka0hxg9sRCUHyebPQqf92qYzIZyBU/Ulo+g48T9tCXEvXudSf5EJSLwll/gEY1cHLIxQlQLR+ItSP0PjXJBeyH+2F0sczQPpUSIbARW9fF1p3P+akLCcRUuWSEFYz49CDosVMhRz+60KiajspJxOnvwphpjH341fFqZoJzUeoPfNHQqcQL6LK2U5Ib2Dcg/3rQjQjtC6wjKPzaYV2JZRn/lfV9kLITUdI4TsUqmfvkB4I1TkESE4uFGTQ/21ebeeA9zwpmBQJ6idCwxGKMOQkxdx7JJSeMHkW82p7gb99h4ZCeVvr02VtJ4S3Np787Yf1N5WCuLu6y2wFFU4oDbsE8D6hyn0zaJYTACfULxe8T+hgnBBhWnBCfV31PqFdFxVS3aiFRKDfJNSnbYkfIeiULC10QnfzI6HZd2hR6LHUOJ6xeilOXI/UQsLF3ELajuvj9hCPhaaVwpKQTh+P+/102x7reCYUQ5VghwYzN+mMFZ57FS4IVWm2qc5lWeRF/xO+HHJSh0rZj0GeF8FMKML8dmgnriW5kNBzIVv66MFC40DopRFyQaxUWM2EzhBqhQ12OOlCVHAPhM56LtQ/VD4Wem2EOvRMqIaA0JGbuGqiSfhAKPmR0HCE+v9Z9EL6iRAuXhXN1DvFCrWmFtpiZfWF0CDkjFajLFfYl8SbvAMbrL21hpAdCmHa/sRsDR3H2EMiKBgI4ZJsJ9QszGvdzKovdlIgy34Z4xFFNntd3W4Mqw6TauwWJckq2NmUYhOKURcQqkLt/j+Eq3ES1yrOWpJVqEOhh4YsgMGTmKI4V1mQPA5k8+Moq85F3nxtaw/c2vfmBtEQ7r+9+EVAKGxnCfpiJ0Bn7KUmuf0SsMCfppuqaP/PJmr4JIUBxd2DJsrdtOdwrNfX78+n5NoNfWpDQ2uS5e1VUWVpQjcd+R3XUxRkVUmxmFXXBDch4r/0LAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzD/JR/7FNDyqCMBjkAAAAASUVORK5CYII="alt="logo" />
       <ul>
    <li><a href="home">HOME</a></li>
    <li><a href="about">ABOUT</a></li>
    <li><a href="services">SERVICES</a></li>
    <li><a href="movies">MOVIES</a></li>
    <li><a href="contact">CONTACT</a></li>
        </ul>
    < div className={StyleSheet.searchbar}><input type="text" name="" id="" placeholder="search" /></div>
    < div className={StyleSheet.searchbar}><input type="text" name="" id="" placeholder="Login" /></div>
        </div>  )
} 


export default Netflix