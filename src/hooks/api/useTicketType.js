import useAsync from '../useAsync';
import * as ticketApi from '../../services/ticketApi';
import useToken from '../useToken';

export default function useTicketType() {
  const token = useToken();
  const {
    data: ticketTypes,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketTypes,
  } = useAsync(() => ticketApi.getTicketTypes(token));

  return {
    ticketTypes,
    ticketTypeLoading,
    ticketTypeError,
    getTicketTypes,
  };
}
