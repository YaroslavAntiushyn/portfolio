import React from 'react'

export default function Experience({id, position, date, workday, work, tasks}) {
    const workdayName = ['full-time', 'part-time'];

    return (
        <div>
            <div className="position">
                {position}
            </div>
            <div className="date">
                {date}
            </div>
            <div className="workday">
                {
                    workday.map((workday) => (
                        <p>{workdayName[workday]}</p>
                    ))
                }
            </div>
            <div className="work">
                {work}
            </div>
            <div className="tasks">
                {
                    tasks.map((task) => (
                        <p>{task}</p>
                    ))
                }
            </div>
        </div>
    )
}
