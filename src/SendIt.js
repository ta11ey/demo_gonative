import React, { PropTypes, Component } from 'react';
import { getWeatherHistory } from './service.js';
import { wasThereRain } from './utils.js';
import CircularProgress from 'material-ui/CircularProgress';

 /** return primary information section (icon, title, location) of ob feed card.
 */
 export default class SendIt extends Component {
   constructor(props) {
     super(props)

     this.state = {
       loading: false,
       sendable: null,
       about: false
     }
   }

   componentWillReceiveProps(nextProps) {
     if (nextProps.location !== this.props.location ) {
       if (nextProps.location === 'about') {
         this.setState({about: true})
       } else {
         this.setState({about: false})
         this.determineResponse(nextProps.location)
       }
     }
   }

   determineResponse = (location) => {
     if (location === 'about') return
     this.setState({loading: true});

     if (location === 'Red Rocks') {
       location = '36.157891, -115.452901'
     } else if (location === 'Indian Creek') {
       location = '38.0258, -109.54'
     }

     getWeatherHistory(location).then(res => {
       if (wasThereRain(res.forecast.forecastday[0])) {
         this.setState({sendable: false});
       } else this.setState({sendable: true});
       this.setState({loading: false});
     })
   }

   render() {
     const { location } = this.props;
     const { sendable, loading, about } = this.state;

     const styles = {
       container: {
         marginLeft: 16
       },
       titleText: {
         marginBottom: '16px'
       }
     }

     return about ?
      <div style={styles.container}>
        Do you often find yourself wondering if you should get sendy in the desert this weekend?
        Well wonder no more. Select location to see if you should send or not
        (hint: unless there was rain, the answer is most likely yes)
      </div> :
      location ? (
       <div style={styles.container}>
        <p style={styles.titleText}>Should You Send it in {location}?</p>

        {loading ?  <CircularProgress />: sendable ?
          'time to get sendy' :
          `looks like there was some rain, stay off that rock`
      }
       </div>
     ) : <div style={styles.titleText}>Select Location to determine if you should Send!!</div>
   }
 }
