import React from 'react'
import './Tags.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import TagList from './TagList'

const Tags = () => {
    const tagList = [
    {
        id:1,
        Name: 'JavaScript',
        Desc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Note JavaScript is NOT the same as Java! Please include all relevant info..."
    },
    {
        id:2,
        Name: 'Python',
        Desc: "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and..."
    },
    {
        id:3,
        Name: 'Java',
        Desc: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself..."
    },
    {
        id:4,
        Name: 'c#',
        Desc: "C# (pronounced  (see sharp) ) is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets..."
    },
    {
        id:5,
        Name: 'php',
        Desc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed..."
    },
    {
        id:6,
        Name: 'android',
        Desc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles..."
    },
    {
        id:7,
        Name: 'HTML',
        Desc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions..."
    },
    {
        id:8,
        Name: 'c++',
        Desc: "C++ is a general-purpose programming language. It was originally designed as an extension to C and has a similar syntax, but it is now a completely..."
    },
    {
        id:9,
        Name: 'sql',
        Desc: "Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data..."
    },
    {
        id:10,
        Name: 'nodejs',
        Desc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for..."
    },
    {
        id:11,
        Name: 'reactjs',
        Desc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible...."
    },
    {
        id:12,
        Name: 'JavaScript',
        Desc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Note JavaScript is NOT the same as Java! Please include all relevant info..."
    },
    {
        id:13,
        Name: 'Json',
        Desc: "JSON (JavaScript Object Notation) is a serializable data interchange format intended to be machine and human readable. Do not use this tag for native..."
    }
  ]
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
       <h1 className='tags-h1'>Tags</h1>
       <p className='tags-p'>A tag is a keyword or label that categorizes your question with other,
        similar questions. Using <br/>the right tags makes it easier for others
        to find and answer your question.
       </p>
       <div className="tags-list-container">
        {
            tagList.map((tag) => (
                <TagList tag={tag} key={tagList.id}/>
            ))
        }
       </div>
      </div>
    </div>
  )
}

export default Tags