import React from 'react'

import Experience from '../components/Experience/Experience'
import exp from '../assets/experience.json'

// import Skills from '../components/Skills/Skills'
// import skills from '../assets/skills.json'

//console.log(skills);

export default function Home() {
  return (
    <div>
      {
        exp.map((obj) => (
          <Experience key={obj.id} {...obj}/>
        ))
      }

      {/* {
        skills.map((obj) => (
          console.log(obj)
          //<Skills {...obj} {key={obj.id} />
        ))
      } */}
    </div>
  )
}
