import prMetrics from '../static/metrics';


export interface IMetric {
  label: string,
  value: string
}

export async function getMetrics() {
  const facebookMetrics = await getFacebookMetric();
  prMetrics.push(facebookMetrics);
  const metricsContext = prMetrics.map(metric => { 
    let updatedValue = convertMetrics(metric.value);
    return {label: metric.label, value: updatedValue};
  });

  return metricsContext as IMetric[];
}

async function getFacebookMetric() {
  let facebookMetric = {
    label: "Facebook members",
    value: 4500
  }
  
  let endpoint = "https://graph.facebook.com/v14.0";
  let groupId = "558206478197900";
  let field = "member_count";
  let accessToken = "EAAFscUQL5NIBADdNN8FG6BJEEo29wpp0ZAGflLQKtHd4LoZBXpKxs6ZA5JYucrAVSf4kTDEMZBf1OozKAje7OgEIkRb36Q19gmRCerjTROevCwvBOw5K92IuznqZADoefzgxS6BNqRN3ZA8rdjBjaDHqVE0GElmEmlrTNeNHJKRgZDZD"
  
  const response = await fetch(`${endpoint}/${groupId}?fields=${field}&access_token=${accessToken}`)
  const membersValue = await response.json();
  facebookMetric.value = membersValue.member_count || 4500;
  return facebookMetric
}

function convertMetrics(numValue)  {
  let stringifyValue = numValue >= 1000 ?
    (numValue/1000).toFixed(1) + 'k'
    : String(numValue)
  
  return stringifyValue;
}
