import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LOGOUTUSER } from '../Actions/Action';

const mapStatetoProps = (state) => ({loggedinUser : state.loginUser});

const mapDispatchtoProps = (dispatch) => ({
    logoutUser: (userInfo) => dispatch(LOGOUTUSER(userInfo)),
});

function Landing({history, loggedinUser, logoutUser}) {

    function resetLoginUser(e) {
        const eventType = e.type;

        setTimeout(function() {
            console.log('inside event type', e.type);
            console.log('eventType', eventType);
        }, 0)
        // logoutUser(loggedinUser[0]);
        // history.push('/login');
    }
    return (
        <div className="App">
            <header className="App-header">
                Welcome { 
                    loggedinUser.map((user, index) => <div key={index}>{user.firstName}</div>)
                }
                <br /><br /><br />
                <button className="logout-button" onClick={resetLoginUser}>Logout</button>
            </header>
        </div>
    )
}

const routerComponet = withRouter(Landing);
export default connect(mapStatetoProps, mapDispatchtoProps)(routerComponet);
