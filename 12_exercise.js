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
  function hasOptionCode(candidate, filter) {
    return candidate.options.some((option) => filter === option.code);
  };

  if (filters.length === 0) {
    return allCandidates;
  } else if (filters.includes('AVAILABLE_IMMEDIATELY')) {
    return allCandidates.filter((candidate) => hasOptionCode(candidate, 'AVAILABLE_IMMEDIATELY'));
  } else if (filters.includes('FRESH_GRAD')) {
    return allCandidates.filter((candidate) => hasOptionCode(candidate, 'FRESH_GRAD'));
  } else {
    return allCandidates.filter((candidate) => filters.every((filter) => hasOptionCode(candidate, filter)));
  }

}

module.exports = filter;
