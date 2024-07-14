type PropsType = {
    pageNumber: number;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination(props: PropsType) {
    const { pageNumber, setPageNumber } = props;

    const prevPage = () => {
        if (pageNumber > 1) setPageNumber(pageNumber - 1);
    };

    const nextPage = () => {
        setPageNumber(pageNumber + 1);
    };

    return (
        <div>
            <div onClick={prevPage}>&lt;</div>
            <div>{pageNumber}</div>
            <div onClick={nextPage}>&gt;</div>
        </div>
    );
}
