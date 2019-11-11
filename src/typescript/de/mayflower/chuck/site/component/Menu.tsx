
    import * as gp         from '../..';
    import * as React      from 'react';
    import * as antd       from 'antd';
    import { SelectParam } from 'antd/lib/menu';

    /*******************************************************************************************************************
    *   React properties for the Menu component.
    *******************************************************************************************************************/
    export interface MenuProps
    {
        /** Being invoked when the selected menu item changes. */
        onChangeMenu: ( key:gp.MenuItem ) => void;
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
                    breakpoint="lg"
                    collapsedWidth="0"
                    theme="dark"
                    style={ { height: '100vh', } }
                >

                <div className="logo" />

                <antd.Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={ [ gp.MenuItem.RANDOM_JOKE ] }
                    onSelect={ ( param:SelectParam ) :void => { this.props.onChangeMenu( param.key as gp.MenuItem ); } }
                >

                    <antd.Menu.Item key={ gp.MenuItem.RANDOM_JOKE }>
                        <antd.Icon type="user" />
                        <span>{ gp.MenuItem.RANDOM_JOKE }</span>
                    </antd.Menu.Item>

                    <antd.Menu.Item key={ gp.MenuItem.DOWNLOAD }>
                        <antd.Icon type="video-camera" />
                        <span>{ gp.MenuItem.DOWNLOAD }</span>
                    </antd.Menu.Item>

                    <antd.Menu.Item key={ gp.MenuItem.ABOUT }>
                        <antd.Icon type="upload" />
                        <span>{ gp.MenuItem.ABOUT }</span>
                    </antd.Menu.Item>

                    <antd.Menu.Item key={ gp.MenuItem.GO_PREMIUM }>
                        <antd.Icon type="user" />
                        <span>{ gp.MenuItem.GO_PREMIUM }</span>
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
