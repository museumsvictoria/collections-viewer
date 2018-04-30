export const NOTIFICATION_SHOW = 'NOTIFICATION_SHOW';
export const NOTIFICATION_HIDE = 'NOTIFICATION_HIDE';

function showNotification(text, type, persist) {
  return {
    type: NOTIFICATION_SHOW,
    payload: {
      text,
      type,
      persist,
    },
  };
}

export function hideNotification() {
  return {
    type: NOTIFICATION_HIDE,
  };
}

export const showSuccess = (text, persist = false) =>
  showNotification(text, 'success', persist);
export const showError = (text, persist = false) =>
  showNotification(text, 'error', persist);
export const showFatal = text => showNotification(text, 'error', true);
