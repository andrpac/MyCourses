import './App.css';
import Course from './Course.js';
import AddCourse from './AddCourse.js';

import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Courses = [{
  id: 1,
  number: '15-213',
  title: 'Computer Systems',
}, {
  id: 2,
  number: '15-316',
  title: 'Software Foundations of Privacy and Security'
}]

function App() {
  const [courses, setCourses] = useState(Courses);
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <div className="App">
            <div className='courses-navbar'> 
              <Link to={'/add'} className="button-courses-add">Add Course </Link>
            </div>
            { courses.map((course) => <Course key={course.id} course={course} />) }
          </div>} />
        <Route exact path='/add' element={<AddCourse />} /> 
      </Routes>
    </Router>
  );
}

export default App;
