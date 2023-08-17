import create from 'zustand';

const usePackageStore = create((set) => ({
  cartItems: [],

  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          total: (existingItem.quantity + 1) * existingItem.price,
        };
        const updatedCartItems = state.cartItems.map(cartItem => cartItem.name === item.name ? updatedItem : cartItem);
        return { cartItems: updatedCartItems };
      } else {
        const newItem = { ...item, quantity: 1, total: item.price };
        return { cartItems: [...state.cartItems, newItem] };
      }
    });
  },

  increaseQuantity: (item) => {
    set((state) => {
      const updatedItem = {
        ...item,
        quantity: item.quantity + 1,
        total: (item.quantity + 1) * item.price,
      };
      const updatedCartItems = state.cartItems.map(cartItem =>
        cartItem.name === item.name ? updatedItem : cartItem
      );
      return { cartItems: updatedCartItems };
    });
  },

  decreaseQuantity: (item) => {
    set((state) => {
      if (item.quantity > 1) {
        const updatedItem = {
          ...item,
          quantity: item.quantity - 1,
          total: (item.quantity - 1) * item.price,
        };
        const updatedCartItems = state.cartItems.map(cartItem =>
          cartItem.name === item.name ? updatedItem : cartItem
        );
        return { cartItems: updatedCartItems };
      } else {
        return state;
      }
    });
  },

  removeFromCart: (item) => {
    set((state) => ({
      cartItems: state.cartItems.filter(cartItem => cartItem.name !== item.name),
    }));
  },

  senderData: {
    senderName: '',
    pickupAddress: '',
    senderNumber: '',
    senderState: '',
    senderCity: '',
    senderAltNumber: '',
    pickupDate: '',
    itemCategory: '',
    pickupNote: '',
    itemSize: '',
    saveSenderAddress: false,
  },
  receiverData: {
    receiverName: '',
    dropoffAddress: '',
    receiverNumber: '',
    receiverState: '',
    receiverCity: '',
    receiverAltNumber: '',
    deliveryDate: '',
    // itemCategory: '',
    dropoffNote: '',
    // itemSize: '',
    saveReceiverAddress: false,
  },
  estimateData: {
    estimatePickupAddress: '',
    estimateItemCategory: '',
    estimatePickupState: '',
    estimatePickupCity: '',
    estimateItemSize: '',
    estimateDropoffAddress: '',
    estimateDeliveryDate: '',
    estimateDropoffState: '',
    estimateDropoffCity: '',
  },

  // isLoggedIn: false,
  // userToken: null,

  userToken: localStorage.getItem('userToken') || null,
  login: (token) => {
    set({ userToken: token });
    localStorage.setItem('userToken', token);
  },
  logout: () => {
    set({ userToken: null });
    localStorage.removeItem('userToken');
  },


  // login: (token) => set({ isLoggedIn: true, userToken: token }),
  // logout: () => set({ isLoggedIn: false, userToken: null }),

  setEstimateData: (newEstimateData) => set((state) => ({ estimateData: { ...state.estimateData, ...newEstimateData } })),
  setSenderData: (newSenderData) => set((state) => ({ senderData: { ...state.senderData, ...newSenderData } })),
  setReceiverData: (newReceiverData) => set((state) => ({ receiverData: { ...state.receiverData, ...newReceiverData } })),
}));

export default usePackageStore;
