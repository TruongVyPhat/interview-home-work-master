import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import PostService, { PostServiceError } from '../../service/post.service';
import { Search } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const SearchInput = () => {
    const history = useHistory();
    const initialState = { isLoading: false, results: [], value: '' };
    const [curState, setCurState] = useState(initialState);
    const [source, setSource] = useState([]);
    useEffect(() => {
        getTotalTitle();
    }, []);

    const getTotalTitle = async () => {
		try {
			const response = await PostService.get_all_titles();
			if (response.message === 'OK') {
				setSource(response.data);
			}
		} catch(e) {
            setSource([]);
        }
	}

    const handleResultSelect = (e, { result }) => {
        setCurState({ isLoading: false, results: [], value: result.title });
        history.push(`/posts/${result.id}`);
    }

    const handleSearchChange = (e, { value }) => {
        setCurState({ isLoading: true, value: value, results: [] });
        const re = new RegExp(_.escapeRegExp(value), 'i');
        const isMatch = (result) => re.test(result.title);
        setCurState({
            isLoading: false,
            results: _.filter(source, isMatch),
            value: value
        });
    };

    return (
        <Search
            size="small"
            loading={curState.isLoading}
            onResultSelect={handleResultSelect}
            onSearchChange={_.debounce(handleSearchChange, 500, {
                leading: true
            })}
            noResultsMessage='No result'
            className='search__input'
            results={curState.results}
            value={curState.value}
            style={{paddingBottom: '15px'}}
        />
    );
}
export default SearchInput;