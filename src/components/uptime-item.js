import React, { useMemo } from 'react';
import htmr from 'htmr';
import ReactTooltip from 'react-tooltip';
import UptimeBlock from './uptime-block';
import Link from './link';
import { formatDuration } from '../utils/helper';

const UptimeItem = (props) => {

  const { ShowLink, CountDays } = window.Config;
  const { monitor } = props;

  const status = {
    ok: 'Normal',
    down: 'Inaccessible',
    unknow: 'Unknown'
  };

  const total = useMemo(() => {
    return monitor.total.times
      ? `Recently ${CountDays} day failure ${monitor.total.times} Second-rate，Grand total ${formatDuration(monitor.total.duration)}，average availability ${monitor.average}%`
      : `Recently ${CountDays} day availability ${monitor.average}%`;
  }, [CountDays, monitor]);

  const initial = useMemo(() => {
    return monitor.daily[monitor.daily.length - 1].date;
  }, [monitor]);

  return (
    <div className="item">
      <div className="meta">
        <div className="info">
          <span className="name">{htmr(monitor.name)}</span>
          {ShowLink && <Link className="link" to={monitor.url} text={htmr(monitor.name)} />}
        </div>
        <div className={`status ${monitor.status}`}>{status[monitor.status]}</div>
      </div>
      <div className="timeline">
        {monitor.daily.map((value, index) => (
          <UptimeBlock key={index} data={value} />
        ))}
      </div>
      <ReactTooltip className="tooltip" place="top" type="dark" effect="solid" />
      <div className="foot">
        <span>Today</span>
        <span>{total}</span>
        <span>{initial.format('DD-MM-YYYY')}</span>
      </div>
    </div>
  );
}

export default UptimeItem;
