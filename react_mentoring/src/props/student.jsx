import protpTypes from 'prop-types';

function Student(props){
    return(
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes":"No"}</p>
      </div>
    );
  }

  Student.propTypes = {
    name: protpTypes.string,
    age: protpTypes.number,
    isStudent: protpTypes.bool
}

Student.defaultProps = {
    name: "OPG",
    age:0,
    isStudent: false
}
  export default Student