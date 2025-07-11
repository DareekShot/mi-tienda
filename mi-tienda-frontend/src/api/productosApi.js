export async function obtenerProductos() {
  try {
    const response = await fetch("http://localhost:3000/api/productos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
}

export async function obtenerProductoPorId(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/productos/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener producto:", error);
    return null;
  }
}
