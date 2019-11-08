
    import * as gp    from '../..';
    import * as React from 'react';
    import * as antd  from 'antd';

    /*******************************************************************************************************************
    *   The React state for the Website component.
    *******************************************************************************************************************/
    export interface WebsiteState
    {
        /** The current selected menu item. */
        currentMenuItem :gp.MenuItem;
        /** Determines if the Sider is currently collapsed. */
        collapsedSider  :boolean;
    }

    /*******************************************************************************************************************
    *   The react component that represents the entire website.
    *******************************************************************************************************************/
    export class Website extends React.Component<any, gp.WebsiteState>
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
                currentMenuItem: gp.MenuItem.SEARCH_PDF,
                collapsedSider:  false,
            };
        }

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            gp.Debug.react.log( 'Website.render() being invoked' );

            return <antd.Layout className="mainLayout">

                <gp.Menu
                    onChangeMenu={    ( key:gp.MenuItem   ) :void => { this.onChangeMenu( key );          } }
                    onCollapseSider={ ( collapsed:boolean ) :void => { this.onCollapseSider( collapsed ); } }
                />

                <antd.Layout
                    className={
                        (
                            this.state.collapsedSider
                            ? 'contentLayoutSiderCollapsed'
                            : 'contentLayoutSiderExpanded'
                        )
                    }
                >

                    <antd.Layout.Header className="mainHeader">
                        { gp.Setting.TITLE }
                    </antd.Layout.Header>

                    <gp.Content
                        currentSite={ this.state.currentMenuItem }
                    />

                    <antd.Layout.Footer className="mainFooter">
                        { gp.Setting.COPYRIGHT }
                    </antd.Layout.Footer>

                </antd.Layout>

            </antd.Layout>;
        }

        /***************************************************************************************************************
        *   Being invoked when the selected menu index is changed.
        *   This method is not invoked when the current active menu item is clicked again.
        *
        *   @param key The current selected key index in the menu.
        ***************************************************************************************************************/
        private onChangeMenu( key:gp.MenuItem ) : void
        {
            gp.Debug.major.log( 'Website.onChangeMenu to key [' + key + ']' );

            this.setState(
                {
                    currentMenuItem: key,
                    collapsedSider:  this.state.collapsedSider,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the sider collapses or expands.
        *
        *   @param collapsed If the sider is now collapsed or expanded.
        ***************************************************************************************************************/
        private onCollapseSider( collapsed:boolean ) : void
        {
            gp.Debug.major.log( 'onCollapseSider [' + collapsed + ']' );

            this.setState(
                {
                    // TODO to ...this.state,

                    currentMenuItem: this.state.currentMenuItem,
                    collapsedSider:  collapsed,
                }
            );
        }
    }
