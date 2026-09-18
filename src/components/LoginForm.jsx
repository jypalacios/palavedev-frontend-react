import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const { iniciarSesion } = useAuth();

  const [nomLogin, setNomLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await iniciarSesion(nomLogin, password);

      navigate("/home", { replace: true });

    } catch (error) {

      setError(
        error.message || "Usuario o contraseña incorrectos"
      );

    } finally {

      setLoading(false);

    }
  }

  function limpiarFormulario() {
    setNomLogin("");
    setPassword("");
    setError("");

    // Devuelve el foco al campo usuario
    document.getElementById("nom_login")?.focus();
  }

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >

      <div className="form-group">

        <label htmlFor="nom_login">
          Usuario
        </label>

        <input
          id="nom_login"
          type="text"
          value={nomLogin}
          onChange={(event) =>
            setNomLogin(event.target.value)
          }
          placeholder="Ingrese su usuario"
          autoComplete="username"
          disabled={loading}
          required
        />

      </div>

      <div className="form-group">

        <label htmlFor="password">
          Contraseña
        </label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          placeholder="Ingrese su contraseña"
          autoComplete="current-password"
          disabled={loading}
          required
        />

      </div>

      {error && (
        <div className="login-error">
          {error}
        </div>
      )}

      <div className="login-buttons">

        <button
          type="submit"
          className="login-button"
          disabled={loading}
        >
          {loading ? "Validando..." : "Ingresar"}
        </button>

        <button
          type="button"
          className="login-clear-button"
          onClick={limpiarFormulario}
          disabled={loading}
        >
          Limpiar
        </button>

      </div>

    </form>
  );
}