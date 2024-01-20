import ITimelineItem from './ITimelineItem';
import './TimelineItem.css';

interface IProps {
  timelineItem: ITimelineItem;
}

const TimelineItem = ({ timelineItem } : IProps) => {
  return (
    <div className="timeline-item">
      <div>{timelineItem.year}</div>
      <div>{timelineItem.company}</div>
      <div>{timelineItem.title}</div>
      <div>{timelineItem.description}</div>
    </div>
  )
}

export default TimelineItem