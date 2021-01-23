import React from 'react';
import { connect } from 'react-redux';

import { getJson } from '../../actions';
import './button-test.css';


let ButtonTest = ({ getJson }) => (
   <button 
         onClick = { getJson } 
         className = 'btn btn-success btn-block'>

         Show test result

   </button>
);

const mapDispatchToProps = { getJson };


export default connect(null, mapDispatchToProps)(ButtonTest);