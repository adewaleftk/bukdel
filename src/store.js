import create from 'zustand';

const usePackageStore = create((set) => ({
  cartItems: [],






  user: null, // Initial user state is null

  setUser: (user) => set({ user }),

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

  userToken: localStorage.getItem('userToken') || null,
  login: (token) => {
    set({ userToken: token });
    localStorage.setItem('userToken', token);
  },
  logout: () => {
    set({ userToken: null });
    localStorage.removeItem('userToken');
  },


  setEstimateData: (newEstimateData) => set((state) => ({ estimateData: { ...state.estimateData, ...newEstimateData } })),
  setSenderData: (newSenderData) => set((state) => ({ senderData: { ...state.senderData, ...newSenderData } })),
  setReceiverData: (newReceiverData) => set((state) => ({ receiverData: { ...state.receiverData, ...newReceiverData } })),
}));

export default usePackageStore;
