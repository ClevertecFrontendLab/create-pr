/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 53:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 475:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(53);
const github = __nccwpck_require__(475);

const main = async () => {
  try {
    const owner = core.getInput("owner", { required: true });
    const repo = core.getInput("repo", { required: true });
    const pull_number = core.getInput("pull_number", { required: true });
    const token = core.getInput("token", { required: true });

    const octokit = new github.getOctokit(token);

    await octokit.rest.pulls.requestReviewers({
      owner,
      repo,
      pull_number,
      reviewers: [
        "Rastamanby",
        "klichkovskiy",
        "Gaurrus",
        "dariavorom",
        "Ivan6813",
        "graffad",
        "vvikota",
        "vsachenko",
        "SergeyGlazun",
        "Snoop593",
      ],
    });
  } catch (error) {
    core.setFailed(error.message);
  }
};

// Call the main function to run the action
main();

})();

module.exports = __webpack_exports__;
/******/ })()
;