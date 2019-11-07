
    import * as gp    from '../..';
    import * as React from 'react';
    import * as antd from 'antd';
    import { SelectParam } from 'antd/lib/menu';

    /*******************************************************************************************************************
    *   React properties for the Menu component.
    *******************************************************************************************************************/
    export interface MenuProps
    {
        /** Being invoked when the selected menu item changes. */
        onChangeMenu: ( key:gp.MenuItem ) => void;
        /** Being invoked when the menu sider collapses or expands. */
        onCollapseSider: ( collapsed:boolean ) => void;
    }

    /*******************************************************************************************************************
    *   The react component that represents the site menu.
    *******************************************************************************************************************/
    export class Menu extends React.Component<gp.MenuProps, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            gp.Debug.react.log( 'Menu.render() being invoked' );

            return <antd.Layout.Sider
                    className="mainSider"
                    breakpoint="lg"
                    collapsedWidth="0"
                    theme="light"
                    onCollapse={
                        ( collapsed:boolean, type:any ) :void => {
                            this.props.onCollapseSider( collapsed );
                        }
                    }
                >

                <div className="logo" />

                <antd.Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={ [ gp.MenuItem.SEARCH_PDF ] }
                    onSelect={ ( param:SelectParam ) :void => { this.props.onChangeMenu( param.key as gp.MenuItem ); } }
                >

                    <antd.Menu.Item key={ gp.MenuItem.SEARCH_PDF }>
                        <antd.Icon type="user" />
                        <span className="nav-text">{ gp.MenuItem.SEARCH_PDF }</span>
                    </antd.Menu.Item>

                    <antd.Menu.Item key={ gp.MenuItem.DOWNLOAD }>
                        <antd.Icon type="video-camera" />
                        <span className="nav-text">{ gp.MenuItem.DOWNLOAD }</span>
                    </antd.Menu.Item>

                    <antd.Menu.Item key={ gp.MenuItem.ABOUT }>
                        <antd.Icon type="upload" />
                        <span className="nav-text">{ gp.MenuItem.ABOUT }</span>
                    </antd.Menu.Item>

                    <antd.Menu.Item key={ gp.MenuItem.GO_PREMIUM }>
                        <antd.Icon type="user" />
                        <span className="nav-text">{ gp.MenuItem.GO_PREMIUM }</span>
                    </antd.Menu.Item>

                    <antd.Menu.SubMenu
                        key={ gp.MenuItem.EXTENDED }
                        title={
                        <span>
                        <antd.Icon type="appstore" />
                        <span>{ gp.MenuItem.EXTENDED }</span>
                        </span>
                    }>

                        <antd.Menu.Item key={ gp.MenuItem.LEGAL   }>{ gp.MenuItem.LEGAL   }</antd.Menu.Item>
                        <antd.Menu.Item key={ gp.MenuItem.IMPRINT }>{ gp.MenuItem.IMPRINT }</antd.Menu.Item>

                    </antd.Menu.SubMenu>

                </antd.Menu>

            </antd.Layout.Sider>;
        }
    }
