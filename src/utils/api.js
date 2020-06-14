import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }
// 1/10 endpoints used
  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      // Instructor is logging you out because this failed
      helpMeInstructor(err);
      return err;
    }
  }
// 2/10 endpoints used
  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
  // 3/10 endpoints used
  async createUser(credentials) {
    try {
      // console.log(credentials);
      const result = await this.axiosInstance.post("/users", credentials);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
  // 4/10 endpoints used
  async getListOfUsers() {
    try {
      const result = await this.axiosInstance.get("/users?limit=100&offset=0");
      // console.log(result)
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }  
  // 5/10 endpoints used
  async addProfileImage(username, profileImage) {
    // console.log(username, profileImage)
    try {
      const data = new FormData()
      data.append('picture', profileImage)
      const result = await this.axiosInstance.put("/users/"+username+"/picture", data);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
  // 6/10 endpoints used
  async showProfileImage(username) {
    try {
      const result = await this.axiosInstance.get("/users/"+username+"/picture");
      // console.log( typeof result)
      // console.log(btoa(unescape(encodeURIComponent(result))))
      // console.log( new Blob([result], {type: "image/png"}))
      return result
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
 // 7/10 API endpoints
  async deleteProfile(username) {
    try {
      console.log(username)
      const result = await this.axiosInstance.delete("/users/" + username) 
      console.log(result)
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
 // 8/10 API endpoints
  async getListOfMessages() {
    try {
      const result = await this.axiosInstance.get("/messages?limit=100&offset=0");
      // console.log(result)
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
 // 9/10 API endpoints
  async createMessage(message) {
    try {
      const result = await this.axiosInstance.post("/messages", message);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }  
 // 10/10 API endpoints
 async getUserInfo(username) {
  try {
    const result = await this.axiosInstance.get("/users/"+username);
    // console.log(result)
    return result;
  } catch (err) {
    helpMeInstructor(err);
    return err;
  }
}// 11/10 API endpoints
async updateUserInfo(username, updatedUserdetails) {
  try {
    const result = await this.axiosInstance.patch("/users/"+username, updatedUserdetails);
    console.log(result)
    return result;
  } catch (err) {
    helpMeInstructor(err);
    return err;
  }
}
 // 1/1 really complex API endpoints
  async useGoogleLogin() {
    try {
      const result = await this.axiosInstance.get("/auth/google/login")
      console.log(result)
      return result
    } catch (err) {
      helpMeInstructor(err)
      return err
    }
  }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
