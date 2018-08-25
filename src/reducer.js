export const initialState = {
  items: [
    {
      id: 1,
      text: 'random text 1',
    },
    {
      id: 2,
      text: 'random text 2',
    },
    {
      id: 3,
      text: 'random text 3',
    },
    {
      id: 4,
      text: 'random text 4',
    },
    {
      id: 5,
      text: 'random text 5',
    },
    {
      id: 6,
      text: 'random text 6',
    },
  ],
  isModalOpen: false,
};

export function reducer(state = initialState) {
  return state;
}
