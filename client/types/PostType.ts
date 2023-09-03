export enum PostTypes {
    "" = "",
    laws = "Laws",
    whistleblowing = "Whistleblowing",
    lgbt = "LGBTIQA+",
    copyright = "Copyright",
    self = "Self"

}

export interface PostType {
    title: string,
    id: string,
    type: PostTypes
    author?: string,
    date: Date,
    postBody?: string,
    filters: []
}
