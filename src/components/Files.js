import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import ReactPaginate from 'react-paginate';
import Column from 'ui/Column';
import { files } from 'api/files';
import Tags from 'components/Tags';
import styles from './styles.css';

const PER_PAGE = 10;
class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      tagname: '',
      files: [],
      total_files: 0,
    };
  }

  componentDidMount() {
    const { tagname, page } = this.state;
    this.search(tagname, page);
  }

  search = (tagname, page = 1) => {
    files({ tagname, page }).then(response => {
      const { files, total_files } = response;
      this.setState({
        tagname: tagname,
        page: page,
        files: files,
        total_files: total_files,
      });
    });
  };

  render() {
    const { tagname, files, total_files } = this.state;
    const results = tagname !== '' ? tagname : 'No Tag';
    const pages = Math.ceil(total_files / PER_PAGE);
    return (
      <Flex>
        <Column mt={20}>
          <Tags onClick={this.search} />
        </Column>
        <Column mt={20} width={500}>
          <Box px={2}>{`Search Results - ${results} selected`}</Box>
          {files.map(file => (
            <Box key={file.id} px={0} mt={10} mb={10}>
              {file.name}
            </Box>
          ))}
          <Box px={2}>
            <Flex>
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={<a href="">...</a>}
                breakClassName={'break-me'}
                pageCount={pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={PER_PAGE}
                onPageChange={({ selected }) =>
                  this.search(tagname, selected + 1)
                }
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />
            </Flex>
          </Box>
        </Column>
      </Flex>
    );
  }
}

export default Files;
