import axios from "axios";

export default axios.create({
    baseURL: "https://ide-abdcfccaabaaefdfbaaccbaede.project.examly.io/proxy/8080/",
    headers: {
        "Content-type": "application/json"
    }
});
