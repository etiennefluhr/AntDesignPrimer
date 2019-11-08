
    import * as gp    from '../..';
    import * as React from 'react';
    import * as antd  from 'antd';
    import { Meta }   from 'antd/lib/list/Item';
    import TweenOne   from 'rc-tween-one';

    /*******************************************************************************************************************
    *   React properties for the SearchResults component.
    *******************************************************************************************************************/
    export interface SearchResultsProps
    {
        /** The current search results to display in the 'search results' area. */
        searchResults: gp.SearchMatchResponse;
    }

    /*******************************************************************************************************************
    *   The react component that represents the search results part of the website.
    *******************************************************************************************************************/
    export class SearchResults extends React.Component<gp.SearchResultsProps, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            gp.Debug.react.log( 'SearchResults.render() being invoked' );

            if ( this.props.searchResults === null )
            {
                return <div />;
            }

            return this.createSearchResults();
        }

        /***************************************************************************************************************
        *   Creates the section with all Ant Design card layouts that represent the search results
        *
        *   @return The constructed JSX element.
        ***************************************************************************************************************/
        private createSearchResults() : JSX.Element
        {
            const items :JSX.Element[] = [];
            const hits  :any[]         = this.props.searchResults.hits.hits;

            for ( let i:number = 0; i < hits.length; ++i )
            {
                const hit:any = hits[ i ];

                items.push(
                    this.createSearchResult( hit )
                );
            }

            return <div className="mainContentContainer">

                { items }

                <div style={ { clear: 'both', } } />

            </div>
        }

        /***************************************************************************************************************
        *   Creates one single Ant Design card layout that represent one search results
        *
        *   @return The constructed JSX element.
        ***************************************************************************************************************/
        private createSearchResult( hit:any ) : JSX.Element
        {
            return <antd.Card
                className="searchResultCard"
                cover={
                    <img
                        alt="example"
                        src={ hit._source.cover_url }
                    />
                }
                actions={
                    [
                        <antd.Icon type="read" onClick={
                            () :void => { this.onClickButtonRead( hit._source.file_url ); }
                        } />,
                        <antd.Icon type="cloud-download" onClick={
                            () :void => { this.onClickButtonDownload( hit._source.file_url ); }
                        } />,
                    ]
                }
            >
                <Meta
                    title={       hit._source.title  }
                    description={ hit._source.author }
                />

                {
                /*
                    avatar={
                        <antd.Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                    }
                */
                }

            </antd.Card>
        }

        /***************************************************************************************************************
        *   Being invoked when the 'read' button is pressed on one search result card.
        *
        *   @param pdfFile The URL of the pdf file to open in a new tab.
        ***************************************************************************************************************/
        private onClickButtonRead( pdfFile:string ) : void
        {
            gp.Debug.major.log( 'SearchResults.onClickButtonRead() being invoked' );
            gp.Debug.major.log( 'Opening file [' + pdfFile + ']' );

            // TODO can also be achieved by wrapping the Item tag with a link
            window.open( pdfFile, '_blank' );
        }

        /***************************************************************************************************************
        *   Being invoked when the 'download' button is pressed on one search result card.
        *
        *   @param pdfFile The URL of the pdf file to download.
        ***************************************************************************************************************/
        private onClickButtonDownload( pdfFile:string ) : void
        {
            gp.Debug.major.log( 'SearchResults.onClickButtonDownload() being invoked' );
            gp.Debug.major.log( 'Downloading file [' + pdfFile + ']' );

            // TODO add server-sided header 'Content-Type: application/octet-stream'
            window.open( pdfFile, '_blank' );
        }
    }
