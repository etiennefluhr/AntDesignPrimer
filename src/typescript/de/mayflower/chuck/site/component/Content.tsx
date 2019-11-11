
    import * as gp    from '../..';
    import * as React from 'react';
    import * as antd  from 'antd';

    /*******************************************************************************************************************
    *   React properties for the Content component.
    *******************************************************************************************************************/
    export interface ContentProps
    {
        /** The current selected content site to display. */
        currentSite: gp.MenuItem;
    }

    /*******************************************************************************************************************
    *   The react component that represents the content part of the website.
    *******************************************************************************************************************/
    export class Content extends React.Component<gp.ContentProps, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            gp.Debug.react.log( 'Content.render() being invoked' );

            return <antd.Layout.Content style={ { padding: '30px 50px', } } >

                <div>
                    { this.createContent() }
                </div>

            </antd.Layout.Content>;
        }

        /***************************************************************************************************************
        *   Creates the different content part for this Content component.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        private createContent() : JSX.Element
        {
            switch ( this.props.currentSite )
            {
                case gp.MenuItem.RANDOM_JOKE:
                {
                    return <gp.SearchPdf />;
                }

                default:
                {
                    return <div className="mainContentContainer">
                        To be defined ..
                    </div>;
                }
            }
        }
    }
