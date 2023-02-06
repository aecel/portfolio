const WhatILearned = ({ lessons }) => {
  return (
    <div>
      <div className="project-info-text-heading">What I learned</div>
      <div className="project-info-lessons">
          {lessons.map((lesson, index) => {
            return (
              <div key={index} className="project-info-text">
                {index + 1}. {lesson}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default WhatILearned
