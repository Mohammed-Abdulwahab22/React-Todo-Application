import React from 'react'
import './index.css'

export default function About() {
  return (
    <div className='content'>
      <p>Welcome to my To-Do Web Application!

        This project serves as a showcase of my skills in building modern web applications. The goal was to create a functional and interactive to-do list application that demonstrates my ability to implement key features using React.


        Purpose: The primary aim of this project is to highlight my proficiency in front-end development, particularly with React. It's designed to be a practical example of my capability to build user interfaces, manage states ,
        </p>

        <p>
        Technologies Used:

React: The application is built using React, a popular JavaScript library for building user interfaces. React’s component-based architecture was instrumental in creating a responsive and maintainable user experience.

JSON Server: To simulate API calls and manage data, I used JSON Server. This allows the application to perform real-time operations like adding, viewing, and deleting tasks as if interacting with a real backend API. JSON Server provides a quick and easy way to set up a RESTful API with mock data.
        </p>
    </div>
  )
}
