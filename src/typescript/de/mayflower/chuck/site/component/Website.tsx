
    import * as gp    from '../..';
    import * as React from 'react';
    import * as antd  from 'antd';
    import TweenOne   from 'rc-tween-one';

    /*******************************************************************************************************************
    *   The React state for the Website component.
    *******************************************************************************************************************/
    export interface WebsiteState
    {
        /** The current selected menu item. */
        currentMenuItem :gp.MenuItem;
        /** Determines if the Sider is currently collapsed. */
        collapsedSider  :boolean;
        /** The target menu item to change to. */
        targetMenuItem  :gp.MenuItem;
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
                targetMenuItem:  null,
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

                <TweenOne animation={ gp.Animation.INIT_SHOW_MENU }>
                    <gp.Menu
                        onChangeMenu={    ( key:gp.MenuItem   ) :void => { this.onChangeMenu( key );          } }
                        onCollapseSider={ ( collapsed:boolean ) :void => { this.onCollapseSider( collapsed ); } }
                    />
                </TweenOne>

                <antd.Layout
                    className={
                        (
                            this.state.collapsedSider
                            ? 'contentLayoutSiderCollapsed'
                            : 'contentLayoutSiderExpanded'
                        )
                    }
                >

                    <TweenOne animation={ gp.Animation.INIT_SHOW_HEADER }>
                        <antd.Layout.Header className="mainHeader">
                            PDF Search Engine Frontend
                        </antd.Layout.Header>
                    </TweenOne>

                    <TweenOne
                        animation={

                            // TODO extract to method getContentLayoutAnimation()
                            this.state.targetMenuItem === null
                            ? gp.Animation.INIT_SHOW_CONTENT
                            : this.state.targetMenuItem !== this.state.currentMenuItem
                                ? {
                                    ...gp.Animation.HIDE_CONTENT,
                                    onComplete: ( e:any ) :void => {
                                        this.onContentLayoutFadeOutCompleted();
                                    },
                                }
                                : gp.Animation.SHOW_CONTENT
                        }
                    >
                        <gp.Content
                            currentSite={ this.state.currentMenuItem }
                        />
                    </TweenOne>

                    <TweenOne animation={ gp.Animation.INIT_SHOW_FOOTER }>
                        <antd.Layout.Footer className="mainFooter">
                            &copy; 2019 Mayflower GmbH
                        </antd.Layout.Footer>
                    </TweenOne>

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
                    currentMenuItem: this.state.currentMenuItem,
                    collapsedSider:  this.state.collapsedSider,
                    targetMenuItem:  key,
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
                    targetMenuItem:  this.state.targetMenuItem,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the content layout has completed fading out.
        ***************************************************************************************************************/
        private onContentLayoutFadeOutCompleted() : void
        {
            gp.Debug.major.log( 'onContentLayoutFadeOutCompleted being invoked' );

            this.setState(
                {
                    // TODO to ...this.state,

                    currentMenuItem: this.state.targetMenuItem,
                    collapsedSider:  this.state.collapsedSider,
                    targetMenuItem:  this.state.targetMenuItem,
                }
            );
        }
    }
