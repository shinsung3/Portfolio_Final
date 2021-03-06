import Api from "@/services/Api";

const BASE_URL = "https://lab.ssafy.com/api/v4";

export default {
  getRepos(userName) {
    return Api(BASE_URL).get(`/users/${userName}/projects`);
  },
  getCommits(fullName) {
    let d = new Date();
    d.setMonth(d.getMonth() - 1);
    return Api(BASE_URL).get(
      `/projects/${fullName}/repository/commits?per_page=100`
    );
  }
};
