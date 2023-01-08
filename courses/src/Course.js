const Course = (props) => {
    function handleClick() {
        console.log('DA');
    }

    return (
        <div onClick={handleClick} >
            <div className='course-container'>
                <p> {props.course.number + ': ' + props.course.title} </p>
            </div>
        </div>
    )
}

export default Course;