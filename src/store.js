// store.js
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
  setSenderData: (newSenderData) => set((state) => ({ senderData: { ...state.senderData, ...newSenderData } })),
  setReceiverData: (newReceiverData) => set((state) => ({ receiverData: { ...state.receiverData, ...newReceiverData } })),
}));

export default usePackageStore;
