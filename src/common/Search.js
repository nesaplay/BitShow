import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { dataService } from '../services/dataService';
import '../css/Search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            isHidden: false
        }
        this.delayTimer = null;
    }

    collectData = (results) => {
        this.setState({ results });
    }

    valueHandler = () => {
        clearTimeout(this.delayTimer);
        this.delayTimer = setTimeout(() => {
            this.setState({ isHidden: false });
            dataService.renderSearch(
                this.search.value, this.collectData
            )
        }, 300);
    }

    reset = () => {
        this.search.value = '';
        this.setState({ isHidden: true })
    }

    render() {

        const { results } = this.state;

        return (
            <form className='form-inline search-form' onSubmit={e => { e.preventDefault() }}>
                <input className='form-control mr-sm-2' id='search' type='search' ref={node => { this.search = node }} onChange={this.valueHandler} placeholder='Search' aria-label='Search' />
                <ul className={['search-list', 'list-group', 'list-group-flush', this.state.isHidden && 'd-none'].join(' ')}>
                    {results.map(item =>
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

export default Search;