import { useState } from "react"
import { useForm } from "../hooks/useForm"
import api from "../api/axiosInstance"
import { useNavigate } from "react-router-dom"



const initialForm = {
  username: '',
  password: ''
}

const formValidations = {
  username: [(value = '') => value.length > 0, 'El nombre de usuario es obligatorio.'],
  password: [(value = '') => value.length > 0, 'La contrasenia es obligatoria.']
}


export const LoginPage = () => {

  const navigate = useNavigate();

  if (localStorage.getItem('token')) {
    navigate("/");
  }

  const [formSubmitted, setformSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    username, password, formState, isFormValid, usernameValid, passwordValid, onInputChange, onResetForm
  } = useForm(initialForm, formValidations);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setformSubmitted(true);
    setLoading(true);
    if (!isFormValid) return;
    try {
      const response = await api.post("/auth/login", formState);

      localStorage.setItem('token', response.data.access_token);

      setLoading(false);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Usuario</label>
              <input
                type="text"
                className={`form-control ${usernameValid && formSubmitted ? 'is-invalid' : ''}`}
                id="username"
                name="username"
                value={username}
                onChange={onInputChange}
              />
              {usernameValid && formSubmitted && <div className="invalid-feedback">{usernameValid}</div>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className={`form-control ${passwordValid && formSubmitted ? 'is-invalid' : ''}`}
                id="password"
                name="password"
                value={password}
                onChange={onInputChange}
              />
              {passwordValid && formSubmitted && <div className="invalid-feedback">{passwordValid}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
