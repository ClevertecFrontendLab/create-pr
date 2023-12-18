const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

const API_URL = 'https://training.clevertec.ru';
const EXTRA_MENTORS_LIST = ['ValadzkoAliaksei'];

const main = async () => {
  try {
    const owner = core.getInput('owner', { required: true });
    const repo = core.getInput('repo', { required: true });
    const pull_number = core.getInput('pull_number', { required: true });
    const token = core.getInput('token', { required: true });
    const base_url = core.getInput('host', { required: false }) || API_URL;
    const mentors_api_endpoint = `${base_url}/mentors`;

    const octokit = new github.getOctokit(token);

    const response = await axios.get(mentors_api_endpoint);
    const reviewers = response.data?.map((mentor) => mentor.github) ?? EXTRA_MENTORS_LIST;

    await octokit.rest.pulls.requestReviewers({
      owner,
      repo,
      pull_number,
      reviewers,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
};

// Call the main function to run the action
main();
