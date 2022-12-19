import useAsync from '../useAsync';
import useToken from '../useToken';

import * as enrollmentApi from '../../services/enrollmentApi';

export default function useEnrollment() {
  const token = useToken();

  const {
    data: enrollment,
    loading: enrollmentLoading,
    error: enrollmentError,
  } = useAsync(() => enrollmentApi.getPersonalInformations(token));

  return {
    enrollment,
    enrollmentLoading,
    enrollmentError,
  };
}
