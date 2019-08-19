import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const productIdex = draft.findIndex(p => p.id === action.product.id);

        if (productIdex >= 0) {
          draft[productIdex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    default:
      return state;
  }
}
