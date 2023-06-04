
import { useState } from "react";
import { api } from "../../services/api"
import { FormRegister } from "./styles";
import { useNavigate } from "react-router-dom";
import { schema } from "./validatorRegister";
import { z } from "zod";

export const Register = () => {
  const navigate = useNavigate()

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const register = async () => {
    try {
      const values = {
        name: nome,
        email,
        password: senha,
        phone: telefone,
      };
  
      schema.parse(values);
      const response = await api.post("/clients", values);
      console.log(response.data);

      setNome("");
      setEmail("");
      setSenha("");
      setTelefone("");
      navigate("/");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const zodError = error as z.ZodError;
        const errorMessages = zodError.issues.map((issue) => issue.message);
        setErrors(errorMessages);
      } else {
        console.error(error);
      }
    }
  };


  return (
    <FormRegister>
         <div className="divContainer">
        <h2>Cadastro</h2>
        {errors.length > 0 && (
          <div className="errorContainer">
            <ul>
              {errors.map((errorMessage, index) => (
                <li key={index}>{errorMessage}</li>
              ))}
            </ul>
          </div>
        )}
      <form onSubmit={(event) => {
          event.preventDefault();
          register();
        }}>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
          <label>Email:</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <label>Senha:</label>
          <input type="password" value={senha} onChange={(event) => setSenha(event.target.value)} />
          <label>Telefone:</label>
          <input type="text" value={telefone} onChange={(event) => setTelefone(event.target.value)} />
        <button className="buttonSubmit" type="submit">Cadastrar</button>
      </form>
      </div>
      </FormRegister>
  );
};

export default Register;

