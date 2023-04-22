import axios from "axios";

interface GithubRepo {
  stargazers_count: number;
}

const getGithubRepos = async (username: string) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = res.data as GithubRepo[];

    const result = repos
      ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 10);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default getGithubRepos;
