import { Fragment, useState } from "react"
import styles from "./Form.module.css"

export const Form = ({onSubmit}) => {
    
    
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[error, setError] = useState(false)
    const[isDisabled, setIsDisabled] = useState(false)

    const handleSubmit = (e) =>{
        console.log(name, email)
        if(name.trim() === '' || email.trim() === '' || !email.includes(".")){
            setError(true)
        }else{
            const data = {
                name,
                email
            }
            setError(false)
            onSubmit(data)
            setEmail("")
            setName("")
        }
        e.preventDefault();
    }
    
    const handleChangeName = (e) => {
        setName(e.target.value); 
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value); 
    }
    return(
        <>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
          // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`text-center card container ${styles.card}`}
        >
          <div className={`card-body ${styles.CardBody}`}>
            <form onSubmit={handleSubmit}>
              <input
                minLength={5}
                className={`form-control ${styles.inputSpacing}`}
                placeholder="Nombre"
                value={name}
                name="name"
                required
                onChange={(e) => handleChangeName(e)}
              />
              <input
                className={`form-control ${styles.inputSpacing}`}
                placeholder="Email"
                value={email}
                name="password"
                type="email"
                required
                onChange={(e) => handleChangeEmail(e)}
              />
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </form>
            {error && <p style={{color:"red", paddingTop: 10}}> Por favor verifique su información nuevamente </p>}
          </div>
        </div>
      </>
    )
}