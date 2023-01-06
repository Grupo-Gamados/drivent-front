import postTicketPaid, * as paymentApi from '../services/paymentApi';
import useAsync from '../hooks/useAsync';
import useToken from '../hooks/useToken';

export default function useSavePayment() {
  const token = useToken();

  const {
    loading: savePaymentLoading,
    error: savePaymentError,
    act: savePayment,
  } = useAsync((data) => paymentApi.postTicketPaid(data, token), false);

  return {
    savePaymentLoading,
    savePaymentError,
    savePayment,
  };
};
