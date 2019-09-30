import React, {Component, Fragment} from 'react'
import '../../styles/default.css'
import Footer from './Footer';
import Experience from './Experience'
import BodySetup from './BodySetup';

class Home extends Component{
  render(){
    return(
      <Fragment>
        <BodySetup/>
        <Experience />
        <Footer />
      </Fragment>
    )
  }
}

export default Home;