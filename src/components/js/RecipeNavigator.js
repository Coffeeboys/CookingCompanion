/**
 * Created by Trevor on 1/21/2017.
 */
import * as React from "react";
import VerticalLinearStepper from "./VerticalLinearStepper";

/**
 * A wrapper for the VerticalLinearStepper that takes the state passed by ReactRouter (from a link),
 * and passes it to the VerticalLinearStepper. More functionality may be added to the wrapper later
 */
class RecipeNavigator extends React.Component {
  render () {
    return (
        <VerticalLinearStepper directions={this.props.location.state}/>
    )
  }
}

export default RecipeNavigator;