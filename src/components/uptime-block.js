import React, { useMemo } from 'react';
import { formatDuration, fixed } from '../utils/helper';

const UptimeBlock = (props) => {

  const { data } = props;
  const { status, text } = useMemo(() => {
    let status = '';
    let text = data.date.format('DD-MM-YYYY');
    if (data.uptime >= 100) {
      status = 'ok';
      text += ` Availability ${fixed(data.uptime)}%`;
    }
    else if (data.uptime <= 0 && data.down.times === 0) {
      status = 'none';
      text += ' no data';
    }
    else {
      status = 'down';
      text += ` Fault ${data.down.times} Second-rate，Grand total ${formatDuration(data.down.duration)}，Availability ${fixed(data.uptime)}%`;
    }
    return { status, text };
  }, [data]);

  return (
    <i className={status} data-tip={text}></i>
  );
}

export default UptimeBlock;