import prMetrics from '../static/metrics';

export interface IMetric {
  label: string;
  value: string;
}

export async function getMetrics() {
  const facebookMetrics = await getFacebookMetric();
  prMetrics['Facebook members'] = facebookMetrics;
  const metricsContext = Object.keys(prMetrics).map((metric) => {
    let updatedValue = convertMetrics(prMetrics[metric]);
    return { label: metric, value: updatedValue };
  });

  return metricsContext as IMetric[];
}

async function getFacebookMetric() {
  let endpoint = 'https://graph.facebook.com/v14.0';
  let groupId = '558206478197900';
  let field = 'member_count';
  let accessToken = process.env.REACT_APP_FACEBOOK_TOKEN;

  const response = await fetch(
    `${endpoint}/${groupId}?fields=${field}&access_token=${accessToken}`
  );
  const membersValue = await response.json();
  return membersValue.member_count || 4500;
}

function convertMetrics(numValue) {
  let stringifyValue = numValue;
  if (numValue >= 1000) {
    let res = numValue / 1000;
    stringifyValue = res.toFixed(Number.isInteger(res) ? 0 : 1);
    return stringifyValue + 'k';
  }
  return String(numValue);
}
