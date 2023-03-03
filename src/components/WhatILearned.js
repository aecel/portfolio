const WhatILearned = ({ lessons }) => {
  return (
    <>
      {lessons.length > 0 ? (
        <div>
          <div className="project-info-text-heading">What I learned</div>
          <div style={{ height: "20px" }}></div>
          <div className="project-info-lessons">
            {lessons.map((lesson, index) => {
              return (
                <div
                  key={index}
                  className="project-info-text"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexShrink: "0",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                      backgroundColor: "green",
                      color: "white",
                    }}
                  >
                    {index + 1}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "90px",
                    }}
                  >
                    {lesson}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default WhatILearned
