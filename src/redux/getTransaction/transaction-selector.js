export const getUserTransactionTheLastSixMounts = state =>
  state.dataTransaction.data;
export const transactionLoading = state => state.dataTransaction.isLoading;
export const transactionNotifyStatus = state =>
  state.dataTransaction.notifyStatus;
