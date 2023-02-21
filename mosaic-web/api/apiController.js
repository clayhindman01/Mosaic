import axios from 'axios'

const url = "http://192.168.1.12:8080/mosaic/api/v1";

export const getUserByEmail = async (email, password, setUser, navigate) => {
    try {
        const response = await axios.get(`${url}/userEmail/${email}`);
        setUser(response.data)
        getPassword(password, response.data)? navigate("Mosaic"): null
      } catch (error) {
        console.error(error);
        setUser([]);
      }
}

export const createUser = async (user, setUser, navigate) => {
  try {
    const response = await axios.post(`${url}/addUser`, user)
    getUserByEmail(user.email);
    getPassword(password, response.data)? navigate("Mosaic"): null
  } catch (error) {
    console.error()
  }
}

export const getPassword = (password, response) => {

    if (password === response.password) return true
    return false
}