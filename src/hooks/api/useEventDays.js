import useAsync from '../useAsync';
import * as daysApi from '../../services/daysApi';
import useToken from '../useToken';

export default function useTicketType() {
  const token = useToken();
  const {
    data: eventDays,
    loading: eventDaysLoading,
    error: eventDaysError,
    act: geteventDays,
  } = useAsync(() => daysApi.getEventDays(token));

  return {
    eventDays,
    eventDaysLoading,
    eventDaysError,
    geteventDays,
  };
}
