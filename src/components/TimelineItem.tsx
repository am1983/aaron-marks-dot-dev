import './styles/TimelineItem.css';

const TimelineItem = ({item}) => {
  return (
    <div className="timeline-item">
      <div>{item.year}</div>
      <div>{item.company}</div>
      <div>{item.title}</div>
      <div>{item.description}</div>
    </div>
  )
}

export default TimelineItem