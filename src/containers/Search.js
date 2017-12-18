import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderSearch, resetSearch } from '../actions/index';

import '../css/Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.delayTimer = null;
    }

    valueHandler = () => {
        clearTimeout(this.delayTimer);
        this.delayTimer = setTimeout(() => {
            this.props.renderSearch(this.search.value);
        }, 300);
    }

    reset = () => {
        this.search.value = '';
        this.props.resetSearch();
    }

    render() {

        const { searchList } = this.props.searchData;

        return (
            <form className='form-inline search-form' onSubmit={e => { e.preventDefault() }}>
                <input className='form-control mr-sm-2' id='search' type='search' ref={node => { this.search = node }} onChange={this.valueHandler} placeholder='Search' aria-label='Search' />
                <ul className={['search-list', 'list-group', 'list-group-flush', this.props.searchData.isHidden && 'd-none'].join(' ')}>
                    {searchList.map(item =>
                        <li className='list-group-item border search-list-item' key={item.show.id} onClick={this.reset}>
                            <Link className='search-link-item' to={`/${item.show.id}`}>
                                <div className='cast-item'>
                                    {item.show.name}
                                    <span className='badge badge-default badge-pill float-right badge-size'>{item.show.rating.average}</span>
                                </div>
                            </Link>
                        </li>)}
                </ul>
            </form>
        );
    }
}

function mapStateToProps({ searchData }) {
    return { searchData };
}

export default connect(mapStateToProps, { renderSearch, resetSearch })(Search);