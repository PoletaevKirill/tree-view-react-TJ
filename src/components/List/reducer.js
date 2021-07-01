const initialState = {list: [], active: []};

function reducer(state, action) {
  switch (action.type) {
    case 'setList':
      return {...state, list: [...action.list]};
    case 'openList':
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.index + 1),
          ...action.children,
          ...state.list.slice(action.index + 1, state.list.length)
        ],
      };
    case 'cLoseList':
      /**
       * @param {id} _id
       * @param {number} count
       * @return Number
       */
      const countActiveChildById = (_id, count = 0) => state.list.reduce((tempCount, item) => {
        if (item.parentId === _id) tempCount += 1
        if (state.active.includes(item.id) && item.parentId === _id) return countActiveChildById(item.id, tempCount)
        return tempCount
      }, count)
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.index + 1),
          ...state.list.slice(action.index + 1 + countActiveChildById(action.id), state.list.length)
        ]
      };
    case 'addActiveItem':
      return {...state, active: [...state.active, action.id]}
    case 'removeActiveItem':
      return {
        ...state,
        active: [...state.active.filter(id => id !== action.id && Array.from(state.list, o => o.id).includes(id))]
      }
    default:
      throw new Error();
  }
}

export {initialState, reducer}