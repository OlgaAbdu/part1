const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Welcome to {props.course} training</h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>At your training you will learn : <br />1 : {props.part1}. That will include {props.exercise1} tasks.<br />
        2 : {props.part2}. That will include {props.exercise2} tasks.<br />
        3 : {props.part3}. That will include {props.exercise3} tasks.</p>
    </div>
  )
}
const Total = ( props ) => {
  return (
    <div>
      <p>
        After completing a total of {props.totalInAll} tasks, you can gain your
        "Complete React in Action" certificate.
      </p>
    </div>
  );
};
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of component'
  const exercise1 = 10;
  const exercise2 = 7;
  const exercise3 = 14;
  const totalInAll = 0;
  return (
    <div>
      <Header course={course} />
      <Content part1={part1}
        exercise1={exercise1}
        part2={part2}
        exercise2={exercise2}
        part3={part3}
        exercise3={exercise3} />
      <Total totalInAll={10+7+14+0} />
    </div>
  )
}
export default App;




