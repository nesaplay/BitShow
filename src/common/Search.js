import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

    valueHandler = () => {
        clearTimeout(this.delayTimer);
        this.delayTimer = setTimeout(this.renderSearch, 300);
    }

    renderSearch = () => {

        let query = this.search.value;

        const config = {
            method: 'get',
            url: `http://api.tvmaze.com/search/shows?q=${query}`,
            headers: { 'Content-Type': 'application/json' }
        }

        axios(config)
            .then(({ data }) => this.setState({ results: data, isHidden: false }))
            .catch(error => console.warn(error.response));

    }

    reset = () => {
        this.search.value = '';
        this.setState({ isHidden: true })
    }

    render() {

        const { results } = this.state;

        return (
            <form className="form-inline search-form">
                <input className="form-control mr-sm-2" id="search" type="search" ref={node => { this.search = node }} onChange={this.valueHandler} placeholder="Search" aria-label="Search" />
                <ul className={['search-list', 'list-group', 'list-group-flush', this.state.isHidden && 'd-none'].join(' ')}>
                    {results.map(item =>
                        <li className='list-group-item border search-list-item' key={item.show.id} onClick={this.reset}>
                            <Link className='search-link-item' to={`/${item.show.id}`}>
                                {item.show.name}
                                <span className="badge badge-default badge-pill float-right badge-size">{item.show.rating.average}</span>
                            </Link>
                        </li>)}
                </ul>
            </form>
        );
    }
}

export default Search;