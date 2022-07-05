import React from 'react';
import styles from './metrics.module.scss';
import MetricItem from './metricItem';
import {IMetric} from '../../../services/metrics';

interface Props {
  metricsList: IMetric[]
}

const MetricsComponent = (props: Props) => {
  const {metricsList} = props
  return (
    metricsList &&
    <ul className={styles.metricsList}>
      {metricsList.map((metric, i) => <MetricItem key={i} metric={metric}/>)}
    </ul>
  )
}

export default MetricsComponent;