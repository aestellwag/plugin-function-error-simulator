
import * as React from 'react';

import { Button } from 'reactstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { IconButton, withTheme } from '@twilio/flex-ui';
import styled from 'react-emotion';
import ConferenceService from '../services/ConferenceService';

// Used for the custom redux state
import { connect } from 'react-redux';


class FunctionTesterView extends React.Component {
  // getting props
  constructor(props) {
    super(props); 
    this.state = { 
        handleErrorMethod: "Retry"
    };
  }

  //FIXME: You have the UI working as expect, although ugly, it works :).  You are able to dropdown the error method you wish to test
  //       and it will hit all the conditional statements which each testing scenario.  Next wee need to get the function plumbing working
  //       Create a simple function to test this and get that working.  Start with normalFunctionWorking then working your way down.

  /*
  TODO: List
        1 - Get UI up and running with a dropdown
        (COMPLETED)
        2 - Get the function plumbing up - simple function call with a response/catch error
        3 - Test normal working function
        4 - Error Method - Do Nothing -  Work on all the error scenarios
            4a - Timeouts will likely be the easiest
            4b - 503 being next
            4c - 429 could be difficult, especially for the API
        5 - Error Method - Display Error - Work on all the error scenarios
            5a - Timeouts will likely be the easiest
            5b - 503 being next
            5c - 429 could be difficult, especially for the API
        6 - Error Method - Retry - Work on all the error scenarios
            6a - Timeouts will likely be the easiest
            6b - 503 being next
            6c - 429 could be difficult, especially for the API
  */

    /* 
        PURPOSE BEHIND THIS PLUGIN
        ========================================
        ========================================
        This plugin is built to simulate various errors that you may encounter while leveraging functions and how
        best to handle the errors gracefully.  There are multiple methods to handling errors, understand your
        business's use cases and select which is most applicable for you.
        ========================================
        ========================================
    */

    // This is a call to a function were all things are normal and working
    normalFunctionWorking = () => {
        console.error(`Simulating normal function behavior`);
    }

    // Here we will simulate if the function were to return a 503 for some reason.  The handleErrorMethod passed when clicking the button
    // will determine which method we execute when the error is returned and what to do with it
    errorFunction_function503 = () => {
        console.error(`Simulating a 503 connection error to the function`);

        // Pulling the selecting of the handle error method we've selected in the UI
        let handleErrorMethod = this.state.handleErrorMethod;

        if(handleErrorMethod === "Do Nothing") {
            console.error(`We've selected to DO NOTHING to manage the 503 - here are the results:`);
        } else if(handleErrorMethod === "Retry") {
            console.error(`We've selected to RETRY to manage the 503 - here are the results:`);
        } else if(handleErrorMethod === "Display Error") {
            console.error(`We've selected to DISPLAY the ERROR for the 503 - here are the results:`);
        }
    }

    // Here we will simulate if the function were to return a 429 for some reason.  The handleErrorMethod passed when clicking the button
    // will determine which method we execute when the error is returned and what to do with it
    errorFunction_function429 = () => {
        console.error(`Simulating exceeding the concurrent function limit`);

        // Pulling the selecting of the handle error method we've selected in the UI
        let handleErrorMethod = this.state.handleErrorMethod;

        if(handleErrorMethod === "Do Nothing") {
            console.error(`We've selected to DO NOTHING to manage the 429 - here are the results:`);
        } else if(handleErrorMethod === "Retry") {
            console.error(`We've selected to RETRY to manage the 429 - here are the results:`);
        } else if(handleErrorMethod === "Display Error") {
            console.error(`We've selected to DISPLAY the ERROR for the 429 - here are the results:`);
        }
    }


    // Here we will simulate if the function were to hit the 10 second timeout limit for some reason.  The handleErrorMethod passed when clicking the button
    // will determine which method we execute when the error is returned and what to do with it
    errorFunction_functionTimeout = () => {
        console.error(`Simulating a function exceeding the default 10 second execution timeout`);

        // Pulling the selecting of the handle error method we've selected in the UI
        let handleErrorMethod = this.state.handleErrorMethod;

        if(handleErrorMethod === "Do Nothing") {
            console.error(`We've selected to DO NOTHING to manage the function timeout - here are the results:`);
        } else if(handleErrorMethod === "Retry") {
            console.error(`We've selected to RETRY to manage the function timeout - here are the results:`);
        } else if(handleErrorMethod === "Display Error") {
            console.error(`We've selected to DISPLAY the ERROR for the function timeout - here are the results:`);
        }
    }

    // Here we will simulate when the function calls an API and the api were to return a 503 for some reason.  The handleErrorMethod passed when clicking the button
    // will determine which method we execute when the error is returned and what to do with it
    errorFunction_api503 = () => {
        console.error(`Simulating a function calling an api that returns a 503`);

        // Pulling the selecting of the handle error method we've selected in the UI
        let handleErrorMethod = this.state.handleErrorMethod;

        if(handleErrorMethod === "Do Nothing") {
            console.error(`We've selected to DO NOTHING to manage the api returning a 503 - here are the results:`);
        } else if(handleErrorMethod === "Retry") {
            console.error(`We've selected to RETRY to manage the api returning a 503 - here are the results:`);
        } else if(handleErrorMethod === "Display Error") {
            console.error(`We've selected to DISPLAY the ERROR for the api returning a 503 - here are the results:`);
        }
    }

    // Here we will simulate when the function calls an API and the api were to return a 429 for some reason.  The handleErrorMethod passed when clicking the button
    // will determine which method we execute when the error is returned and what to do with it
    errorFunction_api429 = () => {
        console.error(`Simulating a function calling an api that returns a 429`);

        // Pulling the selecting of the handle error method we've selected in the UI
        let handleErrorMethod = this.state.handleErrorMethod;

        if(handleErrorMethod === "Do Nothing") {
            console.error(`We've selected to DO NOTHING to manage the api returning a 429 - here are the results:`);
        } else if(handleErrorMethod === "Retry") {
            console.error(`We've selected to RETRY to manage the api returning a 429 - here are the results:`);
        } else if(handleErrorMethod === "Display Error") {
            console.error(`We've selected to DISPLAY the ERROR for the api returning a 429 - here are the results:`);
        }
    }

    // Here we will simulate when the function calls an API and the api were to timeout for some reason.  The handleErrorMethod passed when clicking the button
    // will determine which method we execute when the error is returned and what to do with it
    errorFunction_apiTimeout = () => {
        console.error(`Simulating a function calling an api that timesouts`);

        // Pulling the selecting of the handle error method we've selected in the UI
        let handleErrorMethod = this.state.handleErrorMethod;

        if(handleErrorMethod === "Do Nothing") {
            console.error(`We've selected to DO NOTHING to manage the api timing out - here are the results:`);
        } else if(handleErrorMethod === "Retry") {
            console.error(`We've selected to RETRY to manage the api timing out - here are the results:`);
        } else if(handleErrorMethod === "Display Error") {
            console.error(`We've selected to DISPLAY the ERROR for the api timing out - here are the results:`);
        }
    }

    // Render the function simulator buttons
    // TODO: Potentially add a timeout for buttons for certain simulations
    render() {

        const errorHandlingMethod = [
            'Do Nothing', 'Retry', 'Display Error'
          ];
        const defaultOption = this.state.errorHandlingMethod;
        
        return (
            <div>
                <Dropdown 
                    options={errorHandlingMethod}
                    onChange={(errorMethodSelected) => this.setState({handleErrorMethod: errorMethodSelected.value })} 
                    value={defaultOption} 
                    placeholder="Error Handling Method" 
                />;
                <Button
                    onClick={this.normalFunctionWorking}
                    title="Normal Function Test"
                >
                    Normal Function Working Test 
                </Button>
                <Button
                    onClick={this.errorFunction_function503}
                    title="503 Function Error Test"
                >
                    503 Function Error Test
                </Button>
                <Button
                    onClick={this.errorFunction_function429}
                    title="429 Function Error Test"
                >
                    429 Function Error Test
                </Button>
                <Button
                    onClick={this.errorFunction_functionTimeout}
                    title="Timeout Function Error Test"
                >
                    Timeout Function Error Test
                </Button>
                <Button
                    onClick={this.errorFunction_api503}
                    title="503 API Error Test"
                >
                    503 API Error Test
                </Button>
                <Button
                    onClick={this.errorFunction_api429}
                    title="429 Function Error Test"
                >
                    429 API Error Test
                </Button>
                <Button
                    onClick={this.errorFunction_apiTimeout}
                    title="Timeout API Error Test"
                >
                    Timeout API Error Test
                </Button>
            </div>
        );
    }
}


export default (withTheme(FunctionTesterView));