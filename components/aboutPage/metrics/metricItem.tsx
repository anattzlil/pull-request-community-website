import React from 'react';
import { IMetric } from '../../../services/metrics';
import styles from './metrics.module.scss';


interface Props {
  metric: IMetric
}

const MetricItemComponent = (props: Props) => {
  const {value, label} = props.metric;

  return (
    <li className={styles.metricItem}>
      <div className={styles.metricItemValue}>{value}</div>
      <div className={styles.metricItemLabel}>{label}</div>
    </li>
  )
}

export default MetricItemComponent;