const URI = 'http://localhost:3000/api/';

const get = async (endpoint) => {
  try {
    const response = await fetch(URI + endpoint);
    return await response.json();
  } catch (error) {
    console.error('Error en GET:', error);
    return null;
  }
};

const post = async (endpoint, payload) => {
  try {
    const response = await fetch(URI + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return await response.json();
  } catch (error) {
    console.error('Error en POST:', error);
    return null;
  }
};

const put = async (endpoint, payload) => {
  try {
    const response = await fetch(URI + endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return await response.json();
  } catch (error) {
    console.error('Error en PUT:', error);
    return null;
  }
};

const remove = async (endpoint) => {
  try {
    const response = await fetch(URI + endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error en DELETE:', error);
    return null;
  }
};

const base = { get, post, put, remove };
export default base;
