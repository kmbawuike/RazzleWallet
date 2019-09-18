import React, {Component, Fragment} from 'react'
import '../../styles/default.css'
import Footer from './Footer';
import Experience from './Experience'

class Home extends Component{
  render(){
    return(
      <Fragment>
        <Experience />
        <Footer />
      </Fragment>
    )
  }
}

export default Home;