import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import parseDefinitions from '../../utils/DefinitionParser'


/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class VerticalLinearStepper extends React.Component {

    constructor(props) {
        super(props);
    }

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    console.log("Next called");
    let tempStepIndex = this.state.stepIndex + 1;
    let tempFinished = tempStepIndex >= this.props.directions.length;

    this.setState({
      stepIndex: tempStepIndex,
      finished: tempFinished,
    });

    window.responsiveVoice.speak(this.props.directions[tempStepIndex].step);
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    let tempStepIndex = this.state.stepIndex - 1;

    if (stepIndex > 0) {
      this.setState({stepIndex: tempStepIndex});
    }
      window.responsiveVoice.speak(this.props.directions[tempStepIndex].step);
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
        <div style={{margin: '12px 0'}}>
          <RaisedButton
              label={stepIndex === this.props.directions.length - 1 ? 'Finish' : 'Next'}
              disableTouchRipple={true}
              disableFocusRipple={true}
              primary={true}
              onTouchTap={this.handleNext}
              style={{marginRight: 12}}
          />
          {step > 0 && (
              <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  disableTouchRipple={true}
                  disableFocusRipple={true}
                  onTouchTap={this.handlePrev}
              />
          )}
        </div>
    );
  }

    componentWillMount() {

        window.responsiveVoice.speak("Welcome to Recipe Navigation");

        window.responsiveVoice.speak(this.props.directions[this.state.stepIndex].step);

        var commands = {
            'next *': () => {this.handleNext(); },
            'back' : () => {this.handlePrev();},
            'previous' : () => {this.handlePrev()},
            'forward' : () => this.handleNext(),
            'quiet' : () => this.cancelVoice(),
            'continue' : () => this.resumeVoice(),
        };

        window.annyang.addCommands(commands);

        window.annyang.start();

    }

    cancelVoice() {
      window.responsiveVoice.pause();
    }

    resumeVoice() {
      window.responsiveVoice.resume();
    }

  render() {
    const {finished, stepIndex} = this.state;

    return (
        <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
          <Stepper activeStep={stepIndex} orientation="vertical">
            {this.props.directions.map((step, i) => {
              return (<Step key={i}>
                <StepLabel>{step.number}</StepLabel>
                <StepContent>
                  {parseDefinitions(step.step)}
                  {this.renderStepActions(i)}
                </StepContent>
              </Step>);
            })}
          </Stepper>
          {finished && (
              <p style={{margin: '20px 0', textAlign: 'center'}}>
                <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      this.setState({stepIndex: 0, finished: false});
                    }}
                >
                  Click here
                </a> to go back to the beginning.
              </p>
          )}
        </div>
    );
  }
}

export default VerticalLinearStepper;