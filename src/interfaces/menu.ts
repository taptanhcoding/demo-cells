export interface filType { label: string, value: string ,image?:string,link?:string}


export interface filter {
    label: string,
    code: string,
    hot: boolean,
    fil: filType[] | []
}

export interface menutype {
    title: string,
    slug: string,
    filter?: filter[]
}