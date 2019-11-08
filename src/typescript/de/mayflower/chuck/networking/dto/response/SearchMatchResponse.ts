
    /*******************************************************************************************************************
    *   The response model for the route 'search/match'.
    *******************************************************************************************************************/
    // tslint:disable:completed-docs
    export interface SearchMatchResponse
    {
        _shards: {
            failed:     number;
            skipped:    number;
            successful: number;
            total:      number;
        };
        hits: {
            hits:
                Array<
                    {
                        _id: string;
                        _index: string;
                        _score: string;
                        _source: {
                            author: string;
                            cover_url: string;
                            doc_group: string[];
                            doc_id: string;
                            file_path?: string;
                            file_url: string;
                            language: string;
                            pages: number;
                            publish_date: string;
                            title: string;
                        };
                        _type: string;
                        highlight: any; // 'content.german': string[];
                        sort: Array<string | number>;
                    }
                >
            ;
            max_score: string;
            total: {
                relation: string;
                value: number;
            };
        };
        timed_out: boolean;
        took: number;
    }
