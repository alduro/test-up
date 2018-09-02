import React, { Component, Fragment } from 'react';
import { Flex, Box } from 'grid-styled';
import ReactPaginate from 'react-paginate';
import { File } from 'styled-icons/fa-regular/File';
import Column from 'ui/Column';
import Text from 'ui/Text';
import { files } from 'api/files';
import Tags from 'components/Tags';
import './styles.css';

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
        <Column mt={20} width={800}>
          <Flex m={20} justifyContent="center" alignItems="center">
            <Box px={2}>
              <Text fontSize={3}>{`Search Results - ${results} selected`}</Text>
            </Box>
          </Flex>
          <Flex flexWrap="wrap">
            {files.map(file => (
              <Fragment key={file.id}>
                <Flex width={[1, 1 / 3]} mt={50}>
                  <File size={50} />
                  <Box height={50} px={10} m={10} fontSize={[14, 22]}>
                    {file.name}
                  </Box>
                </Flex>
              </Fragment>
            ))}
          </Flex>
          <Box mt={100} px={2}>
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
