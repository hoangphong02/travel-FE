import { axiosMicro } from '../../services';

export function updateFCMToken(id, token) {
  axiosMicro.patch(`/users/${id}`, { fcm_token: token });
}
