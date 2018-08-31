import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import Column from 'ui/Column';
import { tags } from 'api/files';

class Tags extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }

  componentDidMount() {
    tags().then(response => {
      this.setState({ tags: response });
    });
  }

  render() {
    const { tags } = this.state;
    const { onClick } = this.props;
    return (
      <Flex flexDirection="column">
        <Box px={2}>Tags</Box>
        <Column mt={20} width={200}>
          {tags.map(tag => (
            <Box key={tag.tag} px={0} mt={10} mb={10}>
              <div onClick={() => onClick(tag.tag)}>
                {tag.tag} ({tag.files})
              </div>
            </Box>
          ))}
        </Column>
      </Flex>
    );
  }
}

export default Tags;
