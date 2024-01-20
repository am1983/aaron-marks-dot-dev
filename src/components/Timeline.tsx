import './styles/Timeline.css';
import TimelineItem from './TimelineItem/TimelineItem.tsx';
import ITimelineItem from './TimelineItem/ITimelineItem.ts';

const experience: ITimelineItem[] = [
    {
      year: 2014,
      company: 'Kwantek',
      title: 'Developer',
      description: 'I did cool shit'
    },
    {
      year: 2016,
      company: 'Lloyd and McDaniel, PLC',
      title: 'Senior Software Developer',
      description: 'I did some slightly cooler shit.'
    }
];

const Timeline = () => {
    return (
        <div id="timeline" className="timeline section">
            <div className="section-body">
                <h1 className="overlay-header full-width section-header">My Experience</h1>
                <div className="section-content">
                  { 
                    experience.map((item: ITimelineItem, i: number) => 
                      {
                        return (
                          <TimelineItem timelineItem={item} key={i} />
                        )
                      }
                    )
                  }
                </div>
            </div>
        </div>
    )
}

export default Timeline