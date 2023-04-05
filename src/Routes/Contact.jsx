import { useState } from "react"
import { Form } from "../Components/Form"

export const Contact = () => {
  const [dataForm, setDataForm] = useState({name: "", email: ""});
  const onSubmit = (data) => {
    setDataForm(data);
    console.log("ESTA ES LA DATA: ", data);
  }
  return (
    <>
      <h1>Contáctanos</h1>
      {dataForm.name !== "" ? <h2 style={{textAlign: "center"}}>Gracias {dataForm.name}, te
contactaremos cuando antes vía mail</h2> : <Form onSubmit={onSubmit}/>}
    </>
  )
}
