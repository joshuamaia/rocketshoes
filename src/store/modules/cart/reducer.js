import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIdex = draft.findIndex(p => p.id === action.id);

        if (productIdex >= 0) {
          draft.splice(productIdex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const productIdex = draft.findIndex(p => p.id === action.id);

        if (productIdex >= 0) {
          draft[productIdex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
