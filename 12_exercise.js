/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 *
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 *
 *
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *
 *   happy refactory :)
 */

function filter(allCandidates, filters) {
  const filteredCandidates = [];
  let hasOptions;
  let availableImmediately = false;
  let freshGrad = false;

  if (filters.length === 0) {
    return allCandidates;
  }

  if (filters.includes('AVAILABLE_IMMEDIATELY')) {
    availableImmediately = true;
  } else if (filters.includes('FRESH_GRAD')) {
    freshGrad = true;
  }

  allCandidates.forEach((candidate) => {
    hasOptions = candidate.options.length > 0; //has.options
    if (hasOptions) {
      filters.forEach((filter) => {
        // loop through filters
        let hasFilter = false;
        candidate.options.forEach((option) => {
          switch (true) {
            case !availableImmediately && !freshGrad && filter == option.code:
              hasFilter = true;
            break;
            case availableImmediately && option.code === 'AVAILABLE_IMMEDIATELY':
              hasFilter = true;
            break;
            case freshGrad && option.code === 'FRESH_GRAD':
              hasFilter = true;
            break;
            default:
            break;
          }
        });
        hasOptions = hasOptions && hasFilter;
      });
    }
    if (hasOptions) {
      filteredCandidates.push(candidate);
    }
  });
   return filteredCandidates;
}

module.exports = filter;
