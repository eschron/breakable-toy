import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Modal extends Component {

  render() {
   // Render nothing if the "show" prop is false
   if(!this.props.show) {
     return null;
   }

   // The gray background
   const backdropStyle = {
     position: 'fixed',
     top: 0,
     bottom: 0,
     left: 0,
     right: 0,
     backgroundColor: 'rgba(0,0,0,0.3)',
     padding: 50,
     zIndex: 100,
   };

   // The modal "window"
   const modalStyle = {
     backgroundColor: '#fff',
     borderRadius: 5,
     maxWidth: 500,
     minHeight: 100,
     margin: '0 auto',
     padding: 20,
     zIndex: 100,
     marginTop: 150,
   };

   return (
     <div className="backdrop" style={backdropStyle}>
       <div className="modal" style={modalStyle}>
         {this.props.children}
       </div>
     </div>
   );
 }
}

Modal.propTypes = {
 onClose: PropTypes.func.isRequired,
 show: PropTypes.bool,
 children: PropTypes.node
};

export default Modal
