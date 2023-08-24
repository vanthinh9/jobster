import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../features/allJobs/allJobsSlice';

const PageBtnContainer = () => {
    const { numOfPages, page } = useSelector((store) => store.allJobs);
    const distpatch = useDispatch();
    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1;
    });

    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > numOfPages) {
            newPage = 1;
        }
        distpatch(changePage(newPage));
    };
    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = numOfPages;
        }
        distpatch(changePage(newPage));
    };

    return (
        <Wrapper>
            <button type="button" className="prev-btn" onClick={prevPage}>
                <HiChevronDoubleLeft />
                prev
            </button>
            <div className="btn-container">
                {pages.map((pageNumber) => {
                    return (
                        <button
                            type="button"
                            key={pageNumber}
                            className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
                            onClick={() => distpatch(changePage(pageNumber))}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
            </div>
            <button type="button" className="prev-btn" onClick={nextPage}>
                <HiChevronDoubleRight />
                next
            </button>
        </Wrapper>
    );
};

export default PageBtnContainer;
