import { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({ timeLineDataSet, workIcon, educationIcon, bgColor, educationDataSet}) => {
    const [dataSet1, setDataSet1] = useState([]);
    const [dataSet2, setDataSet2] = useState([]);

    useEffect(()=>{
        setDataSet1(timeLineDataSet);
        setDataSet2(educationDataSet);
    }, [])
    return (
        <VerticalTimeline lineColor='#9CA3AF'>
            {dataSet1.map(timeLineData => (
                <VerticalTimelineElement
                    key={timeLineData.id}
                    className="vertical-timeline-element--work"
                    date={timeLineData.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}
                    intersectionObserverProps={{ triggerOnce: false }}
                    icon={workIcon}
                    contentStyle={{ backgroundColor: bgColor }}
                    dateClassName='text-teal-900 dark:text-cyan-500 font-bold'
                >
                    <h3 className="vertical-timeline-element-title font-robotoslab mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-1000">{timeLineData.heading}</h3>
                    <h4 className="vertical-timeline-element-subtitle font-robotoslab mb-2 text-xl font-semibold tracking-tight text-gray-600 dark:text-gray-700">{timeLineData.subHeading}</h4>
                    <p className='font-poppins mb-3 font-normal text-gray-700 dark:text-gray-800'>
                        {timeLineData.description}
                    </p>
                </VerticalTimelineElement>
            ))}
            {dataSet2.map(educationData => (
                <VerticalTimelineElement
                    key={educationData.id}
                    className="vertical-timeline-element--work"
                    date={educationData.date}
                    iconStyle={{ background: '#f50057', color: '#fff', }}
                    intersectionObserverProps={{ triggerOnce: false }}
                    icon={educationIcon}
                    contentStyle={{ backgroundColor: bgColor }}
                    dateClassName='text-teal-900 dark:text-cyan-500 font-bold'
                >
                    <h3 className="vertical-timeline-element-title font-robotoslab mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-1000">{educationData.heading}</h3>
                    <h4 className="vertical-timeline-element-subtitle font-robotoslab mb-2 text-xl font-semibold tracking-tight text-gray-600 dark:text-gray-700">{educationData.subHeading}</h4>
                    <p className='font-poppins mb-3 font-normal text-gray-700 dark:text-gray-800'>
                        {educationData.description}
                    </p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}

export default Timeline;