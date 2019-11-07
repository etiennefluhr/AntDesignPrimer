
    /*******************************************************************************************************************
    *   The response model for the route 'search/groups'.
    *******************************************************************************************************************/
    export interface SearchGroupResponse
    {
        /** The number of docs in this group. */
        docCount: number;

        /** The type (name) of the doc in this group. */
        docType: string;
    }
