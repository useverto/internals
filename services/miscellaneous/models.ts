export interface PaginationInfo {
    count: number,
    pageSize: number,
    page: number,
    maxPages: number,
    found: number
}

export interface PaginationResult<T = any> {
    items: Array<T>,
    paginationInfo: PaginationInfo
}
