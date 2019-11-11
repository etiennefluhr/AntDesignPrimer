
    import * as gp    from '../..';
    import { Menu }   from '../..';
    import * as React from 'react';
    import * as antd  from 'antd';

    /*******************************************************************************************************************
    *   The React state for the Website component.
    *******************************************************************************************************************/
    export interface WebsiteState
    {
        /** The current selected menu item. */
        currentMenuItem :gp.MenuItem;
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
                currentMenuItem: gp.MenuItem.RANDOM_JOKE,
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

            return <antd.Layout>

                <Menu
                    onChangeMenu={ ( key:gp.MenuItem ) :void => { this.onChangeMenu( key ); } }
                />

                <antd.Layout>

                    <antd.Layout.Header>{ gp.Setting.TITLE }</antd.Layout.Header>

                    <gp.Content
                        currentSite={ this.state.currentMenuItem }
                    />

                    <antd.Layout.Footer>{ gp.Setting.COPYRIGHT }</antd.Layout.Footer>

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
                }
            );
        }
    }
