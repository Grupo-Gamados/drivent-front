import useAsync from '../useAsync';
import useToken from '../useToken';
import * as hotelApi from '../../services/hotelApi';

export default function useRooms(hotelId) {
  const token = useToken();
  const {
    data: roomsByHotel,
    loading: roomsByHotelLoading,
    error: roomsByHotelError,
    act: getRoomsByHotel,
  } = useAsync(() => hotelApi.getRoomsByHotel(token, hotelId));

  return {
    roomsByHotel,
    roomsByHotelLoading,
    roomsByHotelError,
    getRoomsByHotel,
  };
}
