import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-header">
          <h1>Proyecto Inventario</h1>
          <p>Administración del sistema</p>
        </div>

        <LoginForm />

        <div className="login-footer">
          Sistema de Inventario
        </div>

      </div>
    </div>
  );
}