import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class VerticalLinearStepper extends React.Component {
  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    // const {stepIndex} = this.state;

    let tempStepIndex = this.state.stepIndex + 1;
    let tempFinished = tempStepIndex >= this.props.steps.length;

    this.setState({
      stepIndex: tempStepIndex,
      finished: tempFinished,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
        <div style={{margin: '12px 0'}}>
          <RaisedButton
              label={stepIndex === 2 ? 'Finish' : 'Next'}
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

  render() {
    const {finished, stepIndex} = this.state;

    return (
        <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
          <Stepper activeStep={stepIndex} orientation="vertical">
            {this.props.steps.map((step, i) => {
              return (<Step key={i}>
                <StepLabel>{step.number}</StepLabel>
                <StepContent>
                  <p>
                    {step.step}
                  </p>
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
                </a> to reset the example.
              </p>
          )}
        </div>
    );
  }
}

export default VerticalLinearStepper;