import { useNavigate } from "react-router-dom";

import { useAuth } from "../auth/AuthContext";


export default function MainMenu() {

    const {
        session,
        cerrarSesion
    } = useAuth();


    const navigate =
        useNavigate();


    function logout() {

        cerrarSesion();

        navigate(
            "/login",
            { replace: true }
        );
    }


    return (

        <div>

            <header>

                <h1>
                    Proyecto Inventario
                </h1>

                <div>

                    Usuario:
                    {" "}
                    <strong>
                        {session.nom_login}
                    </strong>

                    {" | "}

                    Rol:
                    {" "}
                    <strong>
                        {session.nom_rol}
                    </strong>

                    {" "}

                    <button
                        onClick={logout}
                    >
                        Cerrar sesión
                    </button>

                </div>

            </header>


            <main>

                <h2>
                    Menú principal
                </h2>


                <div className="menu-grid">

                    <button>
                        Usuarios
                    </button>

                    <button>
                        Inventario
                    </button>

                    <button>
                        Compras
                    </button>

                    <button>
                        Ventas
                    </button>

                </div>

            </main>

        </div>
    );
}