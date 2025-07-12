const BASE_URL = "http://localhost:3000/api/users";

export async function obtenerUsuarios() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Error HTTP: " + response.status);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
}

export async function obtenerUsuarioPorId(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error("Error HTTP: " + response.status);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return null;
  }
}

export async function crearUsuario(usuario) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) throw new Error("Error HTTP: " + response.status);
    return await response.json();
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return null;
  }
}

export async function actualizarUsuario(usuario) {
  try {
    const response = await fetch(BASE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) throw new Error("Error HTTP: " + response.status);
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return null;
  }
}

export async function eliminarUsuario(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error HTTP: " + response.status);
    return await response.json();
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return null;
  }
}
