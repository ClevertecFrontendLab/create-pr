const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
  try {
    const owner = core.getInput('owner', { required: true });
    const repo = core.getInput('repo', { required: true });
    const pull_number = core.getInput('pull_number', { required: true });
    const token = core.getInput('token', { required: true });

    const octokit = new github.getOctokit(token);

    await octokit.rest.pulls.requestReviewers({
      owner,
      repo,
      pull_number,
      reviewers: [
        'Rastamanby',
        'ValadzkoAliaksei',
        'Gaurrus',
        'dariavorom',
        'Ivan6813',
        'graffad',
        'klichkovskiy',
        'vvikota',
        'vsachenko',
        'SergeyGlazun',
        'Java-zhara',
        'Snoop593',
      ],
    });
  } catch (error) {
    core.setFailed(error.message);
  }
};

// Call the main function to run the action
main();
