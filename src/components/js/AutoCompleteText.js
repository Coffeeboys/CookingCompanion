import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
class AutoCompleteText extends React.Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({

    });
  };

  render() {
    return (
        <div>
          <AutoComplete
              fullWidth={true}
              hintText="Search Recipes"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
              onNewRequest={this.props.callback}
          />
        </div>
    );
  }
}

export default AutoCompleteText;