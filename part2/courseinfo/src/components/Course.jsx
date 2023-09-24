const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => {
  let total = sum.reduce((prev, curr, index, array) => prev + curr.exercises, 0);
  return (
    <p><b>Total of {total} exercises!</b></p>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <div>
    {parts.map(part =>
      <Part key={part.id} part={part}/>
      )}
  </div>

const Course = ({ course }) => {
  return(
    <div>
    {course.map( course =>
      <div key={course.id}>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total sum={course.parts}/>
      </div>
      )}
    </div>
  )
}

export default Course