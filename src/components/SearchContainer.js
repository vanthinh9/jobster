import React, { useMemo, useState } from 'react';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice';
const SearchContainer = () => {
    const [localSearch, setLocalSearch] = useState('');
    const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.allJobs);
    const dispatch = useDispatch();
    const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

    const handleSearch = (e) => {
        // if (isLoading) return;
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name: name, value: value }));
    };

    const debounce = () => {
        console.log('debounce called');
        let timeoutID;
        return (e) => {
            setLocalSearch(e.target.value);
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => {
                dispatch(handleChange({ name: e.target.value, value: e.target.value }));
            }, 1000);
        };
    };
    const optimizedDebounce = useMemo(() => debounce(), []);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalSearch('');
        dispatch(clearFilters());
    };
    return (
        <Wrapper>
            <form className="form">
                <h4>search form</h4>
                <div className="form-center">
                    {/* search position */}
                    <FormRow type="text" name="search" value={search} handleChange={handleSearch} />{' '}
                    {/* search by status */}
                    <FormRowSelect
                        labelText="status"
                        name="searchStatus"
                        value={localSearch}
                        handleChange={optimizedDebounce}
                        list={['all', ...statusOptions]}
                    />
                    {/* search by type */}
                    <FormRowSelect
                        labelText="type"
                        name="searchType"
                        value={searchType}
                        handleChange={handleSearch}
                        list={['all', ...jobTypeOptions]}
                    />
                    {/*  sort */}
                    <FormRowSelect name="sort" value={sort} handleChange={handleSearch} list={sortOptions} />
                    <button className="btn btn-block btn-danger" disabled={isLoading} onClick={handleSubmit}>
                        clear filters
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};

export default SearchContainer;
