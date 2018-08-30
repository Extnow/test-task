export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool,
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items,
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(url)
      .then(response => response.json())
      .then((items) => {
        setTimeout(() => {
          dispatch(itemsFetchDataSuccess(items));
          dispatch(itemsIsLoading(false));
        }, 2000);
      });
  };
}
