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

  for (let i = candidates.length; i--; ) {
    hasOptions = candidates[i].options && candidates[i].options.length > 0; //has.options
    if (candidates[i].options) {
      for (let k = filters.length; k--; ) {
        // loop through filters
        var hasFilter = false;
        for (let j = candidates[i].options.length; j--; ) {
          if (!availableImmediately && !freshGrad) {
            if (filters[k] == candidates[i].options[j].code) {
              hasFilter = true;
            }
          } else if (
            availableImmediately &&
            candidates[i].options[j].code === 'AVAILABLE_IMMEDIATELY'
          ) {
            hasFilter = true;
          } else if (
            freshGrad &&
            candidates[i].options[j].code === 'FRESH_GRAD'
          ) {
            hasFilter = true;
          }
        }
        hasOptions = hasOptions && hasFilter;
      }
    }
    if (hasOptions) {
      filteredCandidates.unshift(candidates[i]);
    }
  }

  return filteredCandidates;
}

module.exports = filter;
