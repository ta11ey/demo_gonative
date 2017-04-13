import React, { Component } from 'react';

import MenuIcon from 'material-ui/svg-icons/navigation/menu'


 export default class Heading extends Component {
   constructor(props) {
     super(props)
   }

   render() {
     const { toggleDrawer } = this.props;

     const styles = {
       container: {
         height: 50,
         width: '100%',
         padding: 16,
         display: 'flex',
         justifyContent: 'flex-start',
         alignItems: 'center'
       }
     }

     return (
       <div style={styles.container}>
        <MenuIcon
          onClick={toggleDrawer}
          style={{cursor: 'pointer'}}/>
       </div>
       )
   }
 }
