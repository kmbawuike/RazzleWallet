import React, {Component, Fragment} from 'react'
import '../../styles/default.css'
import Footer from './Footer';
import Experience from './Experience'
import Describtion from './describtion'

class Home extends Component{
  render(){
    return(
      <Fragment>
      	<Describtion/>
        <Experience />
        <Footer />
      </Fragment>
    )
  }
}

export default Home;