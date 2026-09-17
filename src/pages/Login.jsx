import LoginForm from "../components/LoginForm";

const APP_NAME =
  import.meta.env.VITE_APP_NAME || "Proyecto Inventario";

const APP_VERSION =
  import.meta.env.VITE_APP_VERSION || "1.0.0";

export default function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-header">
          <h1>{APP_NAME}</h1>
          <p>Administración del sistema</p>
        </div>

        <LoginForm />

        <div className="login-footer">
          <div>Sistema de Inventario</div>
          <div>Versión {APP_VERSION}</div>
        </div>

      </div>

    </div>
  );
}