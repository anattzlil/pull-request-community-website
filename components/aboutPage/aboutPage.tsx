import React, { useEffect, useRef, useState } from 'react';
import styles from './aboutPage.module.scss';
import { getMetrics } from '../../services/metrics';

import MetricsComponent from './metrics/metrics';

// const metricsList = [
//   {value:'4.5k', label:'Facebook members'},
//   {value:'1k', label:'Github stars'},
//   {value: '60', label: 'Meetups'},
//   {value: '12', label: 'Workshops'},
// ]

const AboutPage = () => {
  const [metricsList, setMetricsList] = useState([]);
  useEffect(() => {
    const fetchMetrics = async () => {
      const data = await getMetrics();
      setMetricsList(data);
    };
    fetchMetrics().catch(console.error);
  }, []);
  return (
    <>
      <MetricsComponent metricsList={metricsList} />
      {/* <TeamComponent/> */}
      {/* <VideoComponent/> */}
      {/* q&a section */}
      {/* sponsers section */}
    </>
  );
};

export default AboutPage;
