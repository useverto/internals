export interface PaginationInfo {
    count: number,
    pageSize: number,
    page: number,
    maxPages: number
}

export interface PaginationResult<T = any> {
    items: Array<T>,
    paginationInfo: PaginationInfo
}
