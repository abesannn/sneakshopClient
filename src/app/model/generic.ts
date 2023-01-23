export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}

export interface IPage<T> {
        content: T[];
        pageable: Pageable;
        last: boolean;
        totalPages: number;
        totalElements: number;
        numberOfElements: number;
        first: boolean;
        size: number;
        number: number;
        sort: Sort;
        empty: boolean;
    }



