const STORAGE_KEY = 'marketing_attribution';

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

function readStored() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export function captureUTMData() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const currentUTM = Object.fromEntries(
    UTM_KEYS.map((key) => [key, params.get(key) || ''])
  );

  const hasTrackingData = Object.values(currentUTM).some((value) => value !== '');

  if (hasTrackingData && !localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUTM));
  }

  return readStored();
}
