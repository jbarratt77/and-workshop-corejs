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

function filter(candidates, filters) {
  const filteredCandidates = [];
  let hasOptions;
  let availableImmediately = false;
  let freshGrad = false;

  if (filters.length === 0) {
    return candidates;
  }

  if (filters.includes('AVAILABLE_IMMEDIATELY')) {
    availableImmediately = true;
  } else if (filters.includes('FRESH_GRAD')) {
    freshGrad = true;
  }

  candidates.forEach(function(candidate) {
    hasOptions = candidate.options && candidate.options.length > 0; //has.options
    if (candidate.options) {
      for (let k = filters.length; k--; ) {
        // loop through filters
        let hasFilter = false;
        for (let j = candidate.options.length; j--; ) {
          const candidateOption = candidate.options[j].code;
          if (!availableImmediately && !freshGrad) {
            if (filters[k] == candidateOption) {
              hasFilter = true;
            }
          } else if (
            availableImmediately &&
            candidateOption === 'AVAILABLE_IMMEDIATELY'
          ) {
            hasFilter = true;
          } else if (
            freshGrad &&
            candidateOption === 'FRESH_GRAD'
          ) {
            hasFilter = true;
          }
        }
        hasOptions = hasOptions && hasFilter;
      }
    }
    if (hasOptions) {
      filteredCandidates.push(candidate);
    }
  });
   return filteredCandidates;
}

module.exports = filter;
