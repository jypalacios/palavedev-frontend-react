const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function login(nom_login, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nom_login,
            password
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail || "Error de autenticación");
    }

    return data;
}