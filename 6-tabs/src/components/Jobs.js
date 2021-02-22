import React, {useState, useEffect} from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'

const Jobs = ({jobs}) => {
    const [index, setIndex] = useState(0);
    
    return (
        <section className="jobs-center">
            <div className="btn-container">
                {jobs.map( (job,ind) => {
                    return (
                        <button key={job.id} type="button" className={`job-btn ${(ind === index) && 'active-btn'}`} onClick={() => setIndex(ind)}>{job.company}</button>
                    )   
                })}
            </div>
            <div className="job-info">
                <h3>{jobs[index].title}</h3>
                <h4>{jobs[index].company}</h4>
                <p className="job-date">{jobs[index].dates}</p>
                {jobs[index].duties.map( duty => {
                    return (
                        <div className="job-desc">
                            <AiOutlineDoubleRight className="job-icon"/>
                            <p>{duty}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Jobs
