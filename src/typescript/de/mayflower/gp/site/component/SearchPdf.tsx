
    import * as gp    from '../..';
    import * as React from 'react';
    import * as antd  from 'antd';

    /*******************************************************************************************************************
    *   The React state for the SearchPdf component.
    *******************************************************************************************************************/
    export interface SearchPdfState
    {
        /** Current search term inserted in AutoComplete search field. */
        currentSearchTerm    :string;
        /** Current search categories composed in SearchCategory multiselect field. */
        currentSearchCats    :string[];

        /** All search groups to display in this component. */
        searchGroups         :gp.SearchGroupResponse[];
        /** The search results from the last search response. */
        searchResults        :gp.SearchMatchResponse;

        /** Indicates that the search results are currently requested from the server. */
        loadingSearchResults :boolean;
    }

    /*******************************************************************************************************************
    *   The react component that represents the SearchPdf main content page.
    *******************************************************************************************************************/
    export class SearchPdf extends React.Component<any, gp.SearchPdfState>
    {
        /***************************************************************************************************************
        *   Creates a new Website React component.
        *
        *   @param props The initial properties to assign to this component.
        ***************************************************************************************************************/
        public constructor( props:any )
        {
            super( props );

            this.state = {
                currentSearchTerm:    gp.Setting.DEBUG_TEST_SEARCH_STRING,
                currentSearchCats:    [],
                searchGroups:         [],
                searchResults:        null,
                loadingSearchResults: false,
            };
        }

        /***************************************************************************************************************
        *   Being invoked when this component did mount.
        ***************************************************************************************************************/
        public componentDidMount() : void
        {
            gp.Debug.react.log( 'SearchPdf.componentDidMount() being invoked' );

            this.requestSearchCategories();
        }

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            gp.Debug.react.log( 'SearchPdf.render() being invoked' );

            return this.createSearchPdf();
        }

        /***************************************************************************************************************
        *   Creates the main content page for the 'PDF Search'.
        *
        *   @return The constructed JSX element.
        ***************************************************************************************************************/
        private createSearchPdf() : JSX.Element
        {
            const categorySelectField :JSX.Element = this.createCategorySelectField();
            const searchTermField     :JSX.Element = this.createSearchTermField();

            return <div>

                <div className="mainContentContainer">

                    <p>Your search term:</p>
                    { searchTermField }

                    <p />

                    <p>Categories to search for results:</p>
                    { categorySelectField }

                </div>

                <gp.SearchResults
                    searchResults={ this.state.searchResults }
                />

            </div>;
        }

        /***************************************************************************************************************
        *   Creates the Ant Design multi Selector field for the categories to search in.
        *
        *   @return The constructed JSX element.
        ***************************************************************************************************************/
        private createCategorySelectField() : JSX.Element
        {
            const options:JSX.Element[] = [];
            for ( let i:number = 0; i < this.state.searchGroups.length; ++i ) {
                options.push(
                    <antd.Select.Option key={ i }>{ this.state.searchGroups[ i ].docType }</antd.Select.Option>
                );
            }

            return <antd.Select
                mode="multiple"
                className="searchCategorySelectField"
                placeholder="Select your Search Category"
                defaultValue={ this.state.currentSearchCats }
                onChange={
                    ( categories:string[] ) :void => {
                        gp.Debug.major.log( 'onChange search categories being invoked' );

                        this.changeCurrentSearchCategories( categories );
                    }
                }
            >

                { options }

            </antd.Select>;
        }

        /***************************************************************************************************************
        *   Creates the Ant Design auto complete field.
        *
        *   @return The constructed JSX element.
        ***************************************************************************************************************/
        private createSearchTermField() : JSX.Element
        {
            return <antd.AutoComplete
                    className="autoCompleteSearchField"
                    size="large"
                    placeholder="input here"
                    optionLabelProp="text"
                    defaultValue={ this.state.currentSearchTerm }
                    disabled={ this.state.loadingSearchResults }
                    onSelect={
                        ( test:any ) :void => {
                            gp.Debug.major.log( 'AutoComplete onSelect ..' );
                        }
                    }
                    onSearch={
                        ( searchTerm:string ) :void => {
                            gp.Debug.major.log( 'onSearch() being invoked with term [' + searchTerm + ']' );

                            this.changeCurrentSearchTerm( searchTerm );
                        }
                    }
                >

                <antd.Input
                    suffix={
                        <antd.Button
                            className="autoCompleteSearchFieldSearchButton"
                            size="large"
                            type="primary"
                            disabled={ this.state.loadingSearchResults }
                            onClick={
                                ( mouseEvent:React.MouseEvent ) :void => {
                                    gp.Debug.major.log( 'Submitted search via search button' );

                                    this.submitSearch();
                                }
                            }
                        >
                            <antd.Icon
                                type={ this.state.loadingSearchResults ? 'loading' : 'search' }
                            />
                        </antd.Button>
                    }
                    disabled={ this.state.loadingSearchResults }
                    onPressEnter={
                        ( event:React.KeyboardEvent ) :void => {
                            gp.Debug.major.log( 'Submitted search via enter press' );

                            this.submitSearch();
                        }
                    }
                />

            </antd.AutoComplete>
        }

        /***************************************************************************************************************
        *   Being invoked when the value of the 'search term' field is changed.
        *
        *   @param searchTerm The new search term to assign.
        ***************************************************************************************************************/
        private changeCurrentSearchTerm( searchTerm:string ) : void
        {
            this.setState(
                {
                    ...this.state,

                    currentSearchTerm: searchTerm,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the value of the 'search categories' field is changed.
        *
        *   @param categories The new search categories to assign.
        ***************************************************************************************************************/
        private changeCurrentSearchCategories( categories:string[] ) : void
        {
            this.setState(
                {
                    ...this.state,

                    currentSearchCats: categories,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the 'Request Search Categories' button is clicked.
        ***************************************************************************************************************/
        private requestSearchCategories() : void
        {
            gp.Debug.network.log( 'Clicked "Request Search Categories"' );

            gp.API.getSearchGroups(
                ( data:gp.SearchGroupResponse[] ) => { this.searchCategoryDataArrived( data ); }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the group search data arrived.
        *
        *   @param searchGroups The received searchGroups.
        ***************************************************************************************************************/
        private searchCategoryDataArrived( searchGroups:gp.SearchGroupResponse[] ) : void
        {
            gp.Debug.network.log( 'received [' + searchGroups.length + '] search groups.' );

            this.setState(
                {
                    ...this.state,

                    searchGroups: searchGroups,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the 'Search' field is submitted.
        ***************************************************************************************************************/
        private submitSearch() : void
        {
            // trim the search term
            const searchTerm:string = this.state.currentSearchTerm.trim();

            gp.Debug.network.log( 'Search term is [' + searchTerm + ']' );

            // request API for strings from three chars on
            if ( searchTerm.length >= gp.Setting.MIN_SUBMIT_STRING_LENGTH )
            {
                gp.Debug.network.log( 'Search submitted for: [' + searchTerm + ']' );
                gp.Debug.network.log( 'Searching in [' + this.state.currentSearchCats.length + '] categories ' );

                // prune all current search results
                this.setState(
                    {
                        ...this.state,

                        searchResults:        null,
                        loadingSearchResults: true,
                    }
                );

                // submit a new search
                gp.API.postSearchMatch(
                    searchTerm,
                    ( data:gp.SearchMatchResponse ) => {
                        this.searchSubmitDataArrived( data );
                    }
                );
            }
        }

        /***************************************************************************************************************
        *   Being invoked when the submit search data arrived.
        *
        *   @param data The received searchMatch data model.
        ***************************************************************************************************************/
        private searchSubmitDataArrived( data:gp.SearchMatchResponse ) : void
        {
            // gp.Debug.network.log( 'received submitted search data:' );
            // gp.Debug.network.log( JSON.stringify( data ) );

            this.setState(
                {
                    ...this.state,

                    searchResults:        data,
                    loadingSearchResults: false,
                }
            );
        }
    }
