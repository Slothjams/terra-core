import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResponsiveElement from 'terra-responsive-element';

import 'terra-base/lib/baseStyles';
import styles from './Paginator.module.scss';

import { calculatePages, KEYCODES } from './_paginationUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page.
   */
  selectedPage: PropTypes.number.isRequired,
  /**
   * Total number of all items being paginated.
   */
  totalCount: PropTypes.number.isRequired,
  /**
   * Total number of items per page.
   */
  itemCountPerPage: PropTypes.number.isRequired,
};

class ProgressivePaginator extends React.Component {
  constructor(props) {
    super(props);

    const { selectedPage, totalCount } = this.props;

    this.state = {
      pageInput: selectedPage,
      selectedPage: selectedPage && totalCount ? selectedPage : undefined,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageInput = this.handlePageInput.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.defaultProgressivePaginator = this.defaultProgressivePaginator.bind(this);
    this.reducedProgressivePaginator = this.reducedProgressivePaginator.bind(this);
  }

  handlePageInput(e) {
    this.setState({ pageInput: e.target.value });
  }

  handlePageChange(index) {
    return (event) => {
      event.preventDefault();

      this.props.onPageChange(index);
      this.setState({ pageInput: index, selectedPage: index });
    };
  }

  handleOnKeyDown(index) {
    return (event) => {
      if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
        event.preventDefault();

        if (isNaN(index)) {
          this.props.onPageChange(event.target.text.trim().toLowerCase());

          return false;
        }

        this.props.onPageChange(index);
        this.setState({
          selectedPage: index,
        });
      }

      return false;
    };
  }

  defaultProgressivePaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    return (<div className={cx(['paginator', 'progressive'])} role="navigation" aria-label="pagination">
      <div>
        Page {selectedPage} of {totalPages}
      </div>
      <div>
        <a
          aria-disabled={selectedPage === 1}
          aria-label="first"
          className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(1)}
          onKeyDown={this.handleOnKeyDown(1)}
        >
          First
        </a>
        <a
          aria-disabled={selectedPage === 1}
          aria-label="previous"
          className={cx(['nav-link', 'previous', selectedPage === 1 ? 'is-disabled' : null])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(previousPageIndex)}
          onKeyDown={this.handleOnKeyDown(previousPageIndex)}
        >
          <span className={cx('icon')} />Previous
        </a>
        <a
          aria-disabled={selectedPage === totalPages}
          aria-label="next"
          className={cx(['nav-link', 'next', selectedPage === totalPages ? 'is-disabled' : null])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(nextPageIndex)}
          onKeyDown={this.handleOnKeyDown(nextPageIndex)}
        >
          Next<span className={cx('icon')} />
        </a>
        <a
          aria-disabled={selectedPage === totalPages}
          aria-label="last"
          className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(totalPages)}
          onKeyDown={this.handleOnKeyDown(totalPages)}
        >
          Last
        </a>
      </div>
    </div>);
  }

  reducedProgressivePaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    return (<div className={cx(['paginator'])} role="navigation" aria-label="pagination">
      <div>
        <a
          aria-disabled={selectedPage === 1}
          aria-label="first"
          className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(1)}
          onKeyDown={this.handleOnKeyDown(1)}
        >
          First
        </a>
        <a
          aria-disabled={selectedPage === 1}
          aria-label="previous"
          className={cx(['nav-link', 'previous', 'icon-only', selectedPage === 1 ? 'is-disabled' : null])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(previousPageIndex)}
          onKeyDown={this.handleOnKeyDown(previousPageIndex)}
        >
          <span className={cx('icon')} />
        </a>
      </div>
      <div>
        Page {selectedPage} of {totalPages}
      </div>
      <div>
        <a
          aria-disabled={selectedPage === totalPages}
          aria-label="next"
          className={cx(['nav-link', 'next', 'icon-only', selectedPage === totalPages ? 'is-disabled' : null])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(nextPageIndex)}
          onKeyDown={this.handleOnKeyDown(previousPageIndex)}
        >
          <span className={cx('icon')} />
        </a>
        <a
          aria-disabled={selectedPage === totalPages}
          aria-label="last"
          className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(totalPages)}
          onKeyDown={this.handleOnKeyDown(totalPages)}
        >
          Last
        </a>
      </div>
    </div>);
  }

  render() {
    return <ResponsiveElement defaultElement={this.reducedProgressivePaginator()} tiny={this.defaultProgressivePaginator()} />;
  }
}

ProgressivePaginator.propTypes = propTypes;

export default ProgressivePaginator;