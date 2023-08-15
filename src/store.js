import create from 'zustand';

const usePackageStore = create((set) => ({
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
  setEstimateData: (newEstimateData) => set((state) => ({ estimateData: { ...state.estimateData, ...newEstimateData } })),
  setSenderData: (newSenderData) => set((state) => ({ senderData: { ...state.senderData, ...newSenderData } })),
  setReceiverData: (newReceiverData) => set((state) => ({ receiverData: { ...state.receiverData, ...newReceiverData } })),
}));

export default usePackageStore;
