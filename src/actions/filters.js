// setFilterText
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// sortByDate
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// sortByAmount
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// setStartDate
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// setEndDate
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
